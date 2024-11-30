import os
from flask import Flask, request, jsonify
from flask_cors import CORS
# Importing utility modules and controllers for handling various routes
from utils.authentication import login, logout, register
from controller.profile_UpdateController import get_user_details, update_profile_photo, update_user_details
from controller.client_ProjectsController import create_client_project, get_client_projects_controller, get_client_project_by_id__controller, get_all_client_projects_controller
from controller.freelancer_ApplicationsController import apply_for_work_controller
from controller.event_RegistrationController import register_event, get_all_registration_detailsController
from controller.recommandationController import get_user_recommendations
from controller.servicesController import add_services_controller, get_all_services
from controller.channel_CreateController import channel_registrationController, get_channel_detailsController,get_channel_details_by_idController,get_all_channels
from controller.join_memberController import join_community,get_all_members
from controller.community_postController import post_in_channel, like_postController, add_commentController, get_post_detailsController,get_post_like_comment_detailsController

# Initialize Flask application
app = Flask(__name__)

# Enable Cross-Origin Resource Sharing (CORS) to allow requests from different origins
CORS(app, supports_credentials=True)

# Secret key configuration for JWT token encoding and decoding
app.config['SECRET_KEY'] = os.getenv("SECRET_KEY")

# Authentication routes
@app.route('/register', methods=['POST'])
def register_route():
    """
    Route for user registration
    """
    return register()

@app.route('/login', methods=['POST'])
def login_route():
    """
    Route for user login
    """
    return login()

@app.route('/logout', methods=['POST'])
def logout_route():
    """
    Route for user logout
    """
    return logout()

# Profile management routes
@app.route('/get_user_details', methods=['GET'])
def get_user_details_route():
    """
    Route to fetch user profile details
    """
    return get_user_details()

@app.route('/update_user_details', methods=['POST'])
def update_user_details_route():
    """
    Route to update user profile details
    """
    return update_user_details()

@app.route('/update_profile_photo', methods=['POST'])
def update_profile_photo_route():
    """
    Route to update user profile photo
    """
    return update_profile_photo()

# Client project management routes
@app.route('/create_client_project', methods=['POST'])
def create_client_project_route():
    """
    Route to create a new client project
    """
    return create_client_project()

@app.route('/get_client_projects', methods=['GET'])
def get_client_projects_route():
    """
    Route to fetch client projects associated with the user
    """
    return get_client_projects_controller()

@app.route('/get_all_client_projects_controller', methods=['GET'])
def get_all_client_projects_controller_route():
    """
    Route to fetch all client projects
    """
    return get_all_client_projects_controller()

@app.route('/get_client_project_by_id/<int:project_id>', methods=['GET'])
def get_client_project_by_id_route(project_id):
    """
    Route to fetch details of a specific client project by ID
    """
    return get_client_project_by_id__controller(project_id)

@app.route('/apply_for_work/<int:project_id>', methods=['POST'])
def apply_for_work_controller_route(project_id):
    return apply_for_work_controller(project_id)

# Event registration routes
@app.route('/event_registration', methods=['POST'])
def event_registration_route():
    """
    Route to register for events
    """
    return register_event()

@app.route('/get_all_registration_details', methods=['GET'])
def get_all_registration_detailsController_route():
    """
    Route to fetch all event registration details
    """
    return get_all_registration_detailsController()

# Recommendation routes
@app.route('/get_user_recommendations', methods=['GET'])
def get_user_recommendations_route():
    """
    Route to fetch user recommendations
    """
    return get_user_recommendations()

# Service management routes
@app.route('/add_services', methods=['POST'])
def add_services_route():
    """
    Route to add a new service
    """
    return add_services_controller()

@app.route('/get_all_services', methods=['GET'])
def get_all_services_route():
    """
    Route to fetch all services
    """
    return get_all_services()

# Channel management routes
@app.route('/channel_registration', methods=['POST'])
def channel_registration_route():
    """
    Route to register a new channel
    """
    return channel_registrationController()

@app.route('/get_channel_details', methods=['GET'])
def get_channel_details_route():
    """
    Route to fetch details of channels
    """
    return get_channel_detailsController()

@app.route('/get_channel_details_by_id/<int:channel_id>', methods=['GET'])
def get_channel_details_by_id_route(channel_id):
    """
    Route to fetch details of a specific channel by ID
    """
    return get_channel_details_by_idController(channel_id)

# Community interaction routes
@app.route('/join_community/<int:channel_id>', methods=['POST'])
def join_community_route(channel_id):
    """
    Route to join a specific community channel
    """
    return join_community(channel_id)

@app.route('/get_all_members/<int:channel_id>', methods=['GET'])
def get_members_route(channel_id):
    return get_all_members(channel_id)

@app.route('/post_in_channel/<int:channel_id>', methods=['POST'])
def post_in_channel_route(channel_id):
    """
    Route to create a post in a specific channel
    """
    return post_in_channel(channel_id)

@app.route('/like_postController/<int:post_id>', methods=['POST'])
def like_postController_route(post_id):
    """
    Route to like a specific post
    """
    return like_postController(post_id)

@app.route('/add_comment/<int:post_id>', methods=['POST'])
def add_commentController_route(post_id):
    """
    Route to add a comment to a specific post
    """
    return add_commentController(post_id)

# get post_details rout
@app.route('/get_post_details/<int:post_id>', methods=['GET'])
def get_post_detailsController_route(post_id):
    """
    Route to fetch details of a specific post
    """
    return get_post_detailsController(post_id)

@app.route('/get_post_like_comment_details/<int:post_id>', methods=['GET'])
def get_post_like_comment_detailsController_route(post_id):
    """
    Route to fetch likes and comments details of a specific post
    """
    return get_post_like_comment_detailsController(post_id)

@app.route('/get_channels', methods=['GET'])
def get_all_channels_route():
    """
    Route to fetch all channels
    """
    return get_all_channels()

# Start the Flask server in debug mode
if __name__ == '__main__':
    app.run(debug=True)
