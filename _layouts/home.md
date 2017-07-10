---
layout: default
---
{{ content }}
<section class = 'flex'>
  <ul class="post-list main child">
    {% for post in site.posts limit: 5 %}
      <li>
        {% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
        <p><span class="post-meta">{{ post.date | date: date_format }}</span></p>
        <img src = '{{ site.baseurl }}/assets/posts/{{ post. permalink | remove: '/'}}.jpg' alt = '{{ post. permalink | remove: '/'}}'>
        <h2>
          <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
        </h2>
      </li>
    {% endfor %}
  </ul>
  <div class = 'child third'>
  </div>
</section>
