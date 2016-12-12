import dbhelperMd = require("../component/dbhelper");  
import dbHelper = dbhelperMd.DBHelper

/**
 * PVP战斗回放类
 */
export class Playback{

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
            db.collection("player").findOne({userId:userId});          
        })  
    }

    static getPlayerPvpList(player:any){
        console.log("player:",player);
        return player.playerData._version;
        // return player.playerData._pvp.pvpRecord;
    }     
}

Playback.getPlayer("127.0.0.1","1s2p298").then(Playback.getPlayerPvpList).then(function(data){
    console.log("version:",data);
}).catch(function(error){
    console.log("err",error);
})