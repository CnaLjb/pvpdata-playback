var fs = require("fs");

var path = "./471.log";
var txt = fs.readFileSync(path,'utf-8');
var reg2 = /(.*24s475p5648195.*\[6[0-9]+\].*|.*\[6[0-9]+\].*24s475p5648195.*)/g;
//var reg = /.*14s124p3346063.*\[64[0-9]+\].*/g;
//var reg = /.*3s1p356.*metSpirits.*nodeId=10050/g;
var res = txt.match(reg2);

for(var i = 0; i < res.length; i++){
    var addStr = res[i] + "\r\n";
    fs.appendFileSync("after-471.log",addStr);
}
console.log("finish...");
process.exit(1)

// var path = "C:\\Users\\Administrator\\Desktop\\钻石记录\\rcd\\";
// var filename = "1004s276p3042844-4.log";
// var logPath = path + filename;
// var savePath = path + "save\\" + filename;
// var txt = fs.readFileSync(logPath,'utf-8');

// var lineAry = txt.split("\r\n");


// var strAry = [];
// for(var i = 0; i < lineAry.length; i++){
//     var line = lineAry[i];
//     if(line.indexOf('msgDes') != -1){
//         var time = line.substring(0,19);
//         var sPos = line.indexOf('#!#{')+3;
//         var ePos = line.indexOf('}#!#')+1;
//         var jsonStr = line.substring(sPos,ePos);
//         var obj = JSON.parse(jsonStr);
//         var addStr = time + "   " + obj.msgDes + "  " + obj.diff.diamond + "\r\n"; 
//         fs.appendFileSync(savePath,addStr);
//     }
// }

// process.exit(1);



// var reg = /.*1004s276p3042844.*diamond.*/g;


// var res = txt.match(reg);



// for(var i = 0; i < res.length; i++){
//     var rcd = res[i];
//     var str = rcd + "\r\n";
//     fs.appendFileSync('./1004s276p3042844-4.log',str);        
// }
























































