from utils.db_connection import firebase

class User:
    def __init__(self):
        self.table = firebase.db.collection('users')
    
    def get(self, email):
        doc = self.table.document(email).get()
        return doc.to_dict() if doc.exists else None

    def create(self, email, data):
        self.table.document(email).set(data)

    def update(self, email, data):
        self.table.document(email).update(data)

    def exists(self, email):
        return self.get(email) is not None
