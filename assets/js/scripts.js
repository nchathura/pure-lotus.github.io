$(function() {
  $('#slides').carousel({
    interval: 5000,
    cycle: 'true'
  });
});

$('.carousel').carousel();

$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});