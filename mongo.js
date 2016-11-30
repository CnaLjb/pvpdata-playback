var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://mc:kR3xfbnPi2@localhost:27017/poke2', function(err, db) {
    console.log("连接数据库成功");
    // Create a collection we want to drop later
    var players = db.collection('player');


    
})