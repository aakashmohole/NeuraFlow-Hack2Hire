import jwt
import os
from flask import Flask, request, jsonify
from connection import get_db_connection

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv("SECRET_KEY")  # Replace with your actual secret key

def decode_jwt_token(token):
    try:
        # Decode the JWT using the secret key
        decoded_token = jwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])
        return decoded_token
    except jwt.ExpiredSignatureError:
        return None
    except jwt.InvalidTokenError:
        return None

def update_user_details():
    # Step : Connect to the database
    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "Database connection failed"}), 500
    cur = conn.cursor()

    # Step : Retrieve the JWT token from the request headers
    auth_header = request.headers.get('Authorization')
    if not auth_header:
        return jsonify({"error": "Authorization header missing"}), 401

    # Split "Bearer <token>"
    token = auth_header.split(" ")[1] if " " in auth_header else auth_header
    print(token)

    # Step : Decode JWT and get the user_id
    decoded_token = decode_jwt_token(token)
    if not decoded_token:
        return jsonify({"error": "Invalid or expired token"}), 401

    user_id = decoded_token.get('user_id')
    if not user_id:
        return jsonify({"error": "User ID not found in token"}), 400

    # Step : Check if user exists in the database
    cur.execute("SELECT * FROM users WHERE id = %s", (user_id,))
    user = cur.fetchone()
    if not user:
        return jsonify({"error": "Unauthorized request"}), 404

    # Step : Parse incoming JSON data for the update
    data = request.json

    # Prepare the update query dynamically
    update_fields = []
    update_values = []

    # Fields to update if provided in the request data
    if 'profilePhoto' in data:
        update_fields.append("profile_photo = %s")
        update_values.append(data['profilePhoto'])
    if 'firstName' in data:
        update_fields.append("firstname = %s")
        update_values.append(data['firstName'])
    if 'lastName' in data:
        update_fields.append("lastname = %s")
        update_values.append(data['lastName'])
    if 'mobileNo' in data:
        update_fields.append("mobile_no = %s")
        update_values.append(data['mobileNo'])
    if 'country' in data:
        update_fields.append("country = %s")
        update_values.append(data['country'])
    if 'workingDomain' in data:
        update_fields.append("working_domain = %s")
        update_values.append(data['workingDomain'])
    if 'technicalSkills' in data:
        update_fields.append("technical_skills = %s")
        update_values.append(data['technicalSkills'])
    if 'workExperience' in data:
        update_fields.append("work_experience = %s")
        update_values.append(data['workExperience'])
    if 'educationalDetails' in data:
        update_fields.append("educational_details = %s")
        update_values.append(data['educationalDetails'])
    if 'hourlyRate' in data:
        update_fields.append("hourly_rate = %s")
        update_values.append(data['hourlyRate'])
    if 'socialMediaLinks' in data:
        update_fields.append("social_media_links = %s")
        update_values.append(data['socialMediaLinks'])

    # If there are fields to update, construct and execute the update query
    if update_fields:
        update_query = f"""
        UPDATE users
        SET {', '.join(update_fields)}
        WHERE id = %s
        """
        update_values.append(user_id)  # Add the user_id as the last parameter
        cur.execute(update_query, update_values)
        conn.commit()

    # Fetch the updated user details
    cur.execute("SELECT * FROM users WHERE id = %s", (user_id,))
    updated_user = cur.fetchone()

    # Close the cursor and connection
    cur.close()
    conn.close()

    # Prepare the response
    user_details = {
        "id": updated_user[0],
        "firstname": updated_user[1],
        "lastname": updated_user[2],
        "account_type" : updated_user[3],
        "email" : updated_user[4],
        "mobile_no": updated_user[5],
        "profile_photo" : updated_user[7],
        "country": updated_user[8],
        "working_domain": updated_user[9],
        "technical_skills": updated_user[10],
        "work_experience": updated_user[11],
        "educational_details": updated_user[12],
        "hourly_rate": updated_user[13],
        "social_media_links": updated_user[14]
    }

    return jsonify({"message": "User details updated successfully", "user": user_details}), 200


def get_user_details():
    # Step : Connect to the database
    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "Database connection failed"}), 500
    cur = conn.cursor()

    # Step : Retrieve the JWT token from the request headers
    auth_header = request.headers.get('Authorization')
    if not auth_header:
        return jsonify({"error": "Authorization header missing"}), 401

    # Split "Bearer <token>"
    token = auth_header.split(" ")[1] if " " in auth_header else auth_header
    print(token)

    # Step : Decode JWT and get the user_id
    decoded_token = decode_jwt_token(token)
    if not decoded_token:
        return jsonify({"error": "Invalid or expired token"}), 401

    user_id = decoded_token.get('user_id')
    if not user_id:
        return jsonify({"error": "User ID not found in token"}), 400

    # Step : Fetch the user details from the database
    cur.execute("SELECT * FROM users WHERE id = %s", (user_id,))
    user = cur.fetchone()

    if not user:
        return jsonify({"error": "User not found"}), 404

    # Close the cursor and connection
    cur.close()
    conn.close()

    # Prepare the user details to be returned in the response
    user_details = {
        "id": user[0],
        "profile_photo": user[1],
        "firstname": user[2],
        "lastname": user[3],
        "mobile_no": user[4],
        "country": user[5],
        "working_domain": user[6],
        "technical_skills": user[7],
        "work_experience": user[8],
        "educational_details": user[9],
        "hourly_rate": user[10],
        "social_media_links": user[11]
    }

    return jsonify({"user": user_details}), 200

if __name__ == '__main__':
    app.run(debug=True)
