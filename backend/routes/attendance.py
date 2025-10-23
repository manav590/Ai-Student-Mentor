from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models.user_model import attendance

attendance_bp = Blueprint('attendance', __name__)

@attendance_bp.route('/record', methods=['POST'])
@jwt_required()
def record_attendance():
    user = get_jwt_identity()
    data = request.json
    attendance.insert_one({
        "user": user,
        "subject": data["subject"],
        "date": data["date"],
        "status": data["status"]  # "present"/"absent"
    })
    return {"msg": "attendance recorded"}

@attendance_bp.route('/get', methods=['GET'])
@jwt_required()
def get_attendance():
    user = get_jwt_identity()
    records = list(attendance.find({"user": user}))
    return jsonify(records)
