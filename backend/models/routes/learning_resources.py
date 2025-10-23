from flask import Blueprint, request
from flask_jwt_extended import jwt_required, get_jwt_identity
from models.learning import Learning
from utils.response import success, error

learning_bp = Blueprint('learning', __name__)
learning_model = Learning()

@learning_bp.route('/recommend', methods=['POST'])
@jwt_required()
def recommend_resources():
    try:
        user = get_jwt_identity()
        query = request.json.get("query", "")
        recommendations = learning_model.recommend(user, query)
        return success(data=recommendations)
    except Exception as ex:
        return error("Learning error", details=str(ex), status=500)
