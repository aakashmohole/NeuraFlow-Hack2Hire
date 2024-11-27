from utils.connection import get_db_connection

# Database connection setup
def check_membership(user_id, community_id):
    try:
        conn = get_db_connection()
        if not conn:
            return False, "Failed to connect to the database"

        cursor = conn.cursor()
        cursor.execute("""
            SELECT * 
            FROM community_memberships
            WHERE user_id = %s AND community_id = %s
        """, (user_id, community_id))
        
        existing_member = cursor.fetchone()
        return existing_member

    except Exception as e:
        conn.rollback()
        return False, str(e)

    finally:
        cursor.close()
        conn.close()

# Model for adding a user to the community
def add_user_to_community(user_id, community_id):
    try:
        conn = get_db_connection()
        if not conn:
            return False, "Failed to connect to the database"

        cursor = conn.cursor()

        cursor.execute("""
            INSERT INTO community_memberships (user_id, community_id)
            VALUES (%s, %s) RETURNING id
        """, (user_id, community_id))
        return_id =  cursor.fetchone()[0]
        
        conn.commit()
        conn.close()
        cursor.close()
        return return_id
    
    except Exception as e:
        conn.rollback()
        return False, str(e)


# Model for updating the members count in the community
def update_members_count(channel_id):
    try:
        conn = get_db_connection()
        if not conn:
            return False, "Failed to connect to the database"

        cursor = conn.cursor()

        cursor.execute("""
            UPDATE channels 
            SET member_count = member_count + 1 
            WHERE channel_id = %s
        """, (channel_id,))
        
        conn.commit()
        conn.close()
        cursor.close()
        
    except Exception as e:
        conn.rollback()
        return False, str(e)

def check_community_owner(channel_id):
    try:
        conn = get_db_connection()
        if not conn:
            return False, "Failed to connect to the database"

        cursor = conn.cursor()
        cursor.execute("""
                       SELECT created_by
                       FROM channels
                       WHERE channel_id = %s
        """,(channel_id))
        user = cursor.fetchone()

        conn.commit()
        conn.close()
        cursor.close()
        
        if user:
            return user  # Extract the channel_id from the tuple
        return None  # Return None if no record is found
    
    except Exception as e:
        conn.rollback()
        return False, str(e)
