from utils.connection import get_db_connection

# Function to insert event registration details
def event_registration(user_id, firstname, lastname, email, mobile_no, event_id):
    conn = get_db_connection()
    if not conn:
        return False, "Failed to connect to the database"

    try:
        cursor = conn.cursor()
        
        # Insert the registration details into eventRegistration table
        cursor.execute("""
            INSERT INTO eventRegistration (user_id, firstname, lastname, email, mobile_no,event_id)
            VALUES (%s, %s, %s, %s, %s)
        """, (user_id, firstname, lastname, email, mobile_no, event_id))
        
        conn.commit()
        return True, "Success"

    except Exception as e:
        conn.rollback()
        return False, str(e)

    finally:
        cursor.close()
        conn.close()

# Function to fetch user details from the database
def get_user_registration_details(user_id):
    conn = get_db_connection()
    if not conn:
        return None

    try:
        cursor = conn.cursor()
        cursor.execute("""
            SELECT firstname, lastname, email, mobile_no, event_id
            FROM users
            WHERE id = %s
        """, (user_id,))
        result = cursor.fetchone()

        if result:
            return {
                "firstname": result[0],
                "lastname": result[1],
                "email": result[2],
                "mobile_no": result[3],
                "event_id": result[4]
            }
        return None

    except Exception:
        return None

    finally:
        cursor.close()
        conn.close()
        
# Function to fetch user details from the database
def get_all_registration_details():
    conn = get_db_connection()
    if not conn:
        return None

    try:
        cursor = conn.cursor()
        cursor.execute("""
            SELECT event_id,event_name,description,event_created_date,photo,event_join_link
            FROM events
        """)
        result = cursor.fetchall()

        events = []

        for row in result:
            events.append({
                "event_id" : row[0],
                "event_name" : row[1],
                "description": row[2],
                "event_created_date" :row[3],
                "photo" :row[4],
                "event_join_link" :row[5]
            })

        return events if events else None

    except Exception:
        return None

    finally:
        cursor.close()
        conn.close()