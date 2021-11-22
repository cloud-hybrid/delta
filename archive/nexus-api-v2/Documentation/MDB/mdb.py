import os
import pymongo
import json

# Simple localhost connection
#Connection = pymongo.MongoClient("mongodb://localhost:27017/")

# Initialize database connection
#mydb = Connection["mydb"]

# Create a collection if it does not exist already
#Configuration = mydb["Configuration"]

# directory of JSON configurations
#dir = "../Game"

#for file in os.listdir(dir):
#    path = os.path.join(dir, file)
#    json_content = open(path, "r")
#    data = json.load(json_content)
#    doc_insert = Configuration.insert_one(data)
