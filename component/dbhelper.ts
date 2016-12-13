///<reference path='../definitelyTyped/app.d.ts' />
var MongoClient = require('mongodb').MongoClient;
import util = require("util");
var Promise = require('promise');

export class DBHelper{

    private static dbcon;

    static getConnection(ip:string):any{
        var url = util.format("mongodb://%s:27017/poke302",ip);
        return MongoClient.connect(url);
    }
}
