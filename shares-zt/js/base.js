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

if( moduleMenuLength == Math.floor(newModuleWidth)){
  $('.module-menu-list-box').find('.btn-menu-tab').hide().end().css('margin','0 25px');
};
if( pageMenuLength == Math.floor(newPageWidth)){
  $('.page-menu-list-box').find('.btn-menu-tab').hide();
};
if( moduleMenuLength == 0){
  $('.module-menu-list-box,.btn-close-current-box').hide()
};

//左侧导航 
!$('.nav').length > 0 || (function () {
  $('.nav').toggle(function(){
    console.log('1')
    $(this).addClass('cur');
  },function(){
    console.log('2')
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
    var moduleMenuLength1 = $('.module-menu-list .menu').length;
    if( moduleMenuLength1 == 0){
      console.log('1');
      $('.module-menu-list-box,.btn-close-current-box').hide()
    };
    if( moduleMenuLength1 == Math.floor(newModuleWidth)){
      $('.module-menu-list-box').find('.btn-menu-tab').hide().end().css('margin','0 25px');
    };
  })
  var menuALLWight = moduleMenuLength*100;
  $('.module-menu-list').width(menuALLWight);

})();

//左侧导航收缩
$('.btn-shrink').live('click',function(){

  if(!$(this).hasClass('cur')){
    $(this).addClass('cur');
    $('.page-nav').hide();
    $('.page-contents').css('width','100%');
    $('.shrink-logo').show();
    var newModuleWidth1 = (moduleMenuWidth - 60 - 112 -19 - 50 -20 +200)/100;
    var newPageWidth1 = (pageMenuWidth - 380 - 65 - 20 - 14 - 20 + 100)/100;
    $('.module-menu-box').width( Math.floor(newModuleWidth1) *100);
    $('.page-menu-box').width( Math.floor(newPageWidth1) *100 );
  }else{
    $('.module-menu-box').width( Math.floor(newModuleWidth) *100 );
    $('.page-menu-box').width( Math.floor(newPageWidth) *100);
    $(this).removeClass('cur');
    $('.page-nav').show();
    $('.shrink-logo').hide();
    $('.page-contents').removeAttr('style');
  }
});

$('.page-menu-list').find('.menu').live('click',function(){
  $(this).addClass('cur').siblings().removeClass('cur');
});

$('#marquee4').kxbdSuperMarquee({
  isAuto:false,
  distance:300,
  btnGo:{left:'#goL2',right:'#goR2'},
  direction:'left'
})

$('#marquee').kxbdSuperMarquee({
  isAuto:false,
  distance:300,
  btnGo:{left:'#goL',right:'#goR'},
  direction:'left'
})

});
