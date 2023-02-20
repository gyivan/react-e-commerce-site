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

#Login page
@app.route("/login", methods = ['GET', 'POST'])
def login():
    response = make_response('')

    if request.method == 'POST':
        username = request.json['username']
        password = request.json['password']

        #Check if username and password are correct
        if username == 'admin' and password == 'secret':
            print('CORRECT PASSWORD', username, password)
            response = make_response("", 200)
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response
        else:
            print('WRONG PASSWORD', username, password)
            response = make_response("", 500)
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response
    
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


#App page
@app.route("/api/store-data", methods=['GET']) #handle GET and POST requests
# @auth.login_required
def get_post_data():
    response = make_response
    response = jsonify(storeData)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


if __name__ == "__main__":
    app.run(debug=True)