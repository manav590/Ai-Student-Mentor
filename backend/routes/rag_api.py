from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models.user_model import notes
from models.embeddings import embed_text, search_similar
from models.llm_agent import generate_answer

rag_bp = Blueprint('rag', __name__)

@rag_bp.route('/question', methods=['POST'])
@jwt_required()
def answer_question():
    user = get_jwt_identity()
    data = request.json
    question = data.get("question")

    # Get user's notes
    user_notes = list(notes.find({"user": user}))
    passages = [n['content'] for n in user_notes]

    # Embed notes and query (use external model, e.g. SentenceTransformers)
    query_embedding = embed_text(question)
    best_passages = search_similar(query_embedding, passages)

    # Generate answer from best passages
    answer = generate_answer(question, best_passages)
    return jsonify({"answer": answer})
