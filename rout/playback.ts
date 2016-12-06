

/**
 * PVP战斗回放类
 */
class Playback{


    private ownUserId:string;

    private enemyUserId:string;

    constructor(userId:string){
        this.ownUserId = userId;
    }
    
    
    /**
     * 根据玩家的用户名获取玩家所在区的数据库IP
     * 
     * @returns {string}
     * 
     * @memberOf Playback
     */
    static getDatabaseIpFromUserId():string{
        var dbip = "";

        return dbip;
    }


    /**
     * 获取敌人的UserId
     * 
     * @static
     * @param {string} userId
     * @param {string} ip
     * @returns {string}
     * 
     * @memberOf Playback
     */
    static getEnemyUserId(userId:string,ip:string):string{
        return null;
    }

    
    /**
     * 获取玩家最近对战记录
     * @param  {string} userId
     * @param  {string} ip
     */
    static getPvplist(userId:string,ip:string){
                    
    }         
}