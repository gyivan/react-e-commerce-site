from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
from flask_httpauth import HTTPBasicAuth

auth = HTTPBasicAuth()

#Create a new Flask application
app = Flask(__name__)
cors = CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'


storeData = [
        {
        "id" : 1,
        "name": "Hamburger",
        "price": 5.00,
        "inCart": False
        },
        {
        "id" : 2,
        "name": "French Fries",
        "price": 6.00,
        "inCart": False
        }
    ]


if __name__ == "__main__":
    app.run(debug=True)