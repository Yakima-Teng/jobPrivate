!$('#container').length > 0 || (function () {
var i = 0;
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


  //获取滚动条当前的位置
function getScrollTop() {
    var scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
    } else if (document.body) {
        scrollTop = document.body.scrollTop;
    }
    return scrollTop;
}

//获取当前可视范围的高度
function getClientHeight() {
    var clientHeight = 0;
    if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
    } else {
        clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
    }
    return clientHeight;
}

//获取文档完整的高度
function getScrollHeight() {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
}

//滚动事件触发
window.onscroll = function () {
  if (getScrollTop() + getClientHeight() === getScrollHeight()) {
    $('#pull-down').hide();
    for (let j = 0; j < 5; j++) {
          //console.log(data[i]);
          $('#content').append(
        '<dl class="title-list-main">'
          + '<dt class="num">' + i++ + '.</dt>'
          + '<dt class="title">山银桥山银桥山银桥控股集团有限公司关于昆新建智慧医院信息化建设项目的公开标公告</dt>'
          + '<dd class="info"><span class="state"><i class="icon icon-state"></i>招标</span><span class="time"><i class="icon icon-time"></i>9小时以前</span><span class="city">苏州</span></dd>'
        + '</dl>'
      );
    }
  }else{
    $('#pull-down').show();
  };
};
})();
