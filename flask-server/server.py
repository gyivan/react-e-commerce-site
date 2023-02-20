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
            "price": "$5.00",
            "isInCart": False,
            "qtyInCart": 1,
            "qtyToAdd": 0,
            "qtyToRemove": 0
            },
            {
            "id" : 2,
            "name": "French Fries",
            "price": "$6.00",
            "isInCart": False,
            "qtyInCart": 0,
            "qtyToAdd": 0,
            "qtyToRemove": 0
            },
            {
            "id" : 3,
            "name": "Ham Sandwich",
            "price": "$5.00",
            "isInCart": False,
            "qtyInCart": 0,
            "qtyToAdd": 0,
            "qtyToRemove": 0
            },
            {
            "id" : 4,
            "name": "Grilled Steak",
            "price": "$10.00",
            "isInCart": True,
            "qtyInCart": 1,
            "qtyToAdd": 0,
            "qtyToRemove": 0
            },
            {
            "id" : 5,
            "name": "Baked Potato",
            "price": "$3.00",
            "isInCart": True,
            "qtyInCart": 1,
            "qtyToAdd": 0,
            "qtyToRemove": 0
            }
  ]


cartData = [
            {
            "id" : 4,
            "name": "Grilled Steak",
            "price": "$10.00",
            "isInCart": True,
            "qtyInCart": 1,
            "qtyToAdd": 0,
            "qtyToRemove": 0
            },
            {
            "id" : 5,
            "name": "Baked Potato",
            "price": "$3.00",
            "isInCart": True,
            "qtyInCart": 1,
            "qtyToAdd": 0,
            "qtyToRemove": 0
            }
            ]


#Basic authentication
@auth.verify_password
def verify_password(username, password):
    if username == 'admin' and password == 'secret':
        return True
    return False

#Login page
@app.route("/login", methods = ['GET', 'POST'])
def login():
    response = make_response('')

    if request.method == 'POST':
        username = request.json['username']
        password = request.json['password']

        #Check if username and password are correct
        if username == 'admin' and password == 'secret':
            response = make_response("", 200)
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response
        else:
            response = make_response("", 500)
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response
    
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


#App page

#STORE PAGE
@app.route("/api/store-data", methods=['GET', 'POST']) #handle GET and POST requests
@auth.login_required
def get_post_store_data():
    response = make_response
    if request.method == 'GET': #get data
        response = jsonify(storeData)
    # elif request.method == 'POST': #add data
    #     global maxID
    #     item = {
    #     "id" : request.json['id'],
    #     # "name": request.json['name'],
    #     # "price": request.json['price'],
    #     # "isInCart": request.json['isInCart'],
    #     # "qtyInCart": request.json['qtyInCart']
    #     }
    #     for element in storeData:
    #         if element["id"] == item["id"]:
    #             storeData.remove(element)
    #             storeData.append(item)
    #     response = jsonify({'data': 'received'})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


#CART PAGE
@app.route("/api/cart-data/<id>", methods=['PUT', 'DELETE']) #handle PUT and DELETE requests
@auth.login_required
def change_delete_cart_data(id):
    if request.method == 'OPTIONS': #handle preflight request
        response = make_response
    elif request.method == 'PUT': #modify data
        item = {}
        for element in storeData:
            if element["id"] == int(id):
                item = element
        if len(item) == 0:
            response = make_response("Not found", 404)
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response
        #add qty to cart
        item["qtyInCart"] += int(request.json["qtyToAdd"])
        response = make_response(jsonify(item))
    elif request.method == 'DELETE': #delete data
        item = {}
        for element in storeData:
            if element["id"] == int(id):
                item = element
        if len(item) == 0:
            response = make_response("Not found", 404)
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response
        storeData.remove(item)
        response = make_response("", 204)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


#CART PAGE
@app.route("/api/cart-data", methods=['GET', 'POST']) #handle GET and POST requests
@auth.login_required
def get_post_cart_data():
    response = make_response
    if request.method == 'GET': #get data
        response = jsonify(cartData)
    elif request.method == 'POST': #add data
        global maxID
        item = {
        "id" : request.json['id'],
        "qtyToAdd": request.json['qtyToAdd'],
        }
        itemFound = False
        for element in cartData:
            if element["id"] == item["id"]:
                itemFound = True
                element["qtyInCart"] += item["qtyToAdd"]
                item["qtyToAdd"] = 0
                element["qtyToAdd"] = 0
                
        if itemFound == False: #if item is not already in cart
            # cartData.append(item)
            for element in storeData: #find element in store data
                if element["id"] == item["id"]:
                    temp = item["qtyToAdd"]
                    item = element
                    item["qtyInCart"] += temp
                    item["qtyToAdd"] = 0
                    cartData.append(item)
        
        #update store data to include item in cart
        for element in storeData:
            if element["id"] == item["id"]:
                element["isInCart"] = True

        response = jsonify({'data': 'received'})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


if __name__ == "__main__":
    app.run(debug=True)