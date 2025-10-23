from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager

from routes.auth import auth_bp
from routes.rag_api import rag_bp
from routes.notes_manager import notes_bp
from routes.attendance import attendance_bp
from routes.email_tools import email_bp
from routes.career_api import career_bp
from routes.learning_resources import learning_bp

app = Flask(__name__)
CORS(app)
app.config["JWT_SECRET_KEY"] = "supersecretkey"
JWTManager(app)

app.register_blueprint(auth_bp, url_prefix="/api/auth")
app.register_blueprint(rag_bp, url_prefix="/api/rag")
app.register_blueprint(notes_bp, url_prefix="/api/notes")
app.register_blueprint(attendance_bp, url_prefix="/api/attendance")
app.register_blueprint(email_bp, url_prefix="/api/email")
app.register_blueprint(career_bp, url_prefix="/api/career")
app.register_blueprint(learning_bp, url_prefix="/api/learning")

@app.route("/")
def home():
    return "AI Student Mentor Backend Running!"

if __name__ == "__main__":
    app.run(debug=True)
