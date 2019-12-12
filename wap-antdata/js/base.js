$(document).ready(function() {
!$('#container').length > 0 || (function () {
  // 测试用的数据下标
  var i = 1;

  // 安装下拉刷新插件
  var pullToRefresh = $.installPullToRefresh("#container", {
    onRefresh: function(refreshDone) {
      setTimeout(function() {
        $("#content").html("");
        // 刷新后出现10个
        for (i = 1; i < 11; ++i) {
          $("#content").append(
            '<dl class="title-list-main">'
              + '<dt class="num">' + i + '.</dt>'
              + '<dt class="title">山银桥山银桥山银桥控股集团有限公司关于昆新建智慧医院信息化建设项目的公开标公告</dt>'
              + '<dd class="info"><span class="state"><i class="icon icon-state"></i>招标</span><span class="time"><i class="icon icon-time"></i>9小时以前</span><span class="city">苏州</span></dd>'
            + '</dl>'
          );
        }
        refreshDone();
      }, 2000)
    },
    onLoad: function(loadDone) {
      setTimeout(function() {
        // 每次加载增加5个
        for (var j = 0; j < 5; ++j) {
          $("#content").append(
            '<dl class="title-list-main">'
              + '<dt class="num">' + i++ + '.</dt>'
              + '<dt class="title">山银桥山银桥山银桥控股集团有限公司关于昆新建智慧医院信息化建设项目的公开标公告</dt>'
              + '<dd class="info"><span class="state"><i class="icon icon-state"></i>招标</span><span class="time"><i class="icon icon-time"></i>9小时以前</span><span class="city">苏州</span></dd>'
            + '</dl>'
          );
        }
        loadDone();
        $('body .addmore').remove();
      }, 2000);
    },
    // noRefresh: true,
    // noLoad: true,
  });

  // 触发首屏渲染
  pullToRefresh.triggerPull();
})();

!$('.subscribe-inp-body').length > 0 || (function () {
$('.industry-select').find('.btn-add').bind('click',function(){
  var selectLength = $('.industry').find('.select').length;
  if( selectLength <= 4 && !$('.industry input[type=text]').val()==""){
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
    $(this).attr('disabled','disabled');
    $('.industry-select').find('input').attr('disabled','disabled');
  };
  
  //console.log('1:' + selectLength);
});

$('.select-box').find('.icon-close').live('click', function(){
  var selectIndex = $('.industry').find('.select').index();
  var selectLg = $('.industry').find('.select').length;
  var newEm = selectIndex--;

  var newI = 6 - selectLg;
  $(this).parent().remove();
  $('.industry-select').find('.btn-add').removeAttr('disabled');
  $('.industry-select').find('input').removeAttr('disabled');
  $('.industry-select .title h2').find('em').text( newEm );
  $('.industry-select .title p').find('i').text( newI++ );
  console.log('2:' +selectLg);
});
})();
});