var thisURL = window.location.href.match('http[^\?]*')[0],inum=1,vipOption="";
var vipChannl =new Array(
"https://api.47ks.com/webcloud/?v=",
"http://api.svip.baiyug.cn/svip/index.php?url=",
"http://q.z.vip.totv.72du.com/?url=",
"http://yun.mt2t.com/yun?url=",
"http://aikan-tv.com/tong.php?url=",
"http://admup.admflt.com/d/frame-vip-moondown.html?url=",
"http://www.sfsft.com/video.php?url=",
"http://tong.ck921.com/tong.php?url=",
"http://p2.api.47ks.com/webcloud/?v=",
"http://www.sfsft.com/video.php?url=",
"http://www.wmxz.wang/video.php?url="
);

for (x in vipChannl)
{
  vipOption = vipOption + '<option value="'+vipChannl[x]+thisURL+'">VIP通道'+inum+++'</option>';
}

function insVIP(emID,wID)
{var gemID = document.getElementsByClassName(emID)[0];
var newNode = document.createElement("select");
newNode.setAttribute("title","Insert VIPChannl by ADM.");
newNode.setAttribute("style","border:2px solid #f07816;color:#f07816;background:#2d2d2d;outline:0");
gemID.appendChild(newNode);
newNode.setAttribute("onchange", "newWinPlayer(this,'"+wID+"')");
newNode.innerHTML = '<option selected="selected" disabled="disabled">切换VIP通道</option>'+vipOption;
}

function newWinPlayer(e,wID){
    var playerID=document.getElementById(wID);
    playerID.innerHTML='';
    window.open(e.value,wID,'width=1051,height=592,location=0,menubar=0,scrollbars=0,status=0,toolbar=0');
    
}