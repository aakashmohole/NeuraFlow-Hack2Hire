# src/models/service.py
from utils.connection import get_db_connection  # Adjust this based on your project structure
import cloudinary
import cloudinary.uploader

# Cloudinary configuration
cloudinary.config(
    cloud_name="dfggcfeqh",  
    api_key="883182657555187",
    api_secret="3QUAHA2IElK4xsthJhWz-W9_jaY",
    secure=True
)

def create_service(user_id, title, category, sub_category, skills, pricing, description, faq, photo):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("""
        INSERT INTO userservices (user_id, title, category, sub_category, skills, pricing, description, faq, photo)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
        RETURNING service_id
    """, (user_id, title, category, sub_category, skills, pricing, description, faq, photo))
    service_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()
    return service_id

def service_images(file_data):
    try:
        upload_result = cloudinary.uploader.upload(file_data, folder="services")
        return upload_result.get('secure_url')
    except cloudinary.exceptions.Error as cloud_error:
        return f"Cloudinary upload failed: {str(cloud_error)}"
    except Exception as e:
        return f"Unexpected error occurred during upload: {str(e)}"
    
    
def get_all_services():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM userservices")
    services = cur.fetchall()

    if not services:
        return None

    results = []

    for row in services:
        results.append({
            "service_id":row[0],
            "title" : row[2],
            "category" : row[3],
            "skills" : row[5],
            "description" : row[7],
            "photo": row[9],
        })

    return results

    cur.close()
    conn.close()
    return services


def get_service_id(service_id):
    conn = get_db_connection()
    cur = conn.cursor()

    if not service_id:
        return None

    cur.execute("SELECT * FROM userservices WHERE service_id=%s",(service_id,))
    service = cur.fetchone()

    result = ({
        "service_id" : service[0],
        "title" : service[2],
        "category" : service[3],
        "sub_category" : service[4],
        "skills" : service[5],
        "pricing" : service[6],
        "description": service[7],
        "faq" : service[8],
        "photo" : service[9]
    })

    return result


