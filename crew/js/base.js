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
$('.btn-position-tab').hover(function(){
  $('.current').addClass('cur');
  $('.select').show();
},function(){
  $('.current').removeClass('cur');
  $('.select').hide();
});
$('.select').find('.xuanze').on('click',function(){
  var curTxt = $(this).text();
  $('.btn-position-tab').find('.current').text(curTxt).removeClass('cur');
  $('.select').hide();
  $(this).css('color','#00c6ff').siblings().removeAttr('style');
});

})();

!$('.icon-cross').length > 0 || (function () {
$('.icon-cross').on('click',function(){
$(this).parents('.layer-box').hide();
$('.mask-box').hide();
});
})();

!$('.police-confirm').length > 0 || (function () {
 $('.police-confirm').on('click',function(){
    var allframe = $(this).parents('.crew-detailed-info');
    allframe.find('.crew-info-img').show();
    allframe.find('.crew-info-basis').hide();
 });
 $('.title-info').next().hide();
 $('.title-info').toggle(function(){
    $(this).next().show();
    $(this).find('.icon-more').css('transform','rotate(-180deg)');
 },function(){
    $(this).next().hide();
    $(this).find('.icon-more').removeAttr('style');
 });
 $('.crew-coordinate').on('click',function(){
    $('.mask-box,.layer-box').show();
 });
})();

!$('#container-radar').length > 0 || (function () {
var domRadar = document.getElementById("container-radar");
var myChartRadar = echarts.init(domRadar);
var appRadar = {};
option = null;
option = {
radar: {
radius: 70,
name: {
    textStyle: {
        color: '#141414',
        borderRadius: 3,
        padding: [-10, -10]
    }
},
indicator: [
    { name: '年龄', max: 6500},
    { name: '航龄', max: 52000},
    { name: '航程', max: 38000},
    { name: '记分', max: 30000},
    { name: '晋级速率', max: 16000}
],
splitArea: {
    areaStyle: {
        color: ['rgba(0, 103, 244, 0.95)',
        'rgba(0, 103, 244, 0.75)', 'rgba(0, 103, 244, 0.45)',
        'rgba(0, 103, 244, 0.30)', 'rgba(0, 103, 244, 0.15)']
    }
},
axisLine: {
    lineStyle: {
        color: 'rgba(0, 103, 244, 0.18)'
    }
},
splitLine: {
    lineStyle: {
        color: 'rgba(255, 255, 255, 0)'
    }
}
},
series: [{
type: 'radar',
data : [
    {
        value : [4300, 10000, 28000, 3500, 5000],
        symbolSize: 0,
        areaStyle: {
            normal: {
                color: 'rgba(0, 103, 244, 0.42)'
            }
        },
        lineStyle: {
            normal: {
                type: 'solid',
                color:'rgba(0, 103, 244, 0.80)'
            }
        }
    }
]
}]
};;
if (option && typeof option === "object") {
    myChartRadar.setOption(option, true);
}
})();