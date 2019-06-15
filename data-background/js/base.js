$(function(){
//$('.page-contents').css({'paddingLeft':90});
$('.btn-shrink').toggle(function(){
  $(this).parent().removeClass('shrink');
//  $('.page-contents').css({'paddingLeft':255});
  $('.page-header .slogan').css({'marginLeft':255+35});
  $('.contents-box').css({'paddingLeft':255});
},function(){
  $(this).parent().addClass('shrink');
 // $('.page-contents').css({'paddingLeft':90});
 $('.page-header .slogan').css({'marginLeft':90+35});
 $('.contents-box').css({'paddingLeft':90});
})

});
