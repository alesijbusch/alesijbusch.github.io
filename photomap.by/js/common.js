$(function() {
	$(".city-input").keyup(function() {
	  filter(this);
	});
	
	function filter(element) {
	  var value = $(element).val().toLowerCase();
	  $("[data-filter]").each(function () {
	    var $this = $(this),
	    lower = $this.data("filter").toLowerCase();
	    if (lower.indexOf(value) > -1) {
	      $this.show();
	    } else {
	      $this.hide();
	    }
	  });
	}

	$('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
              $('html,body').animate({
                  scrollTop: target.offset().top
              }, 1000);
              return false;
          }
      }
  	});
});


jQuery('.btn_search').on("click", function(){
	if(jQuery(this).hasClass('active')) {
		jQuery(this).removeClass('active');
		jQuery('.search-popup').fadeOut();
	} else {
		jQuery(this).addClass('active');
		jQuery('.search-popup').fadeIn();
	}
});

jQuery('.search-popup .icon-close').on("click", function(){
	jQuery('.btn_search').removeClass('active');
	jQuery('.search-popup').fadeOut();
});

$(".menu_search").click(function(){
  $("#menu-navigation").toggleClass("expand");
});



var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
});
$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});


$("[data-fancybox]").fancybox({
  buttons : [
    "download",
    'fullScreen',
    'close'
  ]
});


