from flask import jsonify, request
from models.profile_update import UserModel
from utils.verify_token import verify_token
import cloudinary.uploader
import json

def get_user_details():
    user_id = verify_token()
    if not user_id:
        return jsonify({"error": "User ID not found in token"}), 400

    user, error = UserModel.get_user_by_id(user_id)
    if error:
        return jsonify({"error": error}), 500
    if not user:
        return jsonify({"error": "User not found"}), 404

    return jsonify({"user": UserModel.format_user(user)}), 200


def update_user_details():
    user_id = verify_token()
    if not user_id:
        return jsonify({"error": "User ID not found in token"}), 400

    data = request.json
    updates = {}

    fields = {
        'profilePhoto': 'profile_photo',
        'firstName': 'firstname',
        'lastName': 'lastname',
        'mobileNo': 'mobile_no',
        'country': 'country',
        'workingDomain': 'working_domain',
        'technicalSkills': 'technical_skills',
        'workExperience': 'work_experience',
        'educationalDetails': 'educational_details',
        'hourlyRate': 'hourly_rate',
        'socialMediaLinks': 'social_media_links',
    }

    for key, db_field in fields.items():
        if key in data:
            updates[db_field] = json.dumps(data[key]) if isinstance(data[key], dict) else data[key]

    if updates:
        error = UserModel.update_user(user_id, updates)
        if error:
            return jsonify({"error": error}), 500

    user, error = UserModel.get_user_by_id(user_id)
    if error:
        return jsonify({"error": error}), 500
    return jsonify({"message": "User details updated successfully", "user": UserModel.format_user(user)}), 200


def update_profile_photo():
    user_id = verify_token()
    if not user_id:
        return jsonify({"error": "User ID not found in token"}), 400

    photo = request.files.get('profilePhoto')
    if not photo:
        return jsonify({"error": "No profile photo uploaded"}), 400

    try:
        upload_result = cloudinary.uploader.upload(photo, folder="profilePhoto")
        photo_url = upload_result.get('secure_url')

        if not photo_url:
            return jsonify({"error": "Failed to upload profile photo"}), 500

        error = UserModel.save_profile_photo(user_id, photo_url)
        if error:
            return jsonify({"error": error}), 500

        user, error = UserModel.get_user_by_id(user_id)
        if error:
            return jsonify({"error": error}), 500

        return jsonify({"user": UserModel.format_user(user)}), 200
    except Exception as e:
        return jsonify({"error": f"Unexpected error occurred: {str(e)}"}), 500
