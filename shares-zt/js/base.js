$(function(){
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
  var moduleMenu = $('.module-menu-list .menu');
  var moduleMenuLength = moduleMenu.length;
  moduleMenu.live('click',function(){
    $(this).addClass('cur').siblings().removeClass('cur');
  });
  moduleMenu.find('.icon').live('click',function(){
    $(this).parent().hide();
  })
  var menuALLWight = moduleMenuLength*100;
  $('.module-menu-list').width(menuALLWight);

})();

//左侧导航收缩
$('.btn-shrink').toggle(function(){
  $(this).css({'transform': 'rotate(-180deg)'});
  $('.page-nav').hide();
  $('.page-contents').css('width','100%');
},function(){
  $(this).removeAttr('style');
  $('.page-nav').show();
  $('.page-contents').removeAttr('style');
})

!$('.page-menu-list-box').length > 0 || (function () {
  var pageMenu = $('.page-menu-list .menu');
  var pageMenuLength = pageMenu.length;
  var pageALLWight = pageMenuLength*100;
  $('.page-menu-list').width(pageALLWight);
  console.log(pageMenuLength);
})();

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
