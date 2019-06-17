$(function(){
//$('.page-contents').css({'paddingLeft':90});
$('.btn-shrink').toggle(function(){
  $(this).parent().removeClass('shrink');
//  $('.page-contents').css({'paddingLeft':255});
  $('.page-header .slogan').css({'marginLeft':150+19});
  $('.contents-box').css({'paddingLeft':150});
},function(){
  $(this).parent().addClass('shrink');
 // $('.page-contents').css({'paddingLeft':90});
 $('.page-header .slogan').css({'marginLeft':54+19});
 $('.contents-box').css({'paddingLeft':54});
})

});
