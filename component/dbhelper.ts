///<reference path='../definitelyTyped/app.d.ts' />
var MongoClient = require('mongodb').MongoClient;
import util = require("util");
var Promise = require('promise');

export class DBHelper{

    private static dbcon;

    static getConnection(ip:string):any{
        // return new Promise(function(resolve,reject){
        //     if(!DBHelper.dbcon){
        //         var url = util.format("mongodb://%s:27017/poke2",ip);
        //         MongoClient.connect(url)
        //         .then(function (db) { // <- db as first argument
        //             DBHelper.dbcon = db;
        //             console.log("connect success...");
        //             resolve(DBHelper.dbcon);
        //         })
        //         .catch(function (err) {
        //             console.log("connect fail...");
        //             reject(err);
        //         })
        //     }else{
        //         resolve(DBHelper.dbcon);
        //     }
        // })
        var url = util.format("mongodb://%s:27017/poke2",ip);
        return MongoClient.connect(url);
    }
}

// MongoClient.connect('mongodb://127.0.0.1:27017/poke2', function(err, db){
//     if(err){
//         console.log("connect err:",err);
//         return;
//     }
//     var col = db.collection('player');
//     var player = col.findOne({userId:"xx"}).then(function(data){
//         console.log("data",data.playerData._version);
//     }).catch(function(err){
//         console.log("err:",err);
//     })
// })