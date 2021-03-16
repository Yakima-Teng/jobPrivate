$(function(){
$('.m-nav-more').bind('click', function(){
  $('.page-header').toggleClass('nav-active');
  console.log('click')
})

//index-banner
!$('.index-banner').length > 0 || (function () {
$('.flexslider').flexslider({
  animation: "fade",
  slideshowSpeed: 11000,
});
})();

!$('.index-product').length > 0 || (function () {
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  centerPadding: '0',
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1120,
      settings: {
        slidesToShow: 3
      }
    }
  ]
});
})();

!$('.details').length > 0 || (function () {
//details
$('.details').find('span').bind('mouseover', function(){
  var indexP = $(this).index(indexP);
  //$(this).css('borderColor','#f00').siblings().removeAttr('style');
  $('.details-img').find('span').eq(indexP).show().siblings('span').hide();
})
})();

!$('.recommend-list-box').length > 0 || (function () {
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: '0',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });
})();

!$('.product-main').length > 0 || (function () {
  $('.product-img').bind('mouseover',function(){
    
    $(this).parent().addClass('active');
  });
  $('.product-mast').bind('mouseleave',function(){
    $(this).parent().removeClass('active');
  });
})();


var bodyWidth = $(document).width();

!$('.cg-banner').length > 0 || (function () {
if( bodyWidth <= 1120 ){
  $( '.cg-banner').attr('style','background-image: url("'+ mBanner+ '")' );
}
})();


!$('.flexslider').length > 0 || (function () {

if( bodyWidth <= 1120 ){

  var arr = [];
  for(let i in mBanners){
    //console.log(mBanners[i].id + " " + mBanners[i].picture);
    arr.push(mBanners[i].picture);
  }
  //console.log(arr);
  $( '.flexslider li').each(function(){
    var indexLi = $(this).index(indexLi);
    //console.log(indexLi);
    $(this).find('img').attr('src', arr[indexLi]);
  });

}

})();
});
