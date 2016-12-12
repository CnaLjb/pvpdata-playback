// index.js





$("#findRecord").on("click",function(){
    var userId = $("#userId").val();
    var ip = $("#ip").val();
    if(!userId || !ip){
        alert("玩家id或ip出错");
        return;
    }
    var param = {
        userId:userId,
        ip:ip
    }
    console.log("param",param);
    util.request("/playback/getPvplist",param,function(err,data){
        console.log("responce data",data);
    });    
})










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


    return {
        request:request
    }

})();