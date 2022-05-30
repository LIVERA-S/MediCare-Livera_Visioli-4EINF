from flask import Flask, render_template, request, jsonify, Response
from flask_pymongo import PyMongo
from flask_restful import Resource , Api ,reqparse
from bson.objectid import ObjectId
from flask_cors import CORS
from bson import json_util
import pymongo

app = Flask(__name__)
app.config["MONGO_URI"] = 'mongodb://Emanuele-Visioli:EMAnuele25102004@cluster0-shard-00-00.x7fma.mongodb.net:27017,cluster0-shard-00-01.x7fma.mongodb.net:27017,cluster0-shard-00-02.x7fma.mongodb.net:27017/Sanita?ssl=true&replicaSet=atlas-566dc8-shard-0&authSource=admin&retryWrites=true&w=majority'
# db = client.lin_flask
mongo = PyMongo(app)
CORS(app)

@app.route('/')
def index():
    return ("<br/><br/><br/><br/><br/>" +
        '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'  +"/users =" + 
        '<br/><br/>' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +"/dataset =" +
        '<br/><br/>' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +"/medic/Nome_Del_Medico =" + 
        '<br/><br/>' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +"/nil/Nome_Di_Un_Nil ="+
        '<br/><br/>' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +"/map ="+
        '<br/><br/>' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +"/chart ="
    )

#---- CRUD
@app.route('/users', methods=['POST', 'GET'])
def data():
    
    # POST a data to database
    if request.method == 'POST':
        body = request.json
        name = body['name']
        emailId = body['emailId']
        phone = body['phone']
        date = body['date']
        time = body['time']
        reason = body['reason']
        # db.users.insert_one({
        mongo.db.users.insert_one({
            "name": name,
            "emailId":emailId,
            "phone":phone,
            'date':date,
            'time':time,
            'reason':reason
        })
        return jsonify({
            'status': 'Data is posted to MongoDB!',
            'name': name,
            'emailId':emailId,
            'phone':phone,
            'date':date,
            'time':time,
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
            phone = data['phone']
            date = data['date']
            time = data['time']
            reason = data['reason']
            dataDict = {
                'id': str(id),
                'name': name,
                'emailId': emailId,
                'phone':phone,
                'date':date,
                'time':time,
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
        phone = data['phone']
        date = data['date']
        time = data['time']
        reason = data['reason']
        dataDict = {
            'id': str(id),
            'name': name,
            'emailId':emailId,
            'phone':phone,
            'date':date,
            "time":time,
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
        time = body['time']
        reason = body['reason']

        mongo.db.users.update_one(
            {'_id': ObjectId(id)},
            {
                "$set": {
                    "name":name,
                    "emailId": emailId,
                    "phone":phone,
                    "date":date,
                    "time":time,
                    "reason":reason
                }
            }
        )

        print('\n # Update successful # \n')
        return jsonify({'status': 'Data id: ' + id + ' is updated!'})

#---- DATASET
@app.route('/dataset')
# Prendere i dati da MongoDB
def get():
    uss = mongo.db.medici_medicina_generale.find()#.limit(10)
    resp = json_util.dumps(uss)
    return Response(resp, mimetype='application/json')


#---- INPUT <NOME MEDICO>
@app.route('/medic/<string>', methods=['GET'])
def onedataa(string):
    # GET a specific data by name
    if request.method == 'GET':
        data = mongo.db.medici_medicina_generale.find({'Medico': string})
        resp = json_util.dumps(data)
        return Response(resp, mimetype = 'application/json') 


#---- INPUT <NIL>
@app.route('/nil/<string>', methods=['GET'])
def onedataaa(string):
    # GET a specific data by nil
    if request.method == 'GET':
        data = mongo.db.medici_medicina_generale.find({'NIL': string})
        resp = json_util.dumps(data)
        return Response(resp, mimetype = 'application/json') 


#---- MAP <GEOPANDAS>
@app.route('/map', methods=['GET'])
def markersGet():
        points = []
        result = mongo.db.medici_medicina_generale.find()
        for i in result:
            points.append({
                "Coordinates": {
                    "lng": i['LONG_X_4326'],
                    "lat": i['LAT_Y_4326'],
                    "adress": i["Indirizzo"],
                    "medico": i["Medico"]
                }
            })
        return jsonify(points)

'''MAP <GEOPANDAS> NIL
@app.route('/map/nil/<string>', methods=['GET'])
def markersGetT(string):
        points = []
        result = mongo.db.medici_medicina_generale.find({'NIL': string})
        for i in result:
            points.append({
                "Coordinates": {
                    "lng": i['LONG_X_4326'],
                    "lat": i['LAT_Y_4326'],
                    "adress": i["Indirizzo"],
                    "medico": i["Medico"]

                }
            })
        return jsonify(points)'''


#---- CHART <MATPLOTLIB>
@app.route('/chart', methods=['GET'])
def tab():
        if request.method == 'GET':
            data = mongo.db.medici_medicina_generale.aggregate([{"$group":{"_id":"$MUNICIPIO", "total":{"$sum":1}}},
                                                                {"$sort":{"_id":1}}])
            resp = json_util.dumps(data)
        return Response(resp, mimetype = 'application/json') 



if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0', port=5000)
