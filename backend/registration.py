from flask import Flask, request, jsonify
from werkzeug.security import generate_password_hash
from flask_cors import CORS  # Import CORS
import psycopg2
import re

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


# Sample in-memory database (use a real database in production)
# users_db = {}

def get_db_connection():
    conn = psycopg2.connect(
        dbname="NeuraFlow",
        user="postgres",
        password="aakashA415",
        host="localhost",
        port="5432"
    )
    
    print(conn)
    return conn

# Validation function for password strength (optional)
def is_password_strong(password):
    # Ensure password has at least 8 characters, one uppercase, one lowercase, one number, and one special character
    if (len(password) >= 8 and re.search(r"[A-Z]", password) and
        re.search(r"[a-z]", password) and re.search(r"[0-9]", password) and
        re.search(r"[!@#$%^&*()_+=\-]", password)):
        return True
    return False

@app.route('/register', methods=['POST'])
def register():
    # Get data from request
    data = request.get_json()

    # Extract fields
    firstname = data.get('firstName')
    lastname = data.get('lastName')
    account_type = data.get('accountType')
    email = data.get('email')
    mobile_no = data.get('mobileNo')
    password = data.get('password')
    confirm_password = data.get('confirmPassword')

    # Validate fields
    if not firstname or not lastname or not account_type or not email or not mobile_no or not  password or not confirm_password:
        return jsonify({"error": "all fileds are required"}), 400
    

    if not is_password_strong(password):
        return jsonify({"error": "Password is too weak"}), 400

    if password != confirm_password:
        return jsonify({"error":"password and confirme password should be same!"}), 400

    
    # Hash the password before storing it (for security)
    hashed_password = generate_password_hash(password)

    # Insert user data into the PostgreSQL database
    try:
        conn = get_db_connection()
        cur = conn.cursor()

        # Check if email already exists in the database
        cur.execute("SELECT * FROM Users WHERE email = %s", (email,))
        existing_user = cur.fetchone()
        if existing_user:
            return jsonify({"error": "Email already registered"}), 400

        # Insert new user
        cur.execute("""
            INSERT INTO Users (firstname, lastname, account_type, email, mobile_no, password)
            VALUES (%s, %s, %s, %s, %s, %s)
        """, (firstname, lastname, account_type, email, mobile_no, hashed_password))

        # Commit the transaction
        conn.commit()
        cur.close()
        conn.close()
        
        return jsonify({"message": "User registered successfully"}), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
