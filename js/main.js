$('.nav').localScroll();
var $btnCollapse = $('.btn-collapse-expand')
var $box = $('.box');

$btnCollapse.on('click', function () {
    $box.toggleClass('js-collapse');    
});;

var $intro = $('.intro');

$intro.waypoint(function () {
    $intro.addClass('js-intro-animate');
}, { offset: '50%'});

var $gallery = $('.gallery');

$gallery.waypoint(function () {
    $gallery.addClass('js-gallery-animate');
}, { offset: '50%'});

var $contact = $('.contact');

$contact.waypoint(function () {
    $contact.addClass('js-contact-animate');
}, { offset: '50%'});

var $btnShowHide = $('.btn-show-hide');
var $contact = $('.contact');

$btnShowHide.on('click', function () {
   $contact.toggleClass('js-contact-show');
    
});

var $btnBounce = $('.btn-bounce');
var $ministeve = $('.mini-steve');

$btnBounce.on('click', function () {
$ministeve.addClass('js-steve-animate');

});