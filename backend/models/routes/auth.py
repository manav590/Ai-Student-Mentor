from flask import Blueprint, request
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from models.user import User
from utils.response import success, error

auth_bp = Blueprint('auth', __name__)
user_model = User()

@auth_bp.route('/register', methods=['POST'])
def register():
    try:
        data = request.json
        if user_model.exists(data["email"]):
            return error("User exists", status=409)
        user_data = {"email": data["email"], "password": data["password"]}
        user_model.create(data["email"], user_data)
        return success(msg="registered")
    except Exception as ex:
        return error("Registration error", details=str(ex), status=500)

@auth_bp.route('/login', methods=['POST'])
def login():
    try:
        data = request.json
        user = user_model.get(data["email"])
        if not user or user["password"] != data["password"]:
            return error("Invalid credentials", status=401)
        token = create_access_token(identity=data['email'])
        return success(data={"token": token})
    except Exception as ex:
        return error("Login error", details=str(ex), status=500)
    
@auth_bp.route('/update', methods=['POST'])
@jwt_required()
def update_profile():
    try:
        user = get_jwt_identity()
        data = request.json
        user_model.update(user, data)
        return success(msg="profile updated")
    except Exception as ex:
        return error("Profile update error", details=str(ex), status=500)

