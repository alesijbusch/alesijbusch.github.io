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

$(document).ready(function() {
  $('.search-box').magnificPopup();
  $('#breadcrumbs_wrap').append( $('.br_append') );

});
