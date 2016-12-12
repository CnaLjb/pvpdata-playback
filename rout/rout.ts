import playbackMd = require("./playback");  
import playback = playbackMd.Playback

// https://www.promisejs.org/
// https://segmentfault.com/a/1190000002928371
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise
// https://docs.mongodb.com/manual/tutorial/query-documents/

/**
 * 获取玩家PVP记录
 * 
 * @export
 * @param {any} req
 * @param {any} res
 */
export function getPvplist(req,res):void{
    var userId = req.query.userId;
    var ip = req.query.ip;
    playback.getPlayer(ip,userId).then(playback.getPlayerPvpList)
    .then(function (data) {
        res.setHeader('Content-Type', 'text/plain');
        res.end(data);
    })
    .catch(function (e) {
        res.status(500, {
            error: e
        });
    });
}

/**
 * 获取敌人UserId
 * 
 * @export
 * @param {any} req
 * @param {any} res
 */
export function getEnemyUserId(req,res):void{
   
}
