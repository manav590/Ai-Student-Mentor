import os
from dotenv import load_dotenv

load_dotenv()
JWT_SECRET_KEY = os.environ['JWT_SECRET_KEY']
FIREBASE_CERT_PATH = os.environ.get('FIREBASE_CERT_PATH')
