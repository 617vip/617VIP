---
layout: default
permalink: /category/tech/
title: Tech
---
<section class = 'flex'>
<ul class="post-list child main">
  {% for post in site.categories.Tech  limit: 5%}
    <li>
      <p><span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span></p>
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
