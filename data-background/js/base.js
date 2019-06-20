$(function(){
!$('.inp-date').length > 0 || (function () {
lay('.inp-date').each(function(){
  laydate.render({
    elem: this
    ,trigger: 'click'
  });
}); 
})();
!$('.select-page').length > 0 || (function () {
  $('.select-page .num').on('click',function(){
    $('.num-list-box').show();
  });
  $('.num-list').on('click',function(){
    $('.num-list-box').hide();
    var numTxt = $(this).text();
    $('.select-page').find('.num').text(numTxt);
  });
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
