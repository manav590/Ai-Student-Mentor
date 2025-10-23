from utils.db_connection import firebase

class Notes:
    def __init__(self):
        self.table = firebase.db.collection('notes')

    def create(self, user, data):
        self.table.document(f"{user}_{data['filename']}").set(data)

    def get_user_notes(self, user):
        return [
            doc.to_dict() for doc in self.table.where("user", "==", user).stream()
        ]
