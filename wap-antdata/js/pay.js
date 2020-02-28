$('.member-box').on('click', function () {
  $(this).addClass('cur').siblings().removeClass('cur');
});
$('.time-tab').find('.condition').on('click', function () {
  var indexTT = $(this).index();
  $(this).addClass('cur').siblings().removeClass('cur');
  $('.member-list').eq(indexTT).addClass('cur').siblings().removeClass('cur');
});

