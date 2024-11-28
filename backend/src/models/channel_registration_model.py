from utils.connection import get_db_connection
import cloudinary
import cloudinary.uploader

# Cloudinary configuration
cloudinary.config(
    cloud_name="dfggcfeqh",  
    api_key="883182657555187",
    api_secret="3QUAHA2IElK4xsthJhWz-W9_jaY",
    secure=True
)

# Function to insert event registration details
def channel_registration(created_by, channel_name, description, channel_category, channel_photo):
    conn = get_db_connection()
    if not conn:
        return False, "Failed to connect to the database"

    try:
        cursor = conn.cursor()
        
        # Insert the registration details into eventRegistration table
        cursor.execute("""
            INSERT INTO channels (created_by, channel_name, description, channel_category, channel_photo)
            VALUES (%s, %s, %s, %s, %s)
        """, (created_by, channel_name, description, channel_category, channel_photo))
        
        conn.commit()
        return "Channel created"

    except Exception as e:
        conn.rollback()
        return False, str(e)

    finally:
        cursor.close()
        conn.close()

def channel_images(file_data):
    try:
        upload_result = cloudinary.uploader.upload(file_data, folder="channels")
        return upload_result.get('secure_url')
    except cloudinary.exceptions.Error as cloud_error:
        return f"Cloudinary upload failed: {str(cloud_error)}"
    except Exception as e:
        return f"Unexpected error occurred during upload: {str(e)}"
    
def get_channel_details():
    conn = get_db_connection()
    if not conn:
        return []

    try:
        cursor = conn.cursor()
        cursor.execute("""
            SELECT created_by, channel_name, description, channel_category, channel_photo, created_at, member_count
            FROM channels
        """)
        results = cursor.fetchall()

        return [
            {
                "created_by": row[0],
                "channel_name": row[1],
                "description": row[2],
                "channel_category": row[3],
                "channel_photo": row[4],
                "created_at": row[5],
                "member_count": row[6],
            }
            for row in results
        ]
    except Exception as e:
        return None
    finally:
        cursor.close()
        conn.close()

        
def get_channel_details_by_id(channel_id):
    conn = get_db_connection()
    if not conn:
        return None

    try:
        cursor = conn.cursor()
        cursor.execute("""
            SELECT created_by, channel_name, description, channel_category, channel_photo, created_at, member_count
            FROM channels
            WHERE channel_id = %s
        """, (channel_id,))
        
        result = cursor.fetchone()
        if result:
            return {
                "created_by": result[0],
                "channel_name": result[1],
                "description": result[2],
                "channel_category": result[3],
                "channel_photo": result[4],
                "created_at": result[5],
                "member_count": result[6],
            }
        return None
    except Exception as e:
        return None
    finally:
        cursor.close()
        conn.close()
