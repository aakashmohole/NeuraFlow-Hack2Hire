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
    
# Function to fetch user details from the database
def get_channel_details():
    conn = get_db_connection()
    if not conn:
        return None

    try:
        cursor = conn.cursor()
        cursor.execute("""
            SELECT created_by, channel_name, description, channel_category, channel_photo
            FROM channels

        """)
        result = cursor.fetchone()

        # if result:
        #     return {
        #         "created_by": result[1],
        #         "channel_name": result[2],
        #         "channel_category": result[3],
        #         "description": result[4]
        #     }
        return result

    except Exception:
        return None

    finally:
        cursor.close()
        conn.close()