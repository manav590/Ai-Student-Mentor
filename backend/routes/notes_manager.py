from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models.user_model import notes
import os
from utils.ocr_handler import extract_text_from_image, extract_text_from_pdf

notes_bp = Blueprint('notes', __name__)
UPLOAD_FOLDER = "data/notes"

@notes_bp.route('/upload', methods=['POST'])
@jwt_required()
def upload_note():
    user = get_jwt_identity()
    file = request.files['file']
    filename = f"{user}_{file.filename}"
    filepath = os.path.join(UPLOAD_FOLDER, filename)
    file.save(filepath)

    # OCR logic
    text = ""
    if filename.lower().endswith('.pdf'):
        text = extract_text_from_pdf(filepath)
    else:
        text = extract_text_from_image(filepath)
    
    notes.insert_one({
        "user": user,
        "filename": filename,
        "content": text
        # You can add more metadata
    })
    return jsonify({"msg": "note uploaded", "extracted_text": text[:500]})
