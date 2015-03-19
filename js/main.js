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