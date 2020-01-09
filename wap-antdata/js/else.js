!$('.subscribe-inp-body').length > 0 || (function () {
$('.industry-select').find('.btn-add').bind('click',function(){
  var selectLength = $('.industry').find('.select').length;
  if( !$('.industry input[type=text]').val()==""){
    var inpVal = $(this).prev('input').val();
    $('.industry').find('.select-box').append(
      '<span class="select hy">'
      + inpVal
      + '<i class="icon icon-close"></i></span>'
    );
    $(this).prev('input').val('');
    $('.industry-select .title p').find('i').text( 4 - selectLength);
    $('.industry-select .title h2').find('em').text( 1 + selectLength);
   
  };
  if ( selectLength >= 4 ) {
    // $(this).attr('disabled','disabled');
    // $('.industry-select').find('input').attr('disabled','disabled');
    $('.industry-select .title p').find('i').text( 0 );
  };
  
  //console.log('1:' + selectLength);
});

$('.select-box').find('.icon-close').live('click', function(){
  var selectIndex = $('.industry').find('.select').index();
  var selectLg = $('.industry').find('.select').length;
  var newEm = selectIndex--;

  var newI = 0;
  $(this).parent().remove();
  $('.industry-select').find('.btn-add').removeAttr('disabled');
  $('.industry-select').find('input').removeAttr('disabled');
  $('.industry-select .title h2').find('em').text( newEm );
  $('.industry-select .title p').find('i').text( newI++ );
  console.log('2:' +selectLg);
});

var areaIndex = $('.area-select .area').find('.select').index();
if(areaIndex>0){
  $('.area-select .title').find('p').hide();
}

$('.area-select').find('.icon-close').bind('click',function(){
  areaIndex = $('.area-select .area').find('.select').index();
  
  if(areaIndex<=1){
    $('.area-select .title').find('p').show();
  };
  $(this).parent().remove();
  console.log(areaIndex);
});
})();

!$('.city-content').length > 0 || (function () {
  $('.city').bind('click',function(){
 

    if( $(this).hasClass('cur')){
      $(this).removeClass('cur');
    }else{
      $(this).addClass('cur');
      $('.all-city').removeClass('cur');
    }
  });
  $('.all-city').bind('click',function(){
    if( $(this).hasClass('cur')){
      $(this).removeClass('cur');
    }else{
      $(this).addClass('cur');
      $('.city').removeClass('cur');
    }
  });
})();