from utils.db_connection import firebase

class Learning:
    def __init__(self):
        self.table = firebase.db.collection('learning')

    def recommend(self, user, query):
        return [
            {"title": "Deep Learning with PyTorch", "url": "https://youtube.com/..."},
            {"title": "Python Essentials PDF", "url": "https://..."},
            {"title": "Best AI Blogs", "url": "https://..."}
        ]
