from flask import Blueprint, request
from flask_jwt_extended import jwt_required, get_jwt_identity
from models.attendence import Attendance
from utils.response import success, error  

attendance_bp = Blueprint('attendance', __name__)
attendance_model = Attendance()

@attendance_bp.route('/record', methods=['POST'])
@jwt_required()
def record_attendance():
    try:
        user = get_jwt_identity()
        data = {**request.json, "user": user}
        attendance_model.create(user, data)
        return success(msg="attendance recorded")
    except Exception as ex:
        return error("Attendance error", details=str(ex), status=500)

@attendance_bp.route('/get', methods=['GET'])
@jwt_required()
def get_attendance():
    try:
        user = get_jwt_identity()
        records = attendance_model.get_user_attendance(user)
        return success(data=records, msg="attendance records")
    except Exception as ex:
        return error("Error fetching attendance", details=str(ex), status=500)

@attendance_bp.route('/edit', methods=['PUT'])
@jwt_required()
def edit_attendance():
    try:
        user = get_jwt_identity()
        subject = request.json.get("subject")
        date = request.json.get("date")
        status = request.json.get("status")
        key = f"{user}_{subject}_{date}"
        attendance_model.table.document(key).update({"status": status})
        return success(msg="attendance updated")
    except Exception as ex:
        return error("Attendance edit error", details=str(ex), status=500)

@attendance_bp.route('/delete', methods=['DELETE'])
@jwt_required()
def delete_attendance():
    try:
        user = get_jwt_identity()
        subject = request.json.get("subject")
        date = request.json.get("date")
        key = f"{user}_{subject}_{date}"
        attendance_model.table.document(key).delete()
        return success(msg="attendance deleted")
    except Exception as ex:
        return error("Attendance delete error", details=str(ex), status=500)
