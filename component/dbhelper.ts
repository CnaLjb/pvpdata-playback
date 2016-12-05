///<reference path='../definitelyTyped/app.d.ts' />
var MongoClient = require('mongodb').MongoClient;



class DBHelper{

    private static dbcon;

    public getConnection():any{
        if(!DBHelper.dbcon){
            var url = "mongodb://127.0.0.1:27017/poke302";
            MongoClient.connect(url)
            .then(function (db) { // <- db as first argument
                console.log(db);
                DBHelper.dbcon = db;
            })
            .catch(function (err) {
                console.log("link db error:\t",err);
            })
        }
        
        return DBHelper.dbcon
    }   
    
}



