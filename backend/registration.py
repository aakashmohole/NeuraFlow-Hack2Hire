from flask import Flask, request, jsonify
from werkzeug.security import generate_password_hash
import re

app = Flask(__name__)

# Sample in-memory database (use a real database in production)
users_db = {}

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
    firstname = data.get('firstname')
    lastname = data.get('lastname')
    account_type = data.get('account_type')
    email = data.get('email')
    mobile_no = data.get('mobile_no')
    password = data.get('password')
    confirm_password = data.get('confirm_password')

    # Validate fields
    if not firstname or not lastname or not account_type or not email or not mobile_no or not  password or not confirm_password:
        return jsonify({"error": "all fileds are required"}), 400
    
    if email in users_db:
        return jsonify({"error": "Email already registered"}), 400

    if not is_password_strong(password):
        return jsonify({"error": "Password is too weak"}), 400

    if password != confirm_password:
        return jsonify({"password and confirme password should be same!"})

    
    # Hash the password before storing it (for security)
    hashed_password = generate_password_hash(password)
    hashed_confiremd_password = generate_password_hash(confirm_password)

    # Save to 'database'
    users_db[email] = {
        "firstname": firstname,
        "lastname": lastname,
        "account_type": account_type,
        "email": email,
        "mobile_no": mobile_no,
        "password": hashed_password,
        "confirm_password": hashed_confiremd_password
    }

    return jsonify({"message": "User registered successfully"}), 201

if __name__ == '__main__':
    app.run(debug=True)
