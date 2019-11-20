$(function(){
var pageMenu = $('.page-menu-list .menu');
var pageMenuLength = pageMenu.length;
var pageALLWight = pageMenuLength*100;
$('.page-menu-list').width(pageALLWight);

var moduleMenuWidth = $('.module-menu').width();
var newModuleWidth = (moduleMenuWidth - 60 - 112 -19 - 50 -20)/100;
$('.module-menu-box').width( Math.floor(newModuleWidth) *100 );

var pageMenuWidth = $('.page-menu').width();
var newPageWidth = (pageMenuWidth - 380 - 65 - 20 - 14 - 20)/100;
$('.page-menu-box').width( Math.floor(newPageWidth) *100);

var moduleMenu = $('.module-menu-list .menu');
var moduleMenuLength = moduleMenu.length;

if( moduleMenuLength <= Math.floor(newModuleWidth)){
  $('.module-menu-list-box').find('.btn-menu-tab').hide();
  $('.module-menu-box').width(moduleMenuLength*100);
};
if( pageMenuLength <= Math.floor(newPageWidth)){
  $('.page-menu-list-box').find('.btn-menu-tab').hide();
};
if( moduleMenuLength == 0){
  $('.module-menu-list-box,.btn-close-current-box').hide()
};

$li1 = $(".module-menu-list .menu");
$window1 = $(".module-menu-list");
$left1 = $(".module-menu-list-box .menu-left");
$right1 = $(".module-menu-list-box .menu-right");

$window1.css("width", $li1.length*100);
var lc1 = 0;
var rc1 = $li1.length-Math.floor(newModuleWidth);

$left1.click(function(){
  if (lc1 < 1) {
    return;
  }
  lc1--;
  rc1++;
  $window1.animate({left:'+=100px'}, 300);
});

$right1.click(function(){
  if (rc1 < 1){
    return;
  }
  lc1++;
  rc1--;
  $window1.animate({left:'-=100px'}, 300);
});


$li = $(".page-menu-list .menu");
$window = $(".page-menu-list");
$left = $(".page-menu-list-box .menu-left");
$right = $(".page-menu-list-box .menu-right");

$window.css("width", $li.length*100);
var lc = 0;
var rc = $li.length-Math.floor(newModuleWidth);

$left.click(function(){
  if (lc < 1) {
    return;
  }
  lc--;
  rc++;
  $window.animate({left:'+=100px'}, 300);
});

$right.click(function(){
  if (rc < 1){
    return;
  }
  lc++;
  rc--;
  $window.animate({left:'-=100px'}, 300);
});

//左侧导航 
!$('.nav').length > 0 || (function () {
  $('.nav').toggle(function(){
    $(this).addClass('cur');
  },function(){
    $(this).removeClass('cur');
  });
})();

//日历放大缩小
!$('.btn-shrink-date').length > 0 || (function () {
 $('.btn-shrink-date').toggle(function(){
   $(this).css({'right':44});
   $('.page-contents').css({'width':'100%'});
   $(this).find('.icon-shrink').css({'backgroundPosition':'0 -19px'});
   $('.page-nav,.page-menu,.module-menu').hide();
 },function(){
   $(this).removeAttr('style');
   $(this).find('.icon-shrink').removeAttr('style');
   $('.page-nav,.page-menu,.module-menu').show();
 })
})();

//内容导航关闭操作
!$('.btn-close-current-box').length > 0 || (function () {
  $('.btn-close-current').live('click',function(){
    if($(this).hasClass('cur')){
      $(this).removeClass('cur').next().hide();
    }else{
      $(this).addClass('cur').next().show();
    }
  });
  $('.choice-list').find('.choice').live('click',function(){
    $(this).parent().hide();
    $('.btn-close-current').removeClass('cur');
  })
})();

//内容导航关闭
!$('.module-menu-list').length > 0 || (function () {
  moduleMenu.live('click',function(){
    $(this).addClass('cur').siblings().removeClass('cur');
  });
  moduleMenu.find('.icon').live('click',function(){
    $(this).parent().remove();
    var moduleMenuLength = $('.module-menu-list .menu').length;
    if( moduleMenuLength == 0){
      $('.module-menu-list-box,.btn-close-current-box').hide()
    };
    if( moduleMenuLength <= Math.floor(newModuleWidth)){
      $('.module-menu-list-box').find('.btn-menu-tab').hide();
      $('.module-menu-box').width(moduleMenuLength*100);
    };
  })
  var menuALLWight = moduleMenuLength*100;
  $('.module-menu-list').width(menuALLWight);

})();

//左侧导航收缩
$('.btn-shrink').live('click',function(){
  if(!$(this).hasClass('cur')){
    $(this).addClass('cur');
    $('.page-nav').hide().addClass('shrink');
    $('.page-contents').css('width','100%');
    $('.shrink-logo').show();
    var newModuleWidth1 = (moduleMenuWidth - 60 - 112 -19 - 50 -20 +200)/100;
    var newPageWidth1 = (pageMenuWidth - 380 - 65 - 20 - 14 - 20 + 100)/100;
    $('.module-menu-box').width( Math.floor(newModuleWidth1) *100);
    $('.page-menu-box').width( Math.floor(newPageWidth1) *100 );
    var moduleMenuLength = $('.module-menu-list .menu').length;
   if( moduleMenuLength <= Math.floor(newModuleWidth1)){
      $('.module-menu-box').width(moduleMenuLength*100);
    };
  }else{
    $('.module-menu-box').width( Math.floor(newModuleWidth1) *100 );
    $('.page-menu-box').width( Math.floor(newPageWidth) *100);
    $(this).removeClass('cur');
    $('.page-nav').show().removeClass('shrink');;
    $('.shrink-logo').hide();
    $('.page-contents').removeAttr('style');
  }
});

$('.page-menu-list').find('.menu').live('click',function(){
  $(this).addClass('cur').siblings().removeClass('cur');
});

});
