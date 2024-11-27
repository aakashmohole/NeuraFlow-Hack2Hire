from flask import Flask, request, jsonify
from models.join_member_model import check_membership, add_user_to_community, update_members_count, check_community_owner
from utils.verify_token import verify_token
import traceback

def join_community(channel_id):
    try :
        # Get the logged-in user's ID
        user_id = verify_token()
        if not user_id:
            return jsonify({"error": "Invalid or expired token"}), 401
 
        if not user_id or not channel_id:
            return jsonify({'error': 'User ID and channel ID are required'}), 400

       # Check if the user is the creator of the community
        owner_channel_id = check_community_owner(channel_id)
        print(owner_channel_id)
        if owner_channel_id == user_id:
            return jsonify({'error': 'Admin is already in community'}), 400
        
        # Check if the user is already a member
        existing_membership = check_membership(user_id, channel_id)
        if existing_membership:
            return jsonify({'error': 'User already joined this community'}), 400

    
        # Add user to the community
        id = add_user_to_community(user_id, channel_id)
        if not id :
            return jsonify({"error":"Failed to join community"}), 500
        # Update the members count in the community
        
        update_members_count(channel_id)

        return jsonify({'message': 'User successfully joined the community'}), 201
    
    except Exception as e:
        traceback.print_exc()
        return jsonify({'error': 'An error occurred while processing the request'}), 500
