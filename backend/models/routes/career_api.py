from flask import Blueprint, request
from flask_jwt_extended import jwt_required, get_jwt_identity
from models.carrer import Career
from utils.response import success, error

career_bp = Blueprint('career', __name__)
career_model = Career()

@career_bp.route('/insights', methods=['GET'])
@jwt_required()
def get_insights():
    try:
        user = get_jwt_identity()
        career_data = career_model.get_career(user) or [
            {"path": "AI/ML Engineer", "trend": "high"},
            {"path": "Data Analyst", "trend": "rising"}
        ]
        return success(data=career_data)
    except Exception as ex:
        return error("Career error", details=str(ex), status=500)
    
@career_bp.route('/update', methods=['POST'])
@jwt_required()
def update_career():
    try:
        user = get_jwt_identity()
        data = request.json
        career_model.set_career(user, data)
        return success(msg="career updated")
    except Exception as ex:
        return error("Career update error", details=str(ex), status=500)

