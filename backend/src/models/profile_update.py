from utils.connection import get_db_connection
import json
import jwt
import json
from flask import Flask, request, jsonify

class UserModel:
    @staticmethod
    def get_user_by_id(user_id):
        conn = get_db_connection()
        if not conn:
            return None, "Database connection failed"
        try:
            cur = conn.cursor()
            cur.execute("SELECT * FROM users WHERE id = %s", (user_id,))
            user = cur.fetchone()
            return user, None if user else (None, "User not found")
        except Exception as e:
            return None, f"Database query failed: {e}"
        finally:
            cur.close()
            conn.close()

    @staticmethod
    def update_user(user_id, updates):
        if not updates:
            return "No updates provided"
        conn = get_db_connection()
        if not conn:
            return "Database connection failed"
        try:
            cur = conn.cursor()
            update_query = f"UPDATE users SET {', '.join(f'{key} = %s' for key in updates.keys())} WHERE id = %s"
            cur.execute(update_query, (*updates.values(), user_id))
            conn.commit()
            return None
        except Exception as e:
            return f"Database query failed: {e}"
        finally:
            cur.close()
            conn.close()

    @staticmethod
    def save_profile_photo(user_id, photo_url):
        conn = get_db_connection()
        if not conn:
            return "Database connection failed"
        try:
            cur = conn.cursor()
            cur.execute("UPDATE users SET profile_photo = %s WHERE id = %s", (photo_url, user_id))
            conn.commit()
            return None
        except Exception as e:
            return f"Database query failed: {e}"
        finally:
            cur.close()
            conn.close()

    @staticmethod
    def format_user(user_row):
        if not user_row:
            return None
        return {
            "id": user_row[0],
            "firstname": user_row[1],
            "lastname": user_row[2],
            "account_type": user_row[3],
            "email": user_row[4],
            "mobile_no": user_row[5],
            "profile_photo": user_row[7] or "",
            "country": user_row[8] or "",
            "working_domain": user_row[9] or "",
            "technical_skills": user_row[10] or "",
            "work_experience": user_row[11] or "",
            "educational_details": user_row[12] or "",
            "hourly_rate": user_row[13] or 0.0,
            "social_media_links": user_row[14] or "",
            "connects": user_row[15] or 0,
        }
