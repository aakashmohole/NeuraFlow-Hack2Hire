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
from controller.channel_CreateController import channel_registrationController, get_channel_detailsController,get_channel_details_by_idController,get_all_channels
from controller.join_memberController import join_community
from controller.community_postController import post_in_channel, like_postController, add_commentController, get_post_detailsController

app = Flask(__name__)
CORS(app, supports_credentials=True)

# Secret key for encoding/decoding JWT tokens
app.config['SECRET_KEY'] = os.getenv("SECRET_KEY") 

# Register Route
@app.route('/register', methods=['POST'])
def register_route():
    return register()

# Login Route
@app.route('/login', methods=['POST'])
def login_route():
    return login()

# Logout Route
@app.route('/logout', methods=['POST'])
def logout_route():
    return logout()

@app.route('/get_user_details', methods=['GET'])
def get_user_details_route():
    return get_user_details()

@app.route('/update_user_details', methods=['POST'])
def update_user_details_route():
    return update_user_details()

@app.route('/update_profile_photo', methods=['POST'])
def update_profile_photo_route():
    return update_profile_photo()

@app.route('/create_client_project', methods=['POST'])
def create_client_project_route():
    return create_client_project()

@app.route('/get_client_projects', methods=['GET'])
def get_client_projects_route():
    return get_client_projects_controller()

@app.route('/get_client_project_by_id/<int:project_id>', methods=['GET'])
def get_client_project_by_id_route(project_id):
    return get_client_project_by_id__controller(project_id)

@app.route('/apply_for_work', methods=['POST'])
def apply_for_work_controller_route():
    return apply_for_work_controller()


@app.route('/event_registration', methods=['POST'])
def event_registration_route():
    return register_event()

@app.route('/get_user_recommendations', methods=['GET'])
def get_user_recommendations_route():
    return get_user_recommendations()


@app.route('/add_services', methods=['POST'])
def add_services_route():
    return add_services_controller()

@app.route('/get_all_services', methods=['GET'])
def get_all_services_route():
    return get_all_services()

@app.route('/channel_registration', methods=['POST'])
def channel_registration_route():
    return channel_registrationController()

@app.route('/get_channel_details', methods=['GET'])
def get_channel_details_route():
    return get_channel_detailsController()

@app.route('/get_channel_details_by_id/<int:channel_id>', methods=['GET'])
def get_channel_details_by_id_route(channel_id):
    return get_channel_details_by_idController(channel_id)

@app.route('/join_community/<int:channel_id>', methods=['POST'])
def join_community_route(channel_id):
    return join_community(channel_id)

@app.route('/post_in_channel/<int:channel_id>', methods=['POST'])
def post_in_channel_route(channel_id):
    return post_in_channel(channel_id)

@app.route('/like_postController/<int:post_id>', methods=['POST'])
def like_postController_route(post_id):
    return like_postController(post_id)

@app.route('/add_comment/<int:post_id>', methods=['POST'])
def add_commentController_route(post_id):
    return add_commentController(post_id)

# get post_details rout
@app.route('/get_post_details/<int:post_id>', methods=['POST'])
def get_post_detailsController_route(post_id):
    return get_post_detailsController(post_id)

@app.route('/get_channels', methods=['GET'])
def get_all_channels_route():
    return get_all_channels()


if __name__ == '__main__':
    app.run(debug=True)
