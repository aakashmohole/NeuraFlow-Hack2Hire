import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from utils.authentication import login, logout, register
from controller.profile_UpdateController import get_user_details, update_profile_photo, update_user_details
from controller.client_ProjectsController import create_client_project, get_client_projects_controller, get_client_project_by_id__controller
from controller.freelancer_ApplicationsController import apply_for_work_controller
from controller.event_RegistrationController import register_event
from controller.recommandationController import get_user_recommendations
from controller.servicesController import add_services_controller, get_all_services
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

@app.route('/get_user_details', methods=['GET'])
def get_user_details_route():
    # Calling the Logout function from authentication.py
    return get_user_details()

@app.route('/update_user_details', methods=['POST'])
def update_user_details_route():
    # Calling the Logout function from authentication.py
    return update_user_details()

@app.route('/update_profile_photo', methods=['POST'])
def update_profile_photo_route():
    # Calling the Logout function from authentication.py
    return update_profile_photo()

@app.route('/create_client_project', methods=['POST'])
def create_client_project_route():
    # Calling the Logout function from authentication.py
    return create_client_project()

@app.route('/get_client_projects', methods=['GET'])
def get_client_projects_route():
    # Calling the Logout function from authentication.py
    return get_client_projects_controller()

@app.route('/get_client_project_by_id/<int:project_id>', methods=['GET'])
def get_client_project_by_id_route(project_id):
    # Calling the controller and passing the project_id
    return get_client_project_by_id__controller(project_id)

@app.route('/apply_for_work', methods=['POST'])
def apply_for_work_controller_route():
    # Calling the Logout function from authentication.py
    return apply_for_work_controller()


@app.route('/event_registration', methods=['POST'])
def event_registration_route():
    # Calling the Logout function from authentication.py
    return register_event()

@app.route('/get_user_recommendations', methods=['GET'])
def get_user_recommendations_route():
    # Calling the Logout function from authentication.py
    return get_user_recommendations()


@app.route('/add_services', methods=['POST'])
def add_services_route():
    # Calling the Logout function from authentication.py
    return add_services_controller()

@app.route('/get_all_services', methods=['GET'])
def get_all_services_route():
    # Calling the Logout function from authentication.py
    return get_all_services()
if __name__ == '__main__':
    app.run(debug=True)
