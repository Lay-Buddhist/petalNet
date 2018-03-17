/**
 * Created by WQM on 2018/2/6.
 */
//<---轮播图start--->//
var divArr = $(".main-banner .slide");
var ind = 0;
var length = divArr.length-1;
var timer = null;

function  auto() {
    timer = setInterval(function(){
        ind++;
        if(ind > length) {
            ind = 0;
        }
        play();
    },3000);
}
auto();
function play() {
    divArr.eq(ind).fadeIn().siblings().fadeOut();

}
$(".main-banner").mouseenter(function(){
    clearInterval(timer);
});
    $(".main-banner").mouseleave(function () {
        auto();
    });


//<--- header ---->//
var header = $("header");
var nav    = $("header nav");
var ha  = $(".h-a");
var topMax = header.height();
var logo = $("#if1");
var land = $(".land");
$(window).scroll(function () {
    if($(window).scrollTop()>topMax) {
        header.addClass("header-new");
        logo.attr("src","images/logo2.svg");
        ha.css("color","#000");
        land.css({"color":"#000","background-color":"#ccc"});
    }else {
        header.removeClass("header-new");
        logo.attr("src","images/logo1.svg");
        ha.css("color","#fff");
        land.css({"color":"#fff","background-color":"transparent"});
    }

})

//<---pic ---->//
var prev = $(".prev");
var next = $(".next");
var pic  = $(".pic");
var inner= $(".inner");
var btns = $(".ul").children();
var num = 0;
var stimer = null;
var stimeout = null;
btns.click(function (event) {
    if(stimeout) {
        clearInterval(timer);
        stimeout = null;
    }
     num = $(this).index();
    stimeout = setTimeout(changeMg);
});

//next 切换
next.click(function(){
    if(stimeout) {
        clearInterval(timer);
        stimeout = null;
    }
    if (num<2) {
        num++;
    }else {
        num = 0;
    }
   changeMg();
    return false;
});
//prv 切换
prev.click(function(){
    if(stimeout) {
        clearInterval(timer);
        stimeout = null;
    }
    if (num>0) {
        num--;
    }else {
        num = 2;
    }
    changeMg();
    return false;
});
//自动切换

function changeTab(){
    if(num<2) {
        num++;
    }else {
        num = 0;
    }
    changeMg();
}
function changeMg(){
    var movePx = num * -1180 + "px";
    inner.animate({"marginLeft":movePx},500);
    btns.eq(num).addClass("active").siblings().removeClass("active");
}
timer = setInterval(changeTab,3000);
//鼠标悬停停止轮播
$(".success-middle").mouseenter(function (event) {
    clearInterval(timer);
});
$(".success-middle").mouseleave(function () {
   timer = setInterval(changeTab,3000);
});