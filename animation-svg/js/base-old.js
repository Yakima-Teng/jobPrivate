$('.animation-yellow-01').on('click',function(){
  $('.coordpath-yellow').eq(0).addClass('coordpath-yellow-01');
  $('.coordpath-yellow').eq(1).addClass('coordpath-yellow-02');
  $(this).hide();
});

$('.animation-yellow-02').on('click',function(){
  $('.coordpath-yellow').eq(2).addClass('coordpath-yellow-03');
  $('.coordpath-yellow').eq(3).addClass('coordpath-yellow-04');
  $('.coordpath-yellow').eq(4).addClass('coordpath-yellow-05');
  $('.coordpath-yellow').eq(5).addClass('coordpath-yellow-06');
  $(this).hide();
});


$('.animation-yellow-03').on('click',function(){
  $('.coordpath-yellow').eq(6).addClass('coordpath-yellow-07');
  $('.coordpath-yellow').eq(7).addClass('coordpath-yellow-08');
  $(this).hide();
});

$('.animation-red-01').on('click',function(){
  $('.coordpath-red').eq(0).addClass('coordpath-red-01');
  $(this).hide();
});

$('.animation-red-02').on('click',function(){
  $('.coordpath-red').eq(1).addClass('coordpath-red-02');
  $('.coordpath-red').eq(2).addClass('coordpath-red-03');
  $(this).hide();
});

$('.animation-violet-01').on('click',function(){
  $('.coordpath-violet').eq(0).addClass('coordpath-violet-01');
  $(this).hide();
});

$('.animation-blue-01').on('click',function(){
  $('.coordpath-blue').eq(0).addClass('coordpath-blue-01');
  $(this).hide();
});
$('.animation-blue-02').on('click',function(){
  $('.coordpath-blue').eq(1).addClass('coordpath-blue-02');
  $(this).hide();
});
$('.animation-blue-03').on('click',function(){
  $('.coordpath-blue').eq(2).addClass('coordpath-blue-03');
  $(this).hide();
});

$('.route-box').on('click',function(){
  location.reload();
});