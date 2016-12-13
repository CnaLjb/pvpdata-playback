///<reference path='../definitelyTyped/app.d.ts'/>
import dbhelperMd = require("../component/dbhelper");  
import dbHelper = dbhelperMd.DBHelper
var Promise = require('promise');
var _  = require("underscore");

/**
 * PVP战斗回放类
 */
export class Playback{

    /**
     * 回放玩家A
     */
    private static playerA:string = "1s2p100";

    /**
     * 回放玩家B
     */
    private static playerB:string = "1s2p101";

    /**
     * 回放ip
     */
    private static playbackIp:string = "127.0.0.1";

    /**
     * 获取某个玩家数据
     * 
     * @param  {string} ip
     * @param  {string} userId
     */
    static getPlayer(ip:string,userId:string):any{
        return dbHelper.getConnection(ip).then(function(db){
            if(!db){
                console.log("connect error...");
                return;
            }else{
                console.log("connect success!");
            }
            return db.collection("player").findOne({userId:userId});          
        })  
    }

    static getPlayerPvpList(player:any){
        var pvpRecord = player.playerData._pvp.pvpRecord;
        pvpRecord = pvpRecord.reverse();
        return pvpRecord;
    }

    /**
     * 复制PVP记录
     * 
     * @static
     * @param {string} ip
     * @param {string} id
     * @returns
     * 
     * @memberOf Playback
     */
    static copyBatRecord(ip:string,id:string){
         return dbHelper.getConnection(ip).then(function(db){
            if(!db){
                console.log("connect error...");
                return;
            }else{
                console.log("connect success!");
            }
            return db.collection("pvpBatRecord").findOne({id:id});          
        })
    }

    static insertRecord(userId:string,recordId:any){
        Playback.getPlayer(Playback.playbackIp,Playback.playerA).then(function(player){
            
        })
    }     
}

// Playback.getPlayer("127.0.0.1","1012s302p3331490").then(Playback.getPlayerPvpList)
// .then(function (data) {
//     console.log("data:",data);
// })