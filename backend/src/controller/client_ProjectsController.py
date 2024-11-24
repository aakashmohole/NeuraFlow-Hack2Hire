from flask import Flask, request, jsonify
from flask_cors import CORS
from utils.verify_token import verify_token
from models.client_project_model import create_project, get_client_projects, get_client_project_by_id
import os 
app = Flask(__name__)
CORS(app, supports_credentials=True)
app.config['SECRET_KEY'] = os.getenv("SECRET_KEY")  # Replace with your actual secret key



def create_client_project():
    user_id, error = verify_token()
    if error:
        return jsonify({"error": error}), 401

    data = request.get_json()
    domain = data.get('domain')
    title = data.get('title')
    description = data.get('description')
    skills = data.get('skills')
    proposal_document = data.get('proposal_document')
    project_deadline = data.get('project_deadline')
    work_type = data.get('work_type')
    price = data.get('price')

    if not all([domain, title, description, skills, project_deadline, work_type, price]):
        return jsonify({"error": "Missing required fields"}), 400

    if work_type not in ['Hourly Rate', 'Fixed Rate']:
        return jsonify({"error": "Invalid work type. Must be 'HourlyRate' or 'FixedRate'."}), 400

    if price < 5:
        return jsonify({"error": "Price must be at least $5"}), 400

    project_id, error = create_project(user_id, domain, title, description, skills, proposal_document, project_deadline, work_type, price)
    
    if error:
        return jsonify({"error": error}), 500
    
    return jsonify({"message": "Project created successfully", "project_id": project_id}), 201



def get_client_projects_controller():
    user_id, error = verify_token()
    if error:
        return jsonify({"error": error}), 401

    projects, error = get_client_projects(user_id)
    if error:
        return jsonify({"error": error}), 500
    
    return jsonify(projects), 200



def get_client_project_by_id__controller(project_id):
    user_id, error = verify_token()
    if error:
        return jsonify({"error": error}), 401

    project_details, error = get_client_project_by_id(project_id)
    if error:
        return jsonify({"error": error}), 500
    
    return jsonify({"project_details": project_details}), 200


if __name__ == '__main__':
    app.run(debug=True)
