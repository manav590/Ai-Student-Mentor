from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models.user_model import emails

email_bp = Blueprint('email', __name__)

@email_bp.route('/inbox', methods=['GET'])
@jwt_required()
def get_emails():
    user = get_jwt_identity()
    inbox = list(emails.find({"user": user}))
    return jsonify(inbox)

@email_bp.route('/categorize', methods=['POST'])
@jwt_required()
def categorize_emails():
    # Dummy endpoint to simulate categorization
    return {"msg": "Emails categorized"}
