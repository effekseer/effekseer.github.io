
$(function () {
  $('.menu-trigger').on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('.menunav_allset').slideUp('fast', function() { $('.menunav_allset').removeAttr('style'); });
    } else {
      $(this).addClass('active');
      $('.menunav_allset').slideDown('fast');
    }
  });
});


$(function () {
  let navset = $('.languagenav');
  $('li', navset)
    .mouseover(function (e) {
      $('ul', this).stop().slideDown('fast');
    })
    .mouseout(function (e) {
      $('ul', this).stop().slideUp('fast');
    });
});
