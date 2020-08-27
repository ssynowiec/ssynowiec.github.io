// var toggleButton = document.getElementsByClassName("toggle")[0];
// var menuLinkClass = document.getElementsByClassName("menu-link");
// var	liTag = document.getElementsByTagName("li");

// toggleButton.onclick = function toggleMenu() {

// 	for (var i = menuLinkClass.length; i >= 0; i--) {
// 		// menuLinkClass[i].style.display = "block";
// 		liTag[i].style.display = "block";
// 	}

// };

// toggleButton.onblur = function toggleMenu() {

// 	for (var i = menuLinkClass.length; i >= 0; i--) {
// 		// menuLinkClass[i].style.color = "none";
// 		liTag[i].style.display = "none";
// 	}
// 	document.getElementsByTagName("li")[0].style.display = "block";
// };

// toggleButton.onclick = function toggleMenu() {

// 	for (var i = menuLinkClass.length; i >= 0; i--) {
// 		// menuLinkClass[i].style.display = "block";
// 		liTag[i].classList.add("active");
// 	}
// };

// toggleButton.onblur = function toggleMenu() {

// 	for (var i = menuLinkClass.length; i >= 0; i--) {
// 		// menuLinkClass[i].style.color = "none";
// 		// liTag[i].classList.remove("active");
// 		liTag[i].removeAttribute("class");
// 	}
// };

/*Add class*/
$(function () {
    $(".toggle").on("click", function () {
        if ($("li").hasClass("active")) {
            $("li").removeAttr("class") && $(".toggle").removeClass("active");
        } else {
            $("li").addClass("active") && $(".toggle").addClass("active");
        }
    });
});


/*Sticky menu*/
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


$(function(){

    $('svg.radial-progress').each(function( index, value ) { 
        $(this).find($('circle.complete')).removeAttr( 'style' );
    });

    $(window).scroll(function(){
        $('svg.radial-progress').each(function( index, value ) { 
          
            if ( 
                $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
                $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
            ) {

                percent = $(value).data('percentage');

                radius = $(this).find($('circle.complete')).attr('r');

                circumference = 2 * Math.PI * radius;
                // Get stroke-dashoffset value based on the percentage of the circumference
                strokeDashOffset = circumference - ((percent * circumference) / 100);
                // Transition progress for 1.25 seconds
                $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
            }
        });
    }).trigger('scroll');

});

function myFunction() {
    const inputPassword = document.getElementById("password");
        if (inputPassword.type === "password") {
            inputPassword.type = "text";
        } else {
            inputPassword.type = "password";
        }
};

$(function () {
    $(".far").on("click", function () {
        if ($(".far").hasClass("fa-eye")) {
            $(".far").addClass("fa-eye-slash") && $(".far").removeClass("fa-eye");
        } else {
            $("i").addClass("fa-eye") && $(".far").removeClass("fa-eye-slash");
        }
    });
});

function cookiesAccepted() {
    document.cookie = "cookies=accepted; max-age=2592000; path=/";
    cookiesClose();
};

function cookiesClose() {
    $("#cookies").fadeOut(400);
};
