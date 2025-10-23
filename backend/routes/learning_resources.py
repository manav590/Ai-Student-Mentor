from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity

learning_bp = Blueprint('learning', __name__)

@learning_bp.route('/recommend', methods=['POST'])
@jwt_required()
def recommend_resources():
    data = request.json
    # Dummy: always recommend some resources
    recommendations = [
        {"title": "Deep Learning with PyTorch", "url": "https://youtube.com/..."},
        {"title": "Python Essentials PDF", "url": "https://..."},
        {"title": "Best AI Blogs", "url": "https://..."}
    ]
    return jsonify(recommendations)
