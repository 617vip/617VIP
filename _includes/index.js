
(function() {
  $('.toggle-menu').on('click', function() {
    $(this).toggleClass('icon-bars').toggleClass('icon-close');
    $('.top-header nav').toggleClass('toggled');
  });

  $('.browse').on('click', function() {
     $('.expands').toggleClass('expanded');
     $('.browse .icon').toggleClass('icon-arrow-down').toggleClass('icon-arrow-up');
  });
})();

(function() {
    var font,  s;
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
  
  $.get("{{ site.baseurl }}/page" + nextPage +'/', function (data) {
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

(function contactUs() {
 
  function  notifyUser(notification, mark) {
  var $casing = $('#notification');
  $('.input-field').val('');
  $casing.append(notification);
  $casing.addClass(mark).addClass('showing');
  function  removeNotification() {
     $casing.find('.alert').remove(); 
     $casing.removeClass(mark).removeClass('showing');
      console.log('perfecto');
  }

  setTimeout( removeNotification , 7000);

  }

  var $contactForm = $('#contact-form');
  var $formWidget = $('form-widget');
  $contactForm.submit(function(e) {
    e.preventDefault();

    var $form = $(this);
    $.post($form.attr('action'), $form.serialize()).then(function() {

    }).done(function() {

        $contactForm.find('.alert-loading').remove();

        var $notification = `
          <div class="alert alert-success">
            Thanks, We'll get back to you Asap
          </div>`;

        notifyUser($notification, 'success');

      }).fail(function() {

        $contactForm.find('.alert-loading').remove();

        var $notification = `
          <div class="alert alert-error">
            Ops, there was an error.
          </div>` ;

        notifyUser(notification, 'error');
        
      });
  });
})();

