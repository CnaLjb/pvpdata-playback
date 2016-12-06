///<reference path='./definitelyTyped/app.d.ts'/>
import express = require('express');
var app = express();
import routMd = require("./rout/rout");


app.use(express.static('public'));

app.get('/', function (req:express.Request, res:express.Response) {
     res.sendfile( __dirname + "/" + "index.html" );
})

app.get("/playback/getEnemyUserId",routMd.getEnemyUserId);
app.get("/playback/getPvplist",routMd.getPvplist);


var server = app.listen(8081, function () {

  console.log("应用实例，访问地址为 http://%s:%s", "127.0.0.1",8081);

})