$(function(){
$('.page-contents').css({'paddingLeft':90});
$('.btn-shrink').toggle(function(){
  $(this).parent().removeClass('shrink');
  $('.page-contents').css({'paddingLeft':255});
},function(){
  $(this).parent().addClass('shrink');
  $('.page-contents').css({'paddingLeft':90});
})

});
