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

var $btnCollapse2 = $('.btn-collapse-expand-2')
var $box2 = $('.box2');

$btnCollapse2.on('click', function () {
    $box2.toggleClass('js-collapse-2');    
});;