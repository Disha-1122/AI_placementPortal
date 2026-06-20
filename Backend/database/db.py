from pymongo import MongoClient

MONGO_URL = "mongodb+srv://d61668794_db_user:FDFUrgbkvOkfJQ18@cluster0.rh27lyw.mongodb.net/?appName=Cluster0"

client = MongoClient(MONGO_URL)

db = client["placement_platform"]

users_collection = db["users"]