from utils.db_connection import firebase

class Attendance:
    def __init__(self):
        self.table = firebase.db.collection('attendance')

    def create(self, user, data):
        doc_key = f"{user}_{data['subject']}_{data['date']}"
        self.table.document(doc_key).set(data)

    def get_user_attendance(self, user):
        return [doc.to_dict() for doc in self.table.where("user", "==", user).stream()]
