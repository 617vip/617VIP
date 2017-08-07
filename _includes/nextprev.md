<div class="previous-next flex">
  <a class="previous-post half" href="{{ page.previous.url | relative_url }}">
  {% if page.previous.url %}
    <i class="icon icon-left" aria-hidden="true"></i> {{'Previous News ' | upcase}}
  {% endif %}
  </a>
  <a class="next-post half right" href="{{ page.next.url | relative_url}}">
  {% if page.next.url %}
    <span>{{ ' Next News' | upcase }} <i class="icon icon-right" aria-hidden="true"></i></span>
  {% endif %}
  </a>
</div>
<div class = 'flex move'>
  <a href = '{{ page.previous.url | relative_url }}' class = 'duo flex child'>
  {% if page.previous.url %}
    {% if page.previous.image %}  
      {% assign prevImage = page.previous.image %}
    {% else %}
      {% assign prevImage = page.previous.permalink | remove: '/' %}
    {% endif %}
    <div class = 'half '><img src = '{{ site.baseurl }}/assets/posts/{{ prevImage }}.jpg' alt = '{{ prevImage }}'></div>
    <div class = 'half'><h5>{{ page.previous.title }}</h5></div>
  {% endif %}
  </a>
  <a href = '{{ page.next.url| relative_url }}' class = 'duo flex child'>
  {% if page.next.url %}
    {% if page.next.image %}  
      {% assign nextImage = page.next.image %}
    {% else %}
      {% assign nextImage = page.next.permalink | remove: '/' %}
    {% endif %}
    <div class = 'half '><img src = '{{ site.baseurl }}/assets/posts/{{ nextImage }}.jpg' alt = '{{ nextImage }}'></div>
    <div class = 'half'><h5>{{ page.next.title }}</h5></div>
  {% endif %}
  </a>
</div>