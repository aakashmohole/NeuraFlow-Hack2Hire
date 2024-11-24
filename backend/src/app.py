import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from utils.authentication import login, logout, register
from controller.profile_UpdateController import get_user_details, update_user_details, update_profile_photo
from utils.connection import get_db_connection

app = Flask(__name__)
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

# Routes
app.route('/get_user', methods=['GET'])(get_user_details)
app.route('/update_user', methods=['POST'])(update_user_details)
app.route('/update_profile_photo', methods=['POST'])(update_profile_photo)

if __name__ == '__main__':
    app.run(debug=True)
