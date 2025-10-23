from flask import Blueprint, request
from flask_jwt_extended import jwt_required, get_jwt_identity
from models.notes import Notes
from utils.ocr_handler import extract_text_from_image, extract_text_from_pdf
from utils.response import success, error
import os

notes_bp = Blueprint('notes', __name__)
notes_model = Notes()

ALLOWED_EXTENSIONS = {'.pdf', '.png', '.jpg', '.jpeg'}
def allowed_file(filename):
    return os.path.splitext(filename)[1].lower() in ALLOWED_EXTENSIONS

@notes_bp.route('/upload', methods=['POST'])
@jwt_required()
def upload_note():
    try:
        user = get_jwt_identity()
        file = request.files['file']
        filename = file.filename
        if not allowed_file(filename):
            return error("Invalid file type", status=400)
        filepath = f"data/notes/{user}_{filename}"
        file.save(filepath)

        if filename.lower().endswith('.pdf'):
            text = extract_text_from_pdf(filepath)
        else:
            text = extract_text_from_image(filepath)

        note_data = {"user": user, "filename": filename, "content": text}
        notes_model.create(user, note_data)
        return success({"extracted_text": text[:500]}, msg="note uploaded")
    except Exception as ex:
        return error("Upload error", details=str(ex), status=500)
    
@notes_bp.route('/delete', methods=['DELETE'])
@jwt_required()
def delete_note():
    try:
        user = get_jwt_identity()
        filename = request.json.get("filename")
        key = f"{user}_{filename}"
        notes_model.table.document(key).delete()
        return success(msg="note deleted")
    except Exception as ex:
        return error("Note delete error", details=str(ex), status=500)

