---
layout: default
---
{{ content }}
<section class = 'flex-in'>
{% assign pageLoop = site.posts %}
{% assign firstPost = pageLoop | first %}
<div class = 'flex featured'>
  <div class = 'child third flex'>
     <div class = 'catch items'>
      <div class = 'left'>{{ 'Wicked story' | upcase }}</div>
      <div class = 'right'>{{ 'of the day' | upcase }}</div>
     </div>
     <a  href = '{{ firstPost.url | relative_url }}' class = 'title {{ firstPost.categories | first | downcase }} items'>
      <h1>{{ firstPost.title }}</h1>
      <span>{{ firstPost.categories | first | upcase }} &raquo;</span>
     </a>
  </div>
  <a href = '{{ firstPost.url | relative_url }}' class = 'child main '>
     <img src = '{{ site.baseurl }}/assets/posts/{{ firstPost.permalink | remove: '/'}}.jpg' alt = '{{ firstPost.permalink | remove: '/' }}'>
  </a>
  {% include share.md %}
</div>
{% include ads.md %}
<ul class="post-list">
  {% for post in site.posts limit: 5 %}
    <li class = 'flex out post-item'>
      {% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
      {% assign cat = post.categories | first | upcase%}
      <a class="post-image child main" href="{{ post.url | relative_url }}">
        <img src = '{{ site.baseurl }}/assets/posts/{{ post. permalink | remove: '/'}}.jpg' alt = '{{ post. permalink | remove: '/'}}'/>
      </a>
      <a class = 'post-summary child third flex-down' href="{{ post.url | relative_url }}">
        <div class = 'flex out'><span class="post-meta">{{ post.date | date: date_format }}</span><span class = 'right {{ cat | downcase }}'>{{ cat }}</span></div>
        <h1>{{ post.title | escape }}</h1>
        <p class = 'post-excerpt'>{{post.excerpt | truncate: 175 | strip_html }}</p>
      </a>
    </li>
  {% endfor %}
</ul>s
</section>
<section class = 'flex-in'>
<!-- Load More Posts -->
{% include load-more-posts.md %}

<div class = 'child third'>
  <div id="archives">
  <p class = 'more'>Even More Wicked</p>
    {% for category in site.categories %}
    <div class="archive-group">
      {% capture category_name %}{{ category | first }}{% endcapture %}
      <div id="#{{ category_name | slugize }}"></div>
      <p></p>
      <a  href="{{site.baseurl}}/category/{{  category_name | downcase}}"><h3 class="right category-head {{ category_name |downcase }}">{{ category_name | upcase}}</h3></a>
      <a name="{{ category_name | slugize }}"></a>
      {% for post in site.categories[category_name] limit : 3 %}
      <div class="archive-item">
        <h3><a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a></h3>
        <p><span class="post-meta">{{ post.date | date: date_format }}</span></p>
      </div>
      {% endfor %}
    </div>
  {% endfor %}
  </div>
</div>
</section>
