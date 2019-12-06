// console.log("load");

// 햄버거 메뉴바
var $burgerDeluxe = document.querySelector(".burger_deluxe")
$burgerDeluxe.addEventListener("click", function(e){
    $(this).toggleClass('open');
    $('.overlay').toggleClass('open');
})

// 마우스 커서
var colour="#ff00f0";
var sparkles=120;

var x=ox=400;
var y=oy=300;
var swide=800;
var shigh=600;
var sleft=sdown=0;
var tiny=new Array();
var star=new Array();
var starv=new Array();
var starx=new Array();
var stary=new Array();
var tinyx=new Array();
var tinyy=new Array();
var tinyv=new Array();

window.onload=function() { if (document.getElementById) {
  var i, rats, rlef, rdow;
  for (var i=0; i<sparkles; i++) {
    var rats=createDiv(3, 3);
    rats.style.visibility="hidden";
    document.body.appendChild(tiny[i]=rats);
    starv[i]=0;
    tinyv[i]=0;
    var rats=createDiv(5, 5);
    rats.style.backgroundColor="transparent";
    rats.style.visibility="hidden";
    var rlef=createDiv(1, 5);
    var rdow=createDiv(5, 1);
    rats.appendChild(rlef);
    rats.appendChild(rdow);
    rlef.style.top="2px";
    rlef.style.left="0px";
    rdow.style.top="0px";
    rdow.style.left="2px";
    document.body.appendChild(star[i]=rats);
  }
  set_width();
  sparkle();
}}

function sparkle() {
  var c;
  if (x!=ox || y!=oy) {
    ox=x;
    oy=y;
    for (c=0; c<sparkles; c++) if (!starv[c]) {
      star[c].style.left=(starx[c]=x)+"px";
      star[c].style.top=(stary[c]=y)+"px";
      star[c].style.clip="rect(0px, 5px, 5px, 0px)";
      star[c].style.visibility="visible";
      starv[c]=50;
      break;
    }
  }
  for (c=0; c<sparkles; c++) {
    if (starv[c]) update_star(c);
    if (tinyv[c]) update_tiny(c);
  }
  setTimeout("sparkle()", 40);
}

function update_star(i) {
  if (--starv[i]==25) star[i].style.clip="rect(1px, 4px, 4px, 1px)";
  if (starv[i]) {
    stary[i]+=1+Math.random()*3;
    if (stary[i]<shigh+sdown) {
      star[i].style.top=stary[i]+"px";
      starx[i]+=(i%5-2)/5;
      star[i].style.left=starx[i]+"px";
    }
    else {
      star[i].style.visibility="hidden";
      starv[i]=0;
      return;
    }
  }
  else {
    tinyv[i]=50;
    tiny[i].style.top=(tinyy[i]=stary[i])+"px";
    tiny[i].style.left=(tinyx[i]=starx[i])+"px";
    tiny[i].style.width="2px";
    tiny[i].style.height="2px";
    star[i].style.visibility="hidden";
    tiny[i].style.visibility="visible"
  }
}

function update_tiny(i) {
  if (--tinyv[i]==25) {
    tiny[i].style.width="1px";
    tiny[i].style.height="1px";
  }
  if (tinyv[i]) {
    tinyy[i]+=1+Math.random()*3;
    if (tinyy[i]<shigh+sdown) {
      tiny[i].style.top=tinyy[i]+"px";
      tinyx[i]+=(i%5-2)/5;
      tiny[i].style.left=tinyx[i]+"px";
    }
    else {
      tiny[i].style.visibility="hidden";
      tinyv[i]=0;
      return;
    }
  }
  else tiny[i].style.visibility="hidden";
}

document.onmousemove=mouse;
function mouse(e) {
  set_scroll();
  y=(e)?e.pageY:event.y+sdown;
  x=(e)?e.pageX:event.x+sleft;
}

function set_scroll() {
  if (typeof(self.pageYOffset)=="number") {
    sdown=self.pageYOffset;
    sleft=self.pageXOffset;
  }
  else if (document.body.scrollTop || document.body.scrollLeft) {
    sdown=document.body.scrollTop;
    sleft=document.body.scrollLeft;
  }
  else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
    sleft=document.documentElement.scrollLeft;
    sdown=document.documentElement.scrollTop;
  }
  else {
    sdown=0;
    sleft=0;
  }
}

window.onresize=set_width;
function set_width() {
  if (typeof(self.innerWidth)=="number") {
    swide=self.innerWidth;
    shigh=self.innerHeight;
  }
  else if (document.documentElement && document.documentElement.clientWidth) {
    swide=document.documentElement.clientWidth;
    shigh=document.documentElement.clientHeight;
  }
  else if (document.body.clientWidth) {
    swide=document.body.clientWidth;
    shigh=document.body.clientHeight;
  }
}

function createDiv(height, width) {
  var div=document.createElement("div");
  div.style.position="absolute";
  div.style.height=height+"px";
  div.style.width=width+"px";
  div.style.overflow="hidden";
  div.style.backgroundColor=colour;
  return (div);
}

// 명장면 눌렀을 때 반응! (뭔가 for문으로 돌리면 하나씩 안써도 될 것 같은데 . . 도전하지 못했습니다..)
var $best1 = document.querySelector("#best1")
$best1.addEventListener("click", function play(){
    { 
        var audio = document.getElementById('audio_play1'); 
        if (audio.paused) { 
            audio.play(); 
        }else{ 
            audio.pause(); 
            audio.currentTime = 0 
        } 
    } 
})
var $best2 = document.querySelector("#best2")
$best2.addEventListener("click", function play(){
    { 
        var audio = document.getElementById('audio_play2'); 
        if (audio.paused) { 
            audio.play(); 
        }else{ 
            audio.pause(); 
            audio.currentTime = 0 
        } 
    } 
})
var $best3 = document.querySelector("#best3")
$best3.addEventListener("click", function play(){
    { 
        var audio = document.getElementById('audio_play3'); 
        if (audio.paused) { 
            audio.play(); 
        }else{ 
            audio.pause(); 
            audio.currentTime = 0 
        } 
    } 
})
var $best4 = document.querySelector("#best4")
$best4.addEventListener("click", function play(){
    { 
        var audio = document.getElementById('audio_play4'); 
        if (audio.paused) { 
            audio.play(); 
        }else{ 
            audio.pause(); 
            audio.currentTime = 0 
        } 
    } 
})
var $best5 = document.querySelector("#best5")
$best5.addEventListener("click", function play(){
    { 
        var audio = document.getElementById('audio_play5'); 
        if (audio.paused) { 
            audio.play(); 
        }else{ 
            audio.pause(); 
            audio.currentTime = 0 
        } 
    } 
})
var $best6 = document.querySelector("#best6")
$best6.addEventListener("click", function play(){
    { 
        var audio = document.getElementById('audio_play6'); 
        if (audio.paused) { 
            audio.play(); 
        }else{ 
            audio.pause(); 
            audio.currentTime = 0 
        } 
    } 
})
var $best7 = document.querySelector("#best7")
$best7.addEventListener("click", function play(){
    { 
        var audio = document.getElementById('audio_play7'); 
        if (audio.paused) { 
            audio.play(); 
        }else{ 
            audio.pause(); 
            audio.currentTime = 0 
        } 
    } 
})
var $best8 = document.querySelector("#best8")
$best8.addEventListener("click", function play(){
    { 
        var audio = document.getElementById('audio_play8'); 
        if (audio.paused) { 
            audio.play(); 
        }else{ 
            audio.pause(); 
            audio.currentTime = 0 
        } 
    } 
})


