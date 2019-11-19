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
  $('.btn-close-current').bind('click',function(){
    if($(this).hasClass('cur')){
      $(this).removeClass('cur').next().hide();
    }else{
      $(this).addClass('cur').next().show();
    }
  });
  $('.choice-list').find('.choice').bind('click',function(){
    $(this).parent().hide();
    $('.btn-close-current').removeClass('cur');
  })
})();

//内容导航关闭
!$('.module-menu-list').length > 0 || (function () {
  var moduleMenu = $('.module-menu-list .menu');
  var moduleMenuLength = moduleMenu.length;
 
  moduleMenu.bind('click',function(){
    // var moduleMenuIndex = $(this).index();
    // console.log(moduleMenuIndex);
    $(this).addClass('cur').siblings().removeClass('cur');
  });
  moduleMenu.find('.icon').bind('click',function(){
    //console.log('1')
    $(this).parent().hide();
  })

  //console.log(moduleMenuLength);
  $('.module-menu-list-box').find('.menu-left').bind('click',function(){

  });
  
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

});
