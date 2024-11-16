import jwt
from flask import Flask, request, jsonify
from authentication import register, login, logout # Assuming these are defined in authentication.py
from profile_update import update_user_details, get_user_details, update_profile_photo # Assuming these are defined in authentication.py
from flask_cors import CORS
app = Flask(__name__)
import os
CORS(app, supports_credentials=True)

# Secret key for encoding/decoding JWT tokens
app.config['SECRET_KEY'] = os.getenv("SECRET_KEY") 

# Register Route
@app.route('/register', methods=['POST'])
def register_route():
    # Calling the register function from authentication.py
    return register()

# Login Route
@app.route('/login', methods=['POST'])
def login_route():
    # Calling the login function from authentication.py
    return login()


# Logout Route
@app.route('/logout', methods=['POST'])
def logout_route():
    # Calling the Logout function from authentication.py
    return logout()


# update_user_details Route
@app.route('/update_user_details', methods=['POST'])
def update_user_details_route():
    # Calling the update_user_details function from profile_update.py
    return update_user_details()


# get_user_details Route
@app.route('/get_user_details', methods=['GET'])
def get_user_details_route():
    # Calling the get_user_details function from profile_update.py
    return get_user_details()


# update_profile_photo Route
@app.route('/update_profile_photo', methods=['POST'])
def update_profile_photo_route():
    # Calling the get_user_details function from profile_update.py
    return update_profile_photo()

if __name__ == '__main__':
    app.run(debug=True)
