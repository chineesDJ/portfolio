var main = function () {
  "use strict";
  $(".foto1").mouseover(function() {
  		$(".bigfoto").css("display","block");
  		$(".bigfoto").css("right","15em");
  		$(".f2, .f3, .f4").addClass("onzichtbaar");
	});
  $(".foto1").on("mouseout", function () {
    	$(".bigfoto").css("display","none");
    	$(".f1, .f2, .f3, .f4").removeClass("onzichtbaar");
    	$(".bigfoto").css("right","15em");
    });

  $(".foto5").mouseover(function() {
  		$(".bigfoto").css("display","block");
  		$(".bigfoto").css("right","10em");
  		$(".f1, .f3, .f4").addClass("onzichtbaar");
	});
  $(".foto5").on("mouseout", function () {
    	$(".bigfoto").css("display","none");
    	$(".f1, .f2, .f3, .f4").removeClass("onzichtbaar");
    	$(".bigfoto").css("right","15em");
    });

  $(".foto2").mouseover(function() {
  		$(".bigfoto").css("display","block");
  		$(".bigfoto").css("right","23em");
  		$(".f1, .f2, .f4").addClass("onzichtbaar");
	});
  $(".foto2").on("mouseout", function () {
    	$(".bigfoto").css("display","none");
    	$(".f1, .f2, .f3, .f4").removeClass("onzichtbaar");
    	$(".bigfoto").css("right","15em");
    });

  $(".foto4").mouseover(function() {
  		$(".bigfoto").css("display","block");
  		$(".bigfoto").css("right","-1em");
  		$(".f1, .f2, .f3").addClass("onzichtbaar");
	});
  $(".foto4").on("mouseout", function () {
    	$(".bigfoto").css("display","none");
    	$(".f1, .f2, .f3, .f4").removeClass("onzichtbaar");
    	$(".bigfoto").css("right","15em");
    });
  $(function() {
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
}
$("document").ready(main);