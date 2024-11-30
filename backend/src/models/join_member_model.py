from utils.connection import get_db_connection
import traceback

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

def check_channel_available(channel_id):
     try:
        conn = get_db_connection()
        if not conn:
            return None  # Return None when there's no connection

        cursor = conn.cursor()
        cursor.execute("""
                       SELECT channel_id
                       FROM channels
                       WHERE channel_id = %s
        """, (channel_id,)) 
        result = cursor.fetchone()

        conn.commit()
        cursor.close()
        conn.close()

        if result:
            return result[0]  # Assuming `created_by` is the first column in the SELECT
        return None  # Return None if no record is found

     except Exception as e:
        traceback.print_exc()  # Debugging
        return None  # Return None in case of an error

def check_community_owner(channel_id):
    try:
        conn = get_db_connection()
        if not conn:
            return None  # Return None when there's no connection

        cursor = conn.cursor()
        cursor.execute("""
                       SELECT created_by
                       FROM channels
                       WHERE channel_id = %s
        """, (channel_id,)) 
        result = cursor.fetchone()

        conn.commit()
        cursor.close()
        conn.close()

        if result:
            return result  # Assuming `created_by` is the first column in the SELECT
        return None  # Return None if no record is found

    except Exception as e:
        traceback.print_exc()  # Debugging
        return None  # Return None in case of an error


def get_all_users(channel_id):
    try:

        print(channel_id)
        conn = get_db_connection()
        if not conn:
            return None  # Return None when there's no connection

        if not channel_id:
            return None

        cursor = conn.cursor()
        cursor.execute("""
        SELECT 
            u.firstname, 
            u.lastname
        FROM 
            users u
        JOIN 
            community_memberships cm ON u.id = cm.user_id
        JOIN 
            channels c ON cm.community_id = c.channel_id
        WHERE 
            c.channel_id = %s
        """, (channel_id,)) 

        
        result = cursor.fetchall()
        members = []

        for row in result:
            members.append({
                "firstname" : row[0],
                "lastname" : row[1]
            })

        if not members:
            return None
        
        return members
    except Exception as e:
        traceback.print_exc()  # Debugging
        return None  # Return None in case of an error
