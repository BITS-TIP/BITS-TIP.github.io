(function($){
  $(function(){
  
    $('.navbar-fixed').css('height', $(window).height());
	$('.navbar-fixed .parallax-container').css('height', $(window).height());
	
    var s = "rgba(0, 0, 0, 0)";
	$('.top-bar').css('background-color', s);
     $('.button-collapse').sideNav({
      menuWidth: 270, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });
    $('.parallax').parallax();
	$('.navbar-fixed').css('height', $(window).height());
	$('.navbar-fixed .parallax-container').css('height', $(window).height());
	$('.black img').css('opacity', 0.5);
  });
  
  $(window).scroll(function(i){
    var scrollVar = $(window).scrollTop();
	scrollVar = scrollVar/300;
	var str = scrollVar.toString();
	var s = "rgba(38, 50, 56, " + str + ")";
    $('.top-bar').css('background-color', s);
	$('.black img').css('opacity', (0.2*scrollVar + 0.5 > 0.8) ? 0.8 : 0.2*scrollVar + 0.5);
  });
  
  $(window).on('resize', function(){
    $('.navbar-fixed').css('height', $(window).height());
	$('.navbar-fixed .parallax-container').css('height', $(window).height());
  });
  
   var options = [
    {selector: '.mentorSL', offset: 200, callback: 'Materialize.showStaggeredList(".mentorSL")' },
  ];
  Materialize.scrollFire(options);

})(jQuery);