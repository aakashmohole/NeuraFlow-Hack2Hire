from flask import Flask, request, jsonify
from werkzeug.security import check_password_hash
from flask_cors import CORS
import psycopg2
import jwt
import datetime

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# PostgreSQL Database connection function
def get_db_connection():
    conn = psycopg2.connect(
        dbname="NeuraFlow",
        user="postgres",
        password="aakashA415",
        host="localhost",
        port="5432"
    )
    
    return conn

# Secret key for encoding the JWT
app.config['SECRET_KEY'] = 'asdfghjkl'  # Replace with a strong secret key

# Login endpoint
@app.route('/login', methods=['POST'])
def login():
    # Get data from request
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    # Validate input
    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400

    try:
        # Connect to the database
        conn = get_db_connection()
        cur = conn.cursor()

        # Fetch user data by email
        cur.execute("SELECT * FROM users WHERE email = %s", (email,))
        user = cur.fetchone()

        # Close the database connection
        cur.close()
        conn.close()

        # Check if user exists and password is correct
        if user and check_password_hash(user[6], password):  # Assuming password hash is stored in the 5th column
            # Generate JWT token
            token = jwt.encode({
                'user_id': user[0],  # assuming user_id is the first column in the users table
                'email': email,
                'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)  # Token expires in 1 hour
            }, app.config['SECRET_KEY'], algorithm="HS256")
            
            return jsonify({"message": "Login successful", "token": token}), 200
        else:
            return jsonify({"error": "Invalid email or password"}), 401

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
