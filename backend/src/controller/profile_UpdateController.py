import jwt
from flask import jsonify, request
from models.profile_update_model import get_user_from_db, update_user_in_db, upload_profile_photo, fetch_user_by_id
from utils.verify_token import verify_token
import json

def update_user_details():
    user_id, error = verify_token()  # No need for app parameter here
    if not user_id:
        return jsonify({"error": error}), 401
    
    data = request.json
    user, error = get_user_from_db(user_id)
    if not user:
        return jsonify({"error": error}), 404
    
    update_fields = []
    update_values = []

    # Process fields from the request and prepare update query
    if 'profile_photo' in data:
        update_fields.append("profile_photo = %s")
        update_values.append(data['profile_photo'])
    if 'firstname' in data:
        update_fields.append("firstname = %s")
        update_values.append(data['firstname'])
    # ... Add other fields as needed
    if 'lastname' in data:
        update_fields.append("lastname = %s")
        update_values.append(data['lastname'])
    if 'mobile_no' in data:
        update_fields.append("mobile_no = %s")
        update_values.append(data['mobile_no'])
    if 'country' in data:
        update_fields.append("country = %s")
        update_values.append(data['country'])
    if 'working_domain' in data:
        update_fields.append("working_domain = %s")
        update_values.append(data['working_domain'])
    if 'technical_skills' in data:
        update_fields.append("technical_skills = %s")
        update_values.append(data['technical_skills'])
    if 'work_experience' in data:
        update_fields.append("work_experience = %s")
        update_values.append(json.dumps(data['work_experience']))
    if 'educational_details' in data:
        update_fields.append("educational_details = %s")
        update_values.append(json.dumps(data['educational_details']))
    if 'hourly_rate' in data:
        update_fields.append("hourly_rate = %s")
        update_values.append(data['hourly_rate'])
    if 'social_media_links' in data:
        update_fields.append("social_media_links = %s")
        update_values.append(json.dumps(data['social_media_links']))
    
    if update_fields:
        update_query = f"UPDATE users SET {', '.join(update_fields)} WHERE id = %s"
        update_values.append(user_id)
        error = update_user_in_db(user_id, update_query, update_values)
        if error:
            return jsonify({"error": error}), 500

    user, error = get_user_from_db(user_id)
    if not user:
        return jsonify({"error": error}), 404
    
    user_details = {
        "id": user[0],
        "firstname": user[1],
        "lastname": user[2],
        "account_type": user[3],
        "email": user[4],
        "mobile_no": user[5],
        "profile_photo": user[7],
        "country": user[8],
        "working_domain": user[9],
        "technical_skills": user[10],
        "work_experience": user[11],
        "educational_details": user[12],
        "hourly_rate": user[13],
        "social_media_links": user[14],
        "connects": user[15]
    }

    return jsonify({"message": "User details updated successfully", "user": user_details}), 200


def update_profile_photo():
    user_id, error = verify_token()  # No need for app parameter here
    if not user_id:
        return jsonify({"error": error}), 401
    
    user, error = get_user_from_db(user_id)
    if not user:
        return jsonify({"error": error}), 404
    
    file_data = request.files['profile_photo']
    photo_url, error = upload_profile_photo(file_data)
    if error:
        return jsonify({"error": error}), 500
    
    update_query = "UPDATE users SET profile_photo = %s WHERE id = %s"
    error = update_user_in_db(user_id, update_query, (photo_url, user_id))
    if error:
        return jsonify({"error": error}), 500
    
    user, error = get_user_from_db(user_id)
    if not user:
        return jsonify({"error": error}), 404
    
    user_details = {
        "id": user[0],
        "firstname": user[1],
        "lastname": user[2],
        "account_type": user[3],
        "email": user[4],
        "mobile_no": user[5],
        "profile_photo": user[7],
        "country": user[8],
        "working_domain": user[9],
        "technical_skills": user[10],
        "work_experience": user[11],
        "educational_details": user[12],
        "hourly_rate": user[13],
        "social_media_links": user[14],
        "connects": user[15]
    }

    return jsonify({"user": user_details}), 200


def get_user_details():
    user_id, error = verify_token()  # No need for app parameter here
    if not user_id:
        return jsonify({"error": "Unauthorized"}), 401

    user_details = fetch_user_by_id(user_id)
    if not user_details:
        return jsonify({"error": "User not found"}), 404
    if isinstance(user_details, tuple) and user_details[1] == 500:
        return jsonify(user_details[0]), 500

    return jsonify({"user": user_details}), 200
