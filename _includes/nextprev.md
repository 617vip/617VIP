<div class="previous-next flex">
  <a class="previous-post half" href="{{ page.previous.url | relative_url }}">
  {% if page.previous.url %}
    <i class="fa fa-chevron-left" aria-hidden="true"></i> {{'Previous News ' | upcase}}
  {% endif %}
  </a>
  <a class="next-post half right" href="{{ page.next.url | relative_url}}">
  {% if page.next.url %}
    <span>{{ ' Next News' | upcase }} <i class="fa fa-chevron-right" aria-hidden="true"></i></span>
  {% endif %}
  </a>
</div>
<div class = 'flex move'>
  <a href = '{{ page.previous.url | relative_url }}' class = 'duo flex child'>
  {% if page.previous.url %}
    <div class = 'half '><img src = '{{ site.baseurl }}/assets/posts/{{ page.previous.permalink | remove: '/'}}.jpg' alt = '{{ page.previous.permalink | remove: '/'}}'></div>
    <div class = 'half'><h5>{{ page.previous.title }}</h5></div>
  {% endif %}
  </a>
  <a href = '{{ page.next.url| relative_url }}' class = 'duo flex child'>
  {% if page.next.url %}
    <div class = 'half '><img src = '{{ site.baseurl }}/assets/posts/{{ page.next.permalink | remove: '/'}}.jpg' alt = '{{ page.next.permalink | remove: '/'}}'></div>
    <div class = 'half'><h5>{{ page.next.title }}</h5></div>
  {% endif %}
  </a>
</div>