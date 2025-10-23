from utils.db_connection import firebase

class Career:
    def __init__(self):
        self.table = firebase.db.collection('career')

    def set_career(self, user, data):
        self.table.document(user).set(data)

    def get_career(self, user):
        doc = self.table.document(user).get()
        return doc.to_dict() if doc.exists else None
