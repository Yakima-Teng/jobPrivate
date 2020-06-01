!$('.nav-tab').length > 0 || (function () {
$('.main-department').show();
$('.nav-tab').find('.nav').on('click',function(){
	var navIndex = $(this).index();
	$(this).addClass('cur').siblings().removeClass('cur')
	$('.page-main').eq(navIndex).show().siblings('.page-main').hide();
});
})();

!$('.inp-search').length > 0 || (function () {
$('.inp-search').on('focus',function(){
	$('.search-box').find('.icon-close').show();
});
$('.inp-search').on('blur',function(){
	if($('.inp-search').val() == ''){
		$('.search-box').find('.icon-close').hide();
	};
});
$('.search-box').find('.icon-close').on('click',function(){
	$('.inp-search').val('');
	$(this).hide();
});
})();

!$('.main-allclassification').length > 0 || (function () {
$('.nav-bar').find('a').on('click',function(){
	$(this).addClass('cur').siblings().removeClass('cur')
});
})();

!$('.department-list').length > 0 || (function () {
$('.department-btn').on('click',function(){
	if( $(this).hasClass('cur') ){
		$(this).removeClass('cur').next().hide()
	}else{
		$(this).addClass('cur').siblings().removeClass('cur').end().next().show();
		$(this).parent().siblings().find('.main').hide().end().find('.department-btn').removeClass('cur');
	}
});
})();

!$('.layer-tips').length > 0 || (function () {
$('.btn-close-layer').on('click',function(){
	$('.layer-mask').hide();
	$(this).parents('.layer-box').hide();
});
$('.icon-tips').on('click',function(){
	$('.layer-mask,.layer-tips').show();
})
})();


!$('.layer-address').length > 0 || (function () {
$('.layer-address').find('.icon-close').on('click',function(){
	$('.layer-mask').hide();
	$(this).parents('.layer-box').hide();
});
})();


!$('.applicant-info').length > 0 || (function () {
$('.applicant-info').find('.street').on('click',function(){
	$('.layer-mask,.layer-address').show();
});
})();

!$('.personnel-box').length > 0 || (function () {
	$('.add-member').on('click',function(){
		var perLeng = $('.personnel').length;
		$('.personnel-box').append(
			'<div class="personnel">'
			+ '<h3>人员【'+ (perLeng + 1) +'】<i class="icon icon-delete"></i></h3>'
			+ '<div class="list">'
			+ 	'<p class="title">姓名</p>'
			+	 	'<p class="name"><input type="text" placeholder="请输入" /></p>'
			+ '</div>'
			+ '<div class="list">'
			+		'<p class="title">成员身份证</p>'
			+		'<p class="number-id"><input type="text" placeholder="请输入" /></p>'
			+ '</div>'
			+ '<div class="list">'
			+	'<p class="title">与申请人关系</p>'
			+	'<p class="relationship">'
			+		'<select name="" id="" class="select-relationship" >'
			+			'<option value="">父母</option>'
			+			'<option value="">子女</option>'
			+		'</select>'
			+	'</p>'
			+	'</div>'
			+ '</div>'
		);
		var perLeng = $('.personnel').length;
		console.log(perLeng);
	});
	
	$('.personnel-box').on('click','.icon-delete',function(){
		$(this).parents('.personnel').remove();
	});
})();

