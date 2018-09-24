// スムーススクロール（ページ内リンク）
$(document).on('click', 'a[href^="#"]', function (e) {
  var $self = $(this);
  var $target = $($self.attr('href'));
  // var $lnav = $('#lnav');
  var dist = 0;

  e.preventDefault();

  if ($target.length > 0) {
    dist = $target.offset().top;
  }

  // if ($lnav.length > 0) {
  //   if ($lnav.hasClass('fixed')) {
  //     dist -= $lnav.outerHeight();
  //   } else {
  //     dist -= $lnav.outerHeight() * 2;
  //   }

  //   dist -= 30;
  // }

  dist = dist < 0 ? 0 : dist;

  $('html, body').animate({
    scrollTop: dist
  });
});