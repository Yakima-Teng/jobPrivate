$(function(){
!$('.nav').length > 0 || (function () {
  $('.nav').toggle(function(){
    console.log('1')
    $(this).addClass('cur');
  },function(){
    console.log('2')
    $(this).removeClass('cur');
  });

})();
!$('.select-page').length > 0 || (function () {
 
})();

$('.btn-shrink').toggle(function(){
  $(this).parent().removeClass('shrink');
  $('.page-header .slogan').css({'marginLeft':130+19});
  $('.contents-box').css({'paddingLeft':130});
},function(){
 $(this).parent().addClass('shrink');
 $('.page-header .slogan').css({'marginLeft':54+19});
 $('.contents-box').css({'paddingLeft':54});
})

});
