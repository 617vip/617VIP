<div class="previous-next flex">
  {% if page.previous.url %}
    <a class="previous-post half" href="{{page.previous.url}}"><i class="fa fa-chevron-left" aria-hidden="true"></i> {{'Previous News ' | upcase}}</a>
  {% endif %}
  {% if page.next.url %}
    <a class="next-post half" href="{{page.next.url}}">{{ ' Next News' | upcase }} <i class="fa fa-chevron-right" aria-hidden="true"></i></a>
  {% endif %}
</div>