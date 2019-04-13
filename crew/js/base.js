!$('.inp-date').length > 0 || (function () {
lay('.inp-date').each(function(){
  laydate.render({
    elem: this
    ,trigger: 'click'
  });
}); 
})();

!$('.btn-position-tab').length > 0 || (function () {
$('.hot-serch').find('a').on('click', function(){
  var aTxt = $(this).text();
  $('.index-content').find('.inp-txt').val(aTxt);
  
});
$('.btn-position-tab').find('.current').on('click',function(){
  $('.current').addClass('cur');
  $('.select').show();
});
$('.select').find('.xuanze').on('click',function(){
  var curTxt = $(this).text();
  $('.btn-position-tab').find('.current').text(curTxt).removeClass('cur');
  $('.select').hide();
  $(this).css('color','#00c6ff').siblings().removeAttr('style');
});

})();