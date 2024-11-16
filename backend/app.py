import jwt
from flask import Flask, request, jsonify
from User.authentication import register, login, logout # Assuming these are defined in authentication.py
from User.profile_update import update_user_details, get_user_details # Assuming these are defined in authentication.py
from flask_cors import CORS
app = Flask(__name__)
CORS(app, supports_credentials=True)

# Secret key for encoding/decoding JWT tokens
app.config['SECRET_KEY'] = 'asdfghjkl'

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
@app.route('/get_user_details', methods=['POST'])
def get_user_details_route():
    # Calling the get_user_details function from profile_update.py
    return get_user_details()

if __name__ == '__main__':
    app.run(debug=True)
