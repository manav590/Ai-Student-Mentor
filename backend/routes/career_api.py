from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models.user_model import career

career_bp = Blueprint('career', __name__)

@career_bp.route('/insights', methods=['GET'])
@jwt_required()
def get_insights():
    user = get_jwt_identity()
    insights = list(career.find({"user": user}))
    # Dummy: return placeholder insights
    return jsonify(insights or [
        {"path": "AI/ML Engineer", "trend": "high"},
        {"path": "Data Analyst", "trend": "rising"}
    ])
