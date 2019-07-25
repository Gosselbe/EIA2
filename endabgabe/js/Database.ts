import * as Mongo from "mongodb";
console.log("Database starting");

let databaseURL: string = "mongodb://localhost:27017";
let databaseName: string = "test";
let db: Mongo.Db;
let gamer: Mongo.Collection;

if (process.env.NODE_ENV == "production") {
    databaseURL = "mongodb+srv://Bente:MEaK2016!@eia2-xlg1t.mongodb.net/eia2";
    databaseName = "eia2";
}

Mongo.MongoClient.connect(databaseURL, { connectTimeoutMS: 8000 }, handleConnect);

function handleConnect(_e: Mongo.MongoError, _client: Mongo.MongoClient): void {
    if (_e)
        console.log("Unable to connect to database, error: ", _e);
    else {
        console.log("Connected to database!");
        db = _client.db(databaseName);
        gamer = db.collection("Highscore");
    } 
}

export function insert(_doc: Gamer): void {
    gamer.insertOne(_doc, handleInsert);
}

function handleInsert(_e: Mongo.MongoError): void {
    console.log("Database insertion returned -> " + _e);
}

export function findAll(_callback: Function): void {
    var cursor: Mongo.Cursor = gamer.find();
    console.log(gamer.find());
    cursor.toArray(prepareAnswer);

    function prepareAnswer(_e: Mongo.MongoError, studentArray: Gamer[]): void {
        if (_e)
            _callback("Error" + _e);
        else
            _callback(JSON.stringify(studentArray));
    }
}

export function search(_callback: Function, _finde: string): void {
    let matrikelnummer: number = Number(_finde);
    gamer.find({ "matrikel": matrikelnummer }).toArray(prepareAnswer);


    function prepareAnswer(_e: Mongo.MongoError, studentArray: Gamer[]): void {
        if (_e)
            _callback("Error" + _e);
        else
            _callback(JSON.stringify(studentArray));
    }
}

