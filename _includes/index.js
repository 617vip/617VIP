
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
    font.href = 'https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700';
    s = document.getElementsByTagName('link')[0]; 
    s.parentNode.insertBefore(font, s);
  })();


function loadMorePosts() {
  var _this = this;
  var $blogContainer = $("#blogContainer");
  var nextPage = parseInt($blogContainer.attr("data-page")) + 1;
  var totalPages = parseInt($blogContainer.attr("data-totalPages"));

  $(this).addClass("loading");
  
  $.get("/page" + nextPage, function (data) {
    var htmlData = $.parseHTML(data);
    var $articles = $(htmlData).find(".more-list");

    $blogContainer.attr("data-page", nextPage).append($articles);

    if ($blogContainer.attr("data-totalPages") == nextPage) {
      $(".loadMore").remove();
    }

    $(_this).removeClass("loading");
  });  
}

$(".loadMore").click(loadMorePosts);