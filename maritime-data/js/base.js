$(function(){
$('.data-rescue .module-info .soujiu .huan').animate({ backgroundPositionY:2},1500);
$('.goods-box .info .icon-yuan .sep').eq(0).animate({ height:190},2000);
$('.goods-box .info .icon-yuan .sep').eq(1).animate({ height:80},2000);
$('.goods-box .info .icon-yuan .sep').eq(2).animate({ height:40},2000);
$('.goods-box .info .icon-yuan .sep').eq(3).animate({ height:25},2000);
$('.goods-box .info .icon-yuan .icon').eq(0).animate({ bottom:235},2000);
$('.goods-box .info .icon-yuan .icon').eq(1).animate({ bottom:125},2000);
$('.goods-box .info .icon-yuan .icon').eq(2).animate({ bottom:85},2000);
$('.goods-box .info .icon-yuan .icon').eq(3).animate({ bottom:70},2000);
$("#dataNums-01").rollNumDaq({
  deVal:6712,
  className:'dataNums'
});
$("#dataNums-02").rollNumDaq({
  deVal:261,
  className:'dataNums02'
});
$("#dataNums-03").rollNumDaq({
  deVal:13,
  className:'dataNums03'
});

var timejg=10000;//轮播间隔时间
var size = $('.ly-ts').size();

$('.ly-ts').eq(0).show();
$('.region').eq(0).addClass('active')
$('.region').mouseover(function(){
  $(this).addClass('active').siblings().removeClass('active');
  var index = $(this).index();
  i=index;
  $('.ly-ts').eq(index).stop().show().siblings().stop().hide();
});

var i = 0;
var time = setInterval(move,timejg);

function move(){
  i++;
  if(i==size){
    i=0;
  }

  $('.region .xing').eq(i).addClass('active').siblings().removeClass('active');
  $('.ly-ts').eq(i).show().siblings().hide();
}

$('.region').hover(function(){
  
  clearInterval(time);
},function(){
  time = setInterval(move,timejg);
});


});
