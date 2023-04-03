require.config({
	urlArgs: "v=" + (new Date()).getTime(), //上线时请去掉
	paths: {
		jquery: '../common/js/jquery-1.9.1.min'
	},
	shim: {
		jquery: {
				exports: 'jquery'
		}
	}
});
require(['jquery'], function() {
	__funcList && __funcList.length && $.map(__funcList, function(t) {
			"function" === typeof t && t();
	});



// 频道页头部导航选中
!$('.common-nav').length || (function() {
	let nav = $('.common-nav .nav-list').children();
	if ($('.page-channel-index').length) {
		nav.eq(0).addClass('cur').siblings('li').removeClass('cur');
	} else if ($('.page-channel-about').length) {
		nav.eq(1).addClass('cur').siblings('li').removeClass('cur');
	} else if ($('.page-channel-notice').length) {
		nav.eq(2).addClass('cur').siblings('li').removeClass('cur');
	} else if ($('.page-channel-offer').length) {
		nav.eq(3).addClass('cur').siblings('li').removeClass('cur');
	} else if ($('.page-channel-contact').length) {
		nav.eq(4).addClass('cur').siblings('li').removeClass('cur');
	} 
})();


// //返回顶部
// $('.common-menu .menu-list').eq(2).on('click', function () {
// 	$('body,html').animate({
// 			scrollTop: 0
// 	}, 500);
// });


});



// 号码筛选
function saixuan(mobile){
var reg = /^(1[3|4|5|7|8])[\d]{9}$/g;
if(!(reg.test(mobile.val()))){
	return false;
}else{
	return true;
}
}
function cutDown(curObj){
	let j = 60,
		obj = curObj.hide().siblings('.time').show().find('.s');
	obj.html(j);
	timer = window.setInterval(function() {
		j--;
		if (j == 0) {
			j = 60;
			window.clearInterval(timer);
			curObj.show().siblings('.time').hide();
		}
		obj.html(j);
	}, 1000);
};