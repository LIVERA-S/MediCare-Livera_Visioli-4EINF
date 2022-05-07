from flask import Flask, render_template, request, jsonify
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from flask_cors import CORS


app = Flask(__name__)
app.config["MONGO_URI"] = 'mongodb://Livera2003:Waduge78&@cluster0-shard-00-00.uylmr.mongodb.net:27017,cluster0-shard-00-01.uylmr.mongodb.net:27017,cluster0-shard-00-02.uylmr.mongodb.net:27017/Livera1?ssl=true&replicaSet=atlas-38dmxu-shard-0&authSource=admin&retryWrites=true&w=majority'
# db = client.lin_flask
mongo = PyMongo(app)
CORS(app)

@app.route('/')
def index():
    return "Ciao"

@app.route('/users', methods=['POST', 'GET'])
def data():
    
    # POST a data to database
    if request.method == 'POST':
        body = request.json
        name = body['name']
        emailId = body['emailId']
        phone = body['phone']
        date = body['date']
        reason = body['reason']
        # db.users.insert_one({
        mongo.db.users.insert_one({
            "name": name,
            "emailId":emailId,
            "phone":phone,
            'date':date,
            'reason':reason
        })
        return jsonify({
            'status': 'Data is posted to MongoDB!',
            'name': name,
            'emailId':emailId,
            'phone':phone,
            'date':date,
            'reason':reason
        })
    
    # GET all data from database
    if request.method == 'GET':
        allData =  mongo.db.users.find()
        dataJson = []
        for data in allData:
            id = data['_id']
            name = data['name']
            emailId = data['emailId']
            phone = body['phone']
            date = body['date']
            reason = body['reason']
            dataDict = {
                'id': str(id),
                'name': name,
                'emailId': emailId,
                'phone':phone,
                'date':date,
                'reason':reason
            }
            dataJson.append(dataDict)
        print(dataJson)
        return jsonify(dataJson)

@app.route('/users/<string:id>', methods=['GET', 'DELETE', 'PUT'])
def onedata(id):

    # GET a specific data by id
    if request.method == 'GET':
        data = mongo.db.users.find_one({'_id': ObjectId(id)})
        id = data['_id']
        name = data['name']
        emailId = data['emailId']
        phone = body['phone']
        date = body['date']
        reason = body['reason']
        dataDict = {
            'id': str(id),
            'name': name,
            'emailId':emailId,
            'phone':phone,
            'date':date,
            'reason':reason
        }
        print(dataDict)
        return jsonify(dataDict)
        
    # DELETE a data
    if request.method == 'DELETE':
        mongo.db.users.delete_many({'_id': ObjectId(id)})
        print('\n # Deletion successful # \n')
        return jsonify({'status': 'Data id: ' + id + ' is deleted!'})

    # UPDATE a data by id
    if request.method == 'PUT':
        body = request.json
        name = body['name']
        emailId = body['emailId']
        phone = body['phone']
        date = body['date']
        reason = body['reason']

        mongo.db.users.update_one(
            {'_id': ObjectId(id)},
            {
                "$set": {
                    "name":name,
                    "emailId": emailId,
                    "phone":phone,
                    "date":date,
                    "reason":reason
                }
            }
        )

        print('\n # Update successful # \n')
        return jsonify({'status': 'Data id: ' + id + ' is updated!'})

if __name__ == '__main__':
    app.debug = True
    app.run()