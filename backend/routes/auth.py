from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from models.user_model import users

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.json
    if users.find_one({"email": data["email"]}):
        return jsonify({"msg": "User exists"}), 409
    users.insert_one({"email": data["email"], "password": data["password"], "profile_completed": False})
    return jsonify({"msg": "registered"})

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    user = users.find_one({"email": data["email"], "password": data["password"]})
    if user:
        token = create_access_token(identity=data['email'])
        return jsonify({"token": token, "profile_completed": user.get("profile_completed", False)})
    else:
        return jsonify({"msg": "invalid"}), 401

@auth_bp.route('/complete-profile', methods=['POST'])
@jwt_required()
def complete_profile():
    data = request.json
    email = get_jwt_identity()
    users.update_one({"email": email}, {"$set": {
        "name": data.get("name"),
        "age": data.get("age"),
        "gender": data.get("gender"),
        "course": data.get("course"),
        "semester": data.get("semester"),
        "college": data.get("college"),
        "phone": data.get("phone"),
        "profile_completed": True
    }})
    return jsonify({"msg": "profile updated"})
