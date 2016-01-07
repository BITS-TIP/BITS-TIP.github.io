(function($){
  $(function(){
     $('.button-collapse').sideNav({
      menuWidth: 270, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });
    $('.parallax').parallax();
	
  });
  
  var options = [
    {selector: '.mentorSL', offset: 200, callback: 'Materialize.showStaggeredList(".mentorSL")' },
  ];
  Materialize.scrollFire(options);
  
   $(document).ready(function(){
      $('.slider').slider({full_width: true, indicators: false, interval: 2500, height: 200});
   });
   
})(jQuery);