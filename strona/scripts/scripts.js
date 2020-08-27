$(function () {
    $(".toggle").on("click", function () {
        if ($("li").hasClass("active")) {
            $("li").removeAttr("class") && $(".toggle").removeClass("active");
        } else {
            $("li").addClass("active") && $(".toggle").addClass("active");
        }
    });
});

$(document).ready(function() {
	var NavY = $('header').offset().top;
	 
	var stickyNav = function(){
	var ScrollY = $(window).scrollTop();
		  
	if (ScrollY > NavY) { 
		$('header').addClass('sticky');
	} else {
		$('header').removeClass('sticky'); 
	}
	};
	 
	stickyNav();
	 
	$(window).scroll(function() {
		stickyNav();
	});
});

function cookiesAccepted() {
    document.cookie = "cookies=accepted; max-age=2592000; path=/";
    cookiesClose();
};

function cookiesClose() {
    $("#cookies").fadeOut(400);
};
