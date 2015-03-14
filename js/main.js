var $btnCollapse = $('.btn-collapse-expand')
var $box = $('.box');

$btnCollapse.on('click', function () {
    $box.toggleClass('js-collapse');
    
});