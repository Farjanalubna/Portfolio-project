// init Isotope
var $grid = $('.grid').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
/* count to plugin */
        $('.timer').countTo();

 new WOW().init();
 $("#sticker").sticky({topSpacing:0});

window.onload=function(){
	$('.circleGraphic1').circleGraphic();
	$('.circleGraphic2').circleGraphic({'color':'#63BFF1'});
	$('.circleGraphic3').circleGraphic({'color':'#63BFF1'});

	$('.circleGraphic4').circleGraphic({'color':'#63BFF1'});

}
$('.sadiaanimation').textillate({ in : {
            effect: 'fadeInRight',
            delayScale: 5
        },
        out: {
            effect: 'rotateOut',
            sync: true
        },
        loop: true
    });

