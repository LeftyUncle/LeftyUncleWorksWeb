$(function(){
	var agent = navigator.userAgent;
    var redirectPass = 'mobile';
	if(agent.search(/iPhone/) != -1 || agent.search(/iPad/) != -1 || agent.search(/iPod/) != -1 || agent.search(/Android/) != -1){
		location.href = redirectPass;
    }
});
