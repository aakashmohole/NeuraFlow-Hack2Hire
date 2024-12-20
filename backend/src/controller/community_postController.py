from flask import request, jsonify
from models.community_post_model import is_channel_admin, create_post, like_post, add_comment, get_post_details, get_total_comments, get_total_likes, get_post_details_by_channel
from utils.verify_token import verify_token
import traceback

# API to post content in a channel
def post_in_channel(channel_id):
    try:
        # Verify the token and get the user ID
        user_id = verify_token()
        if not user_id:
            return jsonify({"error": "Invalid or expired token"}), 401

        # Validate required inputs
        if not user_id or not channel_id:
            return jsonify({'error': 'User ID and channel ID are required'}), 400

        # Check if the user is the creator (admin) of the channel
        is_admin = is_channel_admin(user_id, channel_id)
        if not is_admin:
            return jsonify({'error': 'Only the channel admin can post'}), 403

        # Extract post content from the request
        post_content = request.json.get("content")
        if not post_content:
            return jsonify({'error': 'Post content is required'}), 400

        # Add your logic here to save the post (e.g., to a `posts` table)
        # Assuming a function `save_post(user_id, channel_id, post_content)` exists
        # post_id = save_post(user_id, channel_id, post_content)
        data = request.json
        content = data.get('content')
        
        if not channel_id or not content:
            return jsonify({"error": "Channel ID and content are required"}), 400

        create_post(channel_id, user_id, content)
        
        # Example success response (replace with actual logic)
        return jsonify({'message': 'Post created successfully'}), 201

    except Exception as e:
        traceback.print_exc()
        return jsonify({'error': 'An error occurred while processing the request'}), 500

def like_postController(post_id):
    try:
        user_id = verify_token()
        if not user_id:
            return jsonify({"error": "Invalid or expired token"}), 401
        
        if not post_id:
            return jsonify({"error": "Post ID is required"}), 400

        like_post(post_id, user_id)
        
        return jsonify({"message": "Post liked successfully"}), 201
    
    except Exception as e:
        traceback.print_exc()
        return jsonify({"error": "An error occurred while liking the post"}), 500
    

def add_commentController(post_id):
    try:
        user_id = verify_token()
        if not user_id:
            return jsonify({"error": "Invalid or expired token"}), 401
        
        data = request.json
        comment = data.get('comment')

        if not post_id or not comment:
            return jsonify({"error": "Post ID and comment are required"}), 400
        
        result = add_comment(post_id, user_id, comment)
        return jsonify({"message": "Comment added successfully"}), 201
    
    except Exception as e:
        traceback.print_exc()
        return jsonify({"error": "An error occurred while adding the comment"}), 500



def get_post_detailsController(post_id):
    try:
        post, comments = get_post_details(post_id)

        if not post:
            return jsonify({"error": "Post not found"}), 404

        
        # Structure the response
        post_details = {
            "post": {
                "post_id": post[0],
                "channel_id": post[1],
                "user_id": post[2],
                "content": post[3],
                "created_at": post[4],
                "likes_count": post[5]
            },
            "comments": [
                {
                    "comment_id": comment[0],
                    "user_id": comment[1],
                    "comment": comment[2],
                    "created_at": comment[3]
                } for comment in comments
            ]
        }

        return jsonify(post_details), 200

    except Exception as e:
        traceback.print_exc()
        return jsonify({"error": "An error occurred while fetching the post"}), 500

def fetch_post_details_by_channel(channel_id):
    """
    Endpoint to fetch post details with comments using channel_id.

    Query Params:
        - channel_id: ID of the channel to fetch post details for.

    Returns:
        JSON response containing post details and comments.
    """
    try:
        # channel_id = request.args.get('channel_id', type=int)
        if not channel_id:
            return jsonify({"error": "channel_id is required"}), 400

        post, comments = get_post_details_by_channel(channel_id)

        if not post:
            return jsonify({"error": "No post found for the given channel_id"}), 404

        response = {
            "post": {
                "post_id": post[0],
                "channel_id": post[1],
                "user_id": post[2],
                "content": post[3],
                "created_at": post[4],
                "total_comments": post[5],
            },
            "comments": [
                {
                    "comment_id": comment[0],
                    "user_id": comment[1],
                    "comment": comment[2],
                    "created_at": comment[3],
                }
                for comment in comments
            ],
        }
        return jsonify(response), 200
    except Exception as e:
        traceback.print_exc()
        return jsonify({"error": "Internal server error"}), 500
    
def get_post_like_comment_detailsController(post_id):
    try:
        # Fetch total likes and comments using the helper functions
        total_likes = get_total_likes(post_id)
        total_comments = get_total_comments(post_id)

        # Check if both functions succeeded
        if total_likes is None or total_comments is None:
            return jsonify({
                "error": "Failed to fetch post details. Please try again later."
            }), 500

        # Return the details in JSON format
        return jsonify({
            "post_id": post_id,
            "total_likes": total_likes,
            "total_comments": total_comments
        })
    except Exception as e:
        # Print the traceback for debugging
        traceback.print_exc()
        return jsonify({
            "error": "An unexpected error occurred. Please try again later."
        }), 500