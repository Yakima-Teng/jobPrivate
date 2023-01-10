$(function() {
	gundongTxt($(".contanted-index .main-info"), 1000, 5);
	gundongTxt($(".contanted-control .module-left .main-info"), 2000, 4);
	gundongTxt($(".contanted-control .module-center .main-info"), 3000, 5);
	gundongTxt($(".contanted-farm .module-left .main-info"), 2000, 4);
	gundongTxt($(".contanted-farm .module-center .main-info"), 3000, 5);
	gundongTxt($(".contanted-each .info-list-box"), 3000, 5 );

	// cctv
	// $('.contanted-cctv .list-box')
	// 	.find('.second-list')
	// 	.on('click', 
	// 	function(){
	// 		let videoLenght = $('.video-box.show').length;


	// 		$('.video-box')
	// 			.eq(0)
	// 			.addClass('show')
	// 			.show();
	// 		// console.log(videoLenght);
	// 	});
	$('.contanted-cctv .main-video')
		.find('.btn-close')
		.on('click', 
		function(){
			$(this)
				.parent()
				.hide()
				.removeClass('show');
			let videoLenght = $('.video-box.show').length;
			if( videoLenght == 1 ){
				$('.video-box.show')
					.css({
						width:'100%',
						margin:'0'
					});
			}
		});



	// 二级菜单
	$('.page-contanted').find('.frist-list').on('click', function(){
		if( $(this).parent().is('.show') ){
			$(this)
			.nextAll('.second-list')
			.hide()
			.end()
			.parent().removeClass('show');
		}else{
			$(this)
			.nextAll('.second-list')
			.show()
			.end()
			.parent().addClass('show');
		}
	});
	// link
	$('.btn-back-head').on('click', function(){
		window.history.go(-1);
	});
	$('.contanted-control .list-cctv, .list-aqxc').find('.list').on('click', function(){
		window.location.href='/data-dayuzhen/cctv.html'
	});
	// video-layer
	$('.contanted-farm .list-cctv')
		.find('.list')
		.on('click', 
			function(){
				if( !$(this).is('.more') ){
					$('.page-mask,.layer-video')
						.show();
				}
			});
	$('.list-cctv')
		.find('.second-list')
			.on('click', 
			function(){
				$('.page-mask,.layer-video')
					.show();
			});
	// layer
	$('.layer-video').find('.btn-close').on('click', function(){
		$(this).parents('.layer-video').hide();
		$('.page-mask').hide();
	});
	// map-nav
	$('.map-nav').find('.nav').on('click', function(){
		let index = $(this).index();
		$(this).addClass('cur').siblings().removeClass('cur');
		if ( index == 0 ){
			$(this).parents('.module-center').find('.a_link').show()
			$('.module-center-map').find('img').hide();
		}else{
			$('.module-center-map').find('img').show().attr({src:'./images/img-08-'+ index++ +'.png'});
			$(this).parents('.module-center').find('.a_link').hide()
		}
		

	});
	// $('.map-nav').find('.nav').eq(1).on('click', function(){
	// 	$('.module-center-map').show().find('img').attr({src:'./images/img-08-1.png'});
	// });
	// $('.map-nav').find('.nav').eq(2).on('click', function(){
	// 	$('.module-center-map').show().find('img').attr({src:'./images/img-08-2.png'});
	// });
	// $('.map-nav').find('.nav').eq(3).on('click', function(){
	// 	$('.module-center-map').show().find('img').attr({src:'./images/img-08-3.png'});
	// });
	// $('.map-nav').find('.nav').eq(4).on('click', function(){
	// 	$('.module-center-map').show().find('img').attr({src:'./images/img-08-4.png'});
	// });
	// temp
	$('.contanted-index .module-center').on('click', function(){
		// window.location.href='/data-dayuzhen/each.html'
	});
	
});

function gundongTxt (divBox, time, listNum) {
	let listLength = $(divBox).find('li').length;
	if (listLength > listNum){
		let $this = divBox;
		let scrollTimer;
		$this.hover(function() {
			clearInterval(scrollTimer);
		}, function() {
			scrollTimer = setInterval(function() {
				scrollNews($this);
			}, time);
		}).trigger("mouseleave");

		function scrollNews(obj) {
			var $self = obj.find("ul");
			var lineHeight = $self.find("li:first").height(); 
			$self.animate({
				"marginTop": -lineHeight + "px"
			}, 600, function() {
				$self.css({
					marginTop: 0
				}).find("li:first").appendTo($self);
			})
		}
	}
}