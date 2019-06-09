$(document).ready(function () {

  $(function () {
    var $el,
      leftPos,
      newWidth,
      $mainNav = $(".navbar-nav");

    $mainNav.append("<li id='magic-line'></li>");
    var $magicLine = $("#magic-line");

    $magicLine
      .width($(".active").width())
      .css("left", $(".active a").position().left)
      .data("origLeft", $magicLine.position().left)
      .data("origWidth", $magicLine.width());

    $(".navbar-nav li a").hover(
      function () {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.parent().width();
        $magicLine.stop().animate({
          left: leftPos,
          width: newWidth
        });
      },
      function () {
        $magicLine.stop().animate({
          left: $magicLine.data("origLeft"),
          width: $magicLine.data("origWidth")
        });
      }
    );
  });
})

function toggleDropdown(e) {
  const _d = $(e.target).closest('.dropdown'),
    _m = $('.dropdown-menu', _d);
  setTimeout(function () {
    const shouldOpen = e.type !== 'click' && _d.is(':hover');
    _m.toggleClass('show', shouldOpen);
    _d.toggleClass('show', shouldOpen);
    $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
  }, e.type === 'mouseleave' ? 300 : 0);
}

$('body')
  .on('mouseenter mouseleave', '.dropdown', toggleDropdown)
  .on('click', '.dropdown-menu a', toggleDropdown);
