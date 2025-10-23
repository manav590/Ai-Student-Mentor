from flask import Blueprint, request
from flask_jwt_extended import jwt_required, get_jwt_identity
from models.email import Email
from utils.response import success, error

email_bp = Blueprint('email', __name__)
email_model = Email()

@email_bp.route('/inbox', methods=['GET'])
@jwt_required()
def get_emails():
    try:
        user = get_jwt_identity()
        inbox = email_model.get_user_emails(user)
        return success(data=inbox)
    except Exception as ex:
        return error("Email error", details=str(ex), status=500)

@email_bp.route('/add', methods=['POST'])
@jwt_required()
def add_email():
    try:
        user = get_jwt_identity()
        data = {**request.json, "user": user}
        email_model.add_email(user, data)
        return success(msg="email added")
    except Exception as ex:
        return error("Email add error", details=str(ex), status=500)

