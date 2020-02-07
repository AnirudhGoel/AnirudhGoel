/*
Responsiveness for Wow animation
*/
function changeAnimation() {
	var width = $(window).width();
	if(width < 768) {
		$(".wow").removeClass("fadeInUp fadeInLeft fadeInRight fadeIn fadeInUp").addClass("fadeInUp");
	}
}
// Call function on page load
changeAnimation();
// Call WOW.js
new WOW().init();



/*
Animation for Navbar color and size
*/ 
$(window).on("scroll load", function() {
	if ($(document).scrollTop() > 0) {
		$('nav').addClass('shrinkNav');
	} else {
		$('nav').removeClass('shrinkNav');
	}
});

function autoScroll(sectionClass) {
	$('html, body').animate({
		scrollTop: $("." + sectionClass).offset().top
	}, 750);
}



/*
Loader animation
*/
function showLoader()
{
    $(".loader").fadeIn("slow");
}
function hideLoader()
{
    $(".loader").fadeOut("slow");
}



/*
Vivus for name animation
*/
var viv = new Vivus('vivus-name', {
	type: 'delayed',
	duration: 150,
	file: '../img/Anirudh Goel Text.svg',
	pathTimingFunction: Vivus.EASE
}, mycallback);

function mycallback() {
	viv.stop()
}



hideLoader();




console.log("%cHello! You have opened the console of my website.", "color: indigo");