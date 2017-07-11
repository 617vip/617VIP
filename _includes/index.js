
(function() {
  $('.toggle-menu').on('click', function() {
    $(this).toggleClass('fa-bars').toggleClass('fa-close');
    $('.top-header nav').toggleClass('toggled');
  });
})();

(function() {
    var font, s;
    font = document.createElement('link');
    font.type = 'text/css'; 
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,700';
    s = document.getElementsByTagName('link')[0]; 
    s.parentNode.insertBefore(font, s);
  })();