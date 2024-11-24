from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.metrics.pairwise import cosine_similarity
import pickle
#from connection import get_db_connection  
from utils.connection import get_db_connection 
import os
from flask_cors import CORS
import jwt

app = Flask(__name__)
CORS(app, supports_credentials=True)

# Secret key for encoding the JWT
app.config['SECRET_KEY'] = os.getenv("SECRET_KEY")

# Function for verifying the token of the logged-in user
def verify_token():
    token = ""
    auth_header = request.headers.get('Authorization')
    accessToken = request.cookies.get('token')

    if not auth_header and not accessToken:
        return jsonify({"error": "Authorization header or token missing"}), 401

    if auth_header:
        token = auth_header.split(" ")[1] if " " in auth_header else auth_header
    elif accessToken:
        token = accessToken

    decoded_token = decode_jwt_token(token)
    if not decoded_token:
        return jsonify({"error": "Invalid or expired token"}), 401

    user_id = decoded_token.get('user_id')
    if not user_id:
        return jsonify({"error": "User  ID not found in token"}), 400

    return user_id

# Decode JWT function
def decode_jwt_token(token):
    try:
        decoded_token = jwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])
        return decoded_token
    except jwt.ExpiredSignatureError:
        return None
    except jwt.InvalidTokenError:
        return None

def fetch_user_data(user_id):
    """
    Fetch user-specific project data (domain, work type, price) from the database 
    and return as individual variables.
    """
    conn = get_db_connection()
    if not conn:
        return None, None, None, "Failed to connect to database"

    try:
        cursor = conn.cursor()
        cursor.execute(
            SELECT domain, work_type, price
            FROM clientprojects
            WHERE user_id = %s;
            , (user_id,))
        records = cursor.fetchall()
        conn.close()

        # Extract data from the fetched records
        domains = [record[0] for record in records]
        work_types = [record[1] for record in records]
        prices = [record[2] for record in records]

        return domains, work_types, prices, None
    except Exception as e:
        conn.close()
        return None, None, None, str(e)

# Load the dataset
df = pd.read_csv('./dataset.csv')

# Load the pre-trained KMeans model
with open('model.pkl', 'rb') as model_file:
    kmeans_model = pickle.load(model_file)

# Recommendation function
def recommend_projects(domain, freelancer_type, budget=None, top_n=5):
    # Prepare user input for domain and type
    user_data = pd.DataFrame({'Domain': domain, 'Type': [freelancer_type] * len(domain)})
    user_skill_vector = encoder.transform(user_data)

    # Handle budget and numerical features
    user_budget = budget if budget else df['Price'].mean()
    user_numerical_features = np.array([[user_budget]])
    user_numerical_features_scaled = scaler.transform(user_numerical_features)
    user_numerical_features_scaled = np.repeat(user_numerical_features_scaled, len(domain), axis=0)

    # Combine encoded and scaled features
    user_features = np.hstack((user_skill_vector.toarray(), user_numerical_features_scaled))

    # Compute cosine similarity
    similarities = cosine_similarity(features, user_features).mean(axis=1)
    df['SimilarityScore'] = similarities

    # Filter projects by budget
    if budget:
        matching_projects = df[df['Price'] <= budget]
    else:
        matching_projects = df

    # Sort by similarity score and select top recommendations
    recommendations = matching_projects.sort_values(by='SimilarityScore', ascending=False).head(top_n)

    return recommendations

# Flask API route to recommend projects
@app.route('/recommend', methods=['POST'])
def recommend():
    try:
        # Verify user login and get user ID
        user_id = verify_token()
        if isinstance(user_id, tuple):  # If `verify_token` returns a tuple, it's an error
            return user_id  # Return the error response

        # Fetch user-specific data
        domains, work_types, prices, error = fetch_user_data(user_id)
        if error:
            return jsonify({"error": f"Error fetching user data: {error}"}), 500

        # Parse input data
        data = request.json
        freelancer_type = data.get('freelancer_type', 'hourly')
        budget = data.get('budget', None)

        # Validate inputs
        if not domains:
            return jsonify({"error": "No projects found for the user"}), 404

        # Get recommendations
        recommendations = recommend_projects(domains, freelancer_type, budget)

        # Convert DataFrame to a JSON-compatible format
        recommendations_json = recommendations.to_dict(orient='records')

        # Return the recommendations as JSON
        return jsonify({"recommendations": recommendations_json})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)