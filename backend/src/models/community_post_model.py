from utils.connection import get_db_connection
import traceback

# Check if a user is the creator of the channel
def is_channel_admin(user_id, channel_id):
    try:
        conn = get_db_connection()
        if not conn:
            return False, "Failed to connect to the database"

        cursor = conn.cursor()
        cursor.execute("""
            SELECT created_by
            FROM channels
            WHERE channel_id = %s
        """, (channel_id,))
        
        result = cursor.fetchone()
        return result[0] == user_id if result else False

    except Exception as e:
        traceback.print_exc()
        return False

    finally:
        cursor.close()
        conn.close()

def create_post(channel_id, user_id, content):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO posts (channel_id, user_id, content, created_at)
            VALUES (%s, %s, %s, NOW())
        """, (channel_id, user_id, content))
        
        
        conn.commit()
        cursor.close()
        conn.close()

        return "Done"
    
    except Exception as e:
        traceback.print_exc()
        return "Error"
    
def like_post(post_id, user_id):
    try:
        # Check if the user already liked the post
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("""
            SELECT * FROM likes WHERE post_id = %s AND user_id = %s
        """, (post_id, user_id))
        like = cursor.fetchone()

        if like:
            return  "User already liked this post"

        # Add the like
        cursor.execute("""
            INSERT INTO likes (post_id, user_id)
            VALUES (%s, %s)
        """, (post_id, user_id))
        conn.commit()
        cursor.close()
        conn.close()

        return "Post liked successfully"
    
    except Exception as e:
        traceback.print_exc()
        return "An error occurred while liking the post"
    

def add_comment(post_id, user_id, comment):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO comments (post_id, user_id, comment, created_at)
            VALUES (%s, %s, %s, NOW())
        """, (post_id, user_id, comment))
        conn.commit()
        cursor.close()
        conn.close()

        return "Comment added successfully"
    
    except Exception as e:
        traceback.print_exc()
        return "An error occurred while adding the comment"

def get_post_details(post_id):
    """
    Fetch post details with total comments and list of comments.

    :param post_id: The ID of the post.
    :return: Tuple containing post details and comments.
    """
    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        # Fetch post details and total number of comments
        cursor.execute("""
            SELECT p.post_id, p.channel_id, p.user_id, p.content, p.created_at, 
                   COUNT(c.comment_id) AS total_comments
            FROM posts p
            LEFT JOIN comments c ON c.post_id = p.post_id
            WHERE p.post_id = %s
            GROUP BY p.post_id, p.channel_id, p.user_id, p.content, p.created_at;
        """, (post_id,))
        post = cursor.fetchone()

        if not post:
            return None, []

        # Fetch comments
        cursor.execute("""
            SELECT c.comment_id, c.user_id, c.comment, c.created_at
            FROM comments c
            WHERE c.post_id = %s
            ORDER BY c.created_at ASC;
        """, (post_id,))
        comments = cursor.fetchall()

        cursor.close()
        conn.close()

        return post, comments
    except Exception as e:
        traceback.print_exc()
        return None, []

def get_post_details_by_channel(channel_id):
    """
    Fetch post details by channel_id with total comments and list of comments.

    :param channel_id: The ID of the channel.
    :return: Tuple containing post details and comments.
    """
    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        # Fetch post details and total number of comments using channel_id
        cursor.execute("""
            SELECT p.post_id, p.channel_id, p.user_id, p.content, p.created_at, 
                   COUNT(c.comment_id) AS total_comments
            FROM posts p
            LEFT JOIN comments c ON c.post_id = p.post_id
            WHERE p.channel_id = %s
            GROUP BY p.post_id, p.channel_id, p.user_id, p.content, p.created_at;
        """, (channel_id,))
        post = cursor.fetchone()

        if not post:
            return None, []

        post_id = post[0]  # Extract post_id from the fetched post details

        # Fetch comments using the post_id
        cursor.execute("""
            SELECT c.comment_id, c.user_id, c.comment, c.created_at
            FROM comments c
            WHERE c.post_id = %s
            ORDER BY c.created_at ASC;
        """, (post_id,))
        comments = cursor.fetchall()

        cursor.close()
        conn.close()

        return post, comments
    except Exception as e:
        traceback.print_exc()
        return None, []

def get_total_likes(post_id):
    try:
        # Get database connection
        conn = get_db_connection()
        cursor = conn.cursor()

        # SQL query to count likes for a specific post_id
        cursor.execute("""
            SELECT COUNT(like_id) AS likes_count
            FROM likes
            WHERE post_id = %s
        """, (post_id,))

        # Fetch the total likes count
        total_likes = cursor.fetchone()[0]

        # Close database connection
        cursor.close()
        conn.close()

        return total_likes
    except Exception as e:
        # Print the traceback for debugging
        traceback.print_exc()
        return None
    
def get_total_comments(post_id):
    try:
        # Get database connection
        conn = get_db_connection()
        cursor = conn.cursor()

        # SQL query to count comments for a specific post_id
        cursor.execute("""
            SELECT COUNT(comment_id) AS comments_count
            FROM comments
            WHERE post_id = %s
        """, (post_id,))

        # Fetch the total comments count
        total_comments = cursor.fetchone()[0]

        # Close database connection
        cursor.close()
        conn.close()

        return total_comments
    except Exception as e:
        # Print the traceback for debugging
        traceback.print_exc()
        return None