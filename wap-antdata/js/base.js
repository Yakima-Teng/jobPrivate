$(document).ready(function() {
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
      }, 0);
    },
    // noRefresh: true,
    // noLoad: true,
  });

  // 触发首屏渲染
  pullToRefresh.triggerPull();

});