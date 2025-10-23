from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017')
db = client['studentmentor']
users = db['users']
notes = db['notes']
attendance = db['attendance']
emails = db['emails']
career = db['career']
