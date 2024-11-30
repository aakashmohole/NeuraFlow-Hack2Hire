from flask import jsonify, request
from utils.verify_token import verify_token
from models.service_model import create_service, get_all_services, service_images,get_service_id
from models.profile_update_model import get_user_from_db

import traceback

def add_services_controller():
    try:
        # Get the logged-in user's ID
        user_id = verify_token()
        if not user_id:
            return jsonify({"error": "Invalid or expired token"}), 401
        
        user_details = get_user_from_db(user_id)

        print(user_details[3])
        
        if user_details[3] != 'freelancer' :
            return jsonify({"error" : "Only freelancers can create services"});
        
        # Extract service details from the request
        # data = request.json
        data = request.form
        title = data.get('title')
        category = data.get('category')
        sub_category = data.get('sub_category')
        skills = data.get('skills')  # JSON array
        pricing = data.get('pricing')  # JSON array
        description = data.get('description')
        faq = data.get('faq')  # JSON array
        #  Handle file upload
        file_data = request.files.get('services_image')

        if not file_data:
            return jsonify({"error": "Profile photo is required"}), 400

        photo_url = service_images(file_data)
        if not photo_url:
            return jsonify({"error": "Failed to upload photo"}), 500
        
         # Validate required fields
        if not (title and category and sub_category and skills and pricing and description and faq):
            return jsonify({"error": "Missing required fields"}), 400
        
        # Call the model function to insert the data
        service_id = create_service(user_id, title, category, sub_category, skills, pricing, description, faq, photo_url)
        if not service_id:
            return jsonify({"error": "Faild to create services"}), 500

        return jsonify({"message": "Service added!"}), 200

    except Exception as e:
        traceback.print_exc()
        return jsonify({"error": f"An error occurred: {e}"}), 500

    
def get_all_services_controller():
    services = get_all_services()
    return jsonify(services), 200   

def get_service_by_id(service_id):
    if not service_id:
        return jsonify({"error": "Unautheized request"}),401

    service = get_service_id(service_id)

    if not service:
        return jsonify({"error":"Failed to fetch the service"})

    return jsonify(service)


    

