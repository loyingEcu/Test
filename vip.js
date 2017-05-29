var thisURL=window.location.href.match('http[^\?]*')[0],inum=1,vipOption="";
var vipChannl=new Array(
"https://api.47ks.com/webcloud/?v=",
"http://yyygwz.com/index.php?url=",
"http://000o.cc/jx/ty.php?url=",
"http://www.vipjiexi.com/yun.php?url=",
"http://aikan-tv.com/tong.php?url=",
"http://p2.api.47ks.com/webcloud/?v=",
"https://ckplaer.duapp.com/hai.php?url=",
"http://q.z.vip.totv.72du.com/?url=",
"http://www.sfsft.co/video.php?url=",
"http://www.wmxz.wang/video.php?url=");
for(x in vipChannl)
{
    vipOption=vipOption+'<option value="'+vipChannl[x]+thisURL+'">VIP通道'+inum+++'</option>';}
    
function insVIP(emID,rID)
{var gemID=document.getElementsByClassName(emID)[0];
var newNode=document.createElement("select");newNode.setAttribute("title","Insert VIPChannl by ADM.");
newNode.setAttribute("style","border:2px solid #0088f5;color:#0088f5;outline:0");
gemID.appendChild(newNode);
newNode.setAttribute("onchange","replacePlayer(this,'"+rID+"')");
newNode.innerHTML='<option selected="selected" disabled="disabled">切换VIP通道</option>'+vipOption;
    
}
function replacePlayer(e,rID){
    var playerID=document.getElementById(rID);
    playerID.innerHTML='';
    var newplayerID=document.createElement("iframe");
    playerID.appendChild(newplayerID);
    newplayerID.setAttribute("border","0");
    newplayerID.setAttribute("frameborder","no");
    newplayerID.setAttribute("scrolling","no");
    newplayerID.setAttribute("marginwidth","0");
    newplayerID.setAttribute("width","100%");
    newplayerID.setAttribute("height","100%");
    newplayerID.src=e.value;
    
}