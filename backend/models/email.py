from utils.db_connection import firebase

class Email:
    def __init__(self):
        self.table = firebase.db.collection('emails')

    def add_email(self, user, data):
        key = f"{user}_{data['subject']}_{data.get('date','')}"
        self.table.document(key).set(data)

    def get_user_emails(self, user):
        return [doc.to_dict() for doc in self.table.where("user", "==", user).stream()]
