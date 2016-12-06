


// https://www.promisejs.org/
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
    db.getData()
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

