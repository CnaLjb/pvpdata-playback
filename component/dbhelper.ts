///<reference path='../definitelyTyped/app.d.ts' />
var MongoClient = require('mongodb').MongoClient;
import util = require("util");
var Promise = require('promise');

class DBHelper{

    private static dbcon;

    static getConnection(ip:string):any{
        if(!DBHelper.dbcon){
            var url = util.format("mongodb://%s/poke302",ip);
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

    static getPvpRecord(){
        return new Promise(function(resolve,reject) {

        })
    }
}



