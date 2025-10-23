import firebase_admin
from firebase_admin import credentials, firestore
import config

class FirebaseDB:
    def __init__(self):
        cred = credentials.Certificate(config.FIREBASE_CERT_PATH)
        firebase_admin.initialize_app(cred)
        self.db = firestore.client()

firebase = FirebaseDB()

