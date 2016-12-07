///<reference path='../definitelyTyped/app.d.ts' />
var MongoClient = require('mongodb').MongoClient;
import util = require("util");
var Promise = require('promise');

export class DBHelper{

    private static dbcon;

    static getConnection(ip:string):any{
        return new Promise(function(resolve,reject){
            if(!DBHelper.dbcon){
                var url = util.format("mongodb://%s/poke302",ip);
                MongoClient.connect(url)
                .then(function (db) { // <- db as first argument
                    DBHelper.dbcon = db;
                    resolve(DBHelper.dbcon);
                })
                .catch(function (err) {
                    console.log("link db error");
                    reject(err);
                })
            }else{
                resolve(DBHelper.dbcon);
            }
        })
    }

    static getPvpRecord(userId:string,ip:string){
        return DBHelper.getConnection(ip).then(function(db){
            var player = db.collection("player").find({userId:userId});
            console.log(player.playerData._version);   
        })
    }
}

// MongoClient.connect('mongodb://127.0.0.1:27017/poke302', function(err, db){
//     var col = db.collection('player');
//     var player = col.find({userId:"1012s302p3734542"})
//     console.log("player:",player);
// })
