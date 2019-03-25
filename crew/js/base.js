$(function(){


});
!$('.inp-date').length > 0 || (function () {
lay('.inp-date').each(function(){
  laydate.render({
    elem: this
    ,trigger: 'click'
  });
}); 
})();