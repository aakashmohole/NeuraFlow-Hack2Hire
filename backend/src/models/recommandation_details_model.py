from utils.connection import get_db_connection
import pandas as pd
import numpy as np
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.metrics.pairwise import cosine_similarity
import pickle
import os

# Function to fetch user work details from the database
def get_user_work_details(user_id):
    conn = get_db_connection()
    if not conn:
        return None

    try:
        cursor = conn.cursor()
        cursor.execute("""
            SELECT working_domain, work_type, rate
            FROM users
            WHERE id = %s
        """, (user_id,))
        result = cursor.fetchone()

        if result:
            return {
                "domain": result[0],
                "work_type": result[1],
                "rate": result[2]
            }
        return None

    except Exception as e:
        print(f"Database error: {e}")
        return None

    finally:
        cursor.close()
        conn.close()

# Function to get recommendations based on domain, work_type, and rate
def get_recommendations(domain, work_type, rate=None, top_n=5):
    # Example logic for generating recommendations
    # Replace this with your actual recommendation model logic
       
    # Load the dataset
    df = pd.read_csv('C://Users//Aakash//Desktop//NeuraFlow-Hack2Hire//backend//User//recommandation_system//dataset.csv')

    # Step 1: Encode the categorical features (Domain, Type)
    x_col = [domain, work_type]
    encoder = OneHotEncoder(handle_unknown='ignore')
    encoded_skills = encoder.fit_transform(
        np.array([domain, work_type]).T
    )

    # Step 2: Scale numerical features (Price)
    numerical_columns = [rate]
    prices_array = np.array(rate).reshape(-1, 1)  # Ensure prices is a 2D array
    scaler = StandardScaler()
    scaled_numerical = scaler.fit_transform(prices_array)

    print("Encoded Skills:", encoded_skills.toarray())
    print("Scaled Numerical Features:", scaled_numerical)

    # Step 3: Combine encoded categorical and numerical features
    features = np.hstack((encoded_skills.toarray(), scaled_numerical))

    # Load the pre-trained KMeans model
    with open('C://Users//Aakash//Desktop//NeuraFlow-Hack2Hire//backend//User//recommandation_system//model.pkl', 'rb') as model_file:
        kmeans_model = pickle.load(model_file)
 
    try:
        # Mock recommendation logic
        # Step 1: Prepare user input for domain and type (matching the encoder used in training)
        user_data = pd.DataFrame({'Domain': domain, 'Type': work_type * len(domain)})
        user_skill_vector = encoder.transform(user_data)  # Ensure same encoder as training

        # Step 2: Handle budget and numerical features
        user_budget = rate if rate else df['Price'].mean()
        user_numerical_features = np.array([[user_budget]])  # Single value
        user_numerical_features_scaled = scaler.transform(user_numerical_features)  # Ensure same scaler
        user_numerical_features_scaled = np.repeat(user_numerical_features_scaled, len(domain), axis=0)  # Match rows

        # Step 3: Combine encoded and scaled features
        user_features = np.hstack((user_skill_vector.toarray(), user_numerical_features_scaled))

        # Step 4: Compute cosine similarity
        similarities = cosine_similarity(features, user_features).mean(axis=1)  # Average across multiple inputs
        df['SimilarityScore'] = similarities  # Add similarity scores to the DataFrame

        # Step 5: Filter projects by budget, if specified
        if rate:
            matching_projects = df[df['Price'] <= rate]  # Only include projects within budget
        else:
            matching_projects = df  # Include all projects

        # Step 6: Sort by similarity score and select top recommendations
        recommendations = matching_projects.sort_values(by='SimilarityScore', ascending=False).head(top_n)

        return recommendations  # Return all information about the recommended projects


    except Exception as e:
        print(f"Recommendation model error: {e}")
        return None
