from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
import config

from routes.auth import auth_bp
from routes.notes_manager import notes_bp
from routes.attendance import attendance_bp
# (Other routes)

app = Flask(__name__)
CORS(app)
app.config["JWT_SECRET_KEY"] = config.JWT_SECRET_KEY
JWTManager(app)

app.register_blueprint(auth_bp, url_prefix="/api/auth")
app.register_blueprint(notes_bp, url_prefix="/api/notes")
app.register_blueprint(attendance_bp, url_prefix="/api/attendance")
# (Other blueprints)

@app.route("/")
def home():
    return "AI Student Mentor Backend Running!"

@app.route('/api/health')
def health():
    return {"status": "OK"}, 200


if __name__ == "__main__":
    app.run(debug=True)
