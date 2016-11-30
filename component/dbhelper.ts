///<reference path='../definitelyTyped/app.d.ts' />
var MongoClient = require('mongodb').MongoClient;



class DBHelper{

    public static dbcon;

    private getConnection():any{
        if(!DBHelper.dbcon){
            var url = "";
            MongoClient.connect(url)
            .then(function (db) { // <- db as first argument
                console.log(db);
                DBHelper.dbcon = db;
            })
            .catch(function (err) {
                console.log("error");
            })
        }
        
        return DBHelper.dbcon
    }   

}



