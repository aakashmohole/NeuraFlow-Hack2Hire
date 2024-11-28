from flask import request, jsonify
from utils.verify_token import verify_token
from models.channel_registration_model import channel_registration, get_channel_details, channel_images
# Controller for channel registration
def channel_registrationController():
    try:
        # Get the logged-in user's ID
        user_id = verify_token()
        if not user_id:
            return jsonify({"error": "Invalid or expired token"}), 401
        
        created_by = user_id
        # Extract user details
        data = request.form
        channel_name = data.get("channel_name")
        description = data.get("description")
        channel_category = data.get("channel_category")
        channel_photo = request.files.get('channel_photo')

        print(data)

        if not channel_photo or not channel_name or not channel_category or not description:
            return jsonify({"error" : "Missing fields"}),400


        photo_url = channel_images(channel_photo)
        if not photo_url:
            return jsonify({"error": "Failed to upload photo"}), 500
        
        # Call the model function to insert the data
        success = channel_registration(created_by, channel_name, description, channel_category, photo_url)
        if not success:
            return jsonify({"error": "Failed to create the channel"}), 500

        return jsonify({"message": "Channel created successfully!"}), 200

    except Exception as e:
        return jsonify({"error": f"An error occurred: {e}"}), 500

def get_channel_detailsController():
    try:
        # Get the logged-in user's ID
        user_id = verify_token()
        if not user_id:
            return jsonify({"error": "Invalid or expired token"}), 401
        
        channels = get_channel_details(user_id)
        if not channels:
            return jsonify({"error" : "Failed to fetch the channels"}),500

        return jsonify(channels), 200    
    except Exception as e:
        return jsonify({"error": f"An error occurred: {e}"}), 500

