$(function(){
!$('.inp-date').length > 0 || (function () {
lay('.inp-date').each(function(){
  laydate.render({
    elem: this
    ,trigger: 'click'
  });
}); 
})();
$('.btn-shrink').toggle(function(){
  $(this).parent().removeClass('shrink');
  $('.page-header .slogan').css({'marginLeft':150+19});
  $('.contents-box').css({'paddingLeft':150});
},function(){
 $(this).parent().addClass('shrink');
 $('.page-header .slogan').css({'marginLeft':54+19});
 $('.contents-box').css({'paddingLeft':54});
})

});
