// index.js


/**
 * global variable
 */
var myUserId = "";
var myIp = "";



$("#findRecord").on("click",function(){
    myUserId = $("#userId").val();
    myIp = $("#ip").val();
    if(!userId || !ip){
        alert("玩家id或ip出错");
        return;
    }
    var param = {
        userId:myUserId,
        ip:myIp
    }
    console.log("param",param);
    util.request("/playback/getPvplist",param,function(err,data){
        console.log("responce data",data);
        showPvplist(data.pvps);
    });    
})


/**
 * 显示pvp列表
 */
var showPvplist = function(pvps){
    if(Array.isArray(pvps)){
        for(var i=0;i<pvps.length;i++){
            var item = getRecord(pvps[i]);
            $("#pvps").append(item);
        }
    }else{
        alert("玩家pvp数据异常");
    }
}


var getRecord = function(pvpRecord){
    var item=$('<div></div>');
    item.addClass('pvp_item');    //添加css样式

    var time=$('<div></div>');
    time.addClass('pvp_time');  
    time.text(util.getLocalTime(pvpRecord.time).toString());

    var oppName=$('<div></div>');
    oppName.addClass('pvp_oppName');
    oppName.text(pvpRecord.oppName);

    var opplv=$('<div></div>');
    opplv.addClass('pvp_opplv');
    opplv.text(pvpRecord.oppLv);

    var oppRes=$('<div></div>');
    oppRes.addClass('pvp_oppRes');
    oppRes.text(pvpRecord.pvpRes?"胜利":"战败");

    item.append(time);
    item.append(oppName);
    item.append(opplv);
    item.append(oppRes);
    
    return item;
}


/**
 * 工具类
 */
var util = (function(){

    var request = function(url,param,cb){
        $.ajax({
            url:url,
            type:'GET', //GET
            async:true, //或false,是否异步
            data:param,
            dataType:'json',    //返回的数据格式：json/xml/html/script/jsonp/text
            success:function(data,textStatus,jqXHR){
                console.log(data);
                console.log(textStatus);
                console.log(jqXHR);
                cb(null,data);
            },
            error:function(xhr,textStatus){
                console.log("xhr",xhr);
                console.log(textStatus);
                cb(xhr,null);
            }
        })
    }

    var getLocalTime = function(nS) { 
        return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' '); 
    } 

    return {
        request:request,
        getLocalTime:getLocalTime
    }

})();