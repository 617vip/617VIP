---
layout: default
---
{{content}}
{% assign pageLoop = site.categories.[page.title] %}
<section class = 'flex-in'>
{% assign firstPost = pageLoop | first %}
<div class = 'flex featured'>
  <div class = 'child third flex'>
     <div class = 'catch items child'>
      <div class = 'left'>{{ 'Wicked story' | upcase }}</div>
      <div class = 'right'>{{ 'of the day' | upcase }}</div>
     </div>
     <a  href = '{{ firstPost.url | relative_url }}' class = 'title {{ page.title | downcase }} items child flex'>
      <h1>{{ firstPost.title }}</h1>
      <span>{{ page.title | upcase }} &raquo;</span>
     </a>
  </div>
  <a href = '{{ firstPost.url | relative_url }}' class = 'child main '>
     <img src = '{{ site.baseurl }}/assets/posts/{{ firstPost.permalink | remove: '/'}}.jpg' alt = '{{ firstPost.permalink | remove: '/' }}'>
  </a>
  {% include share.md %}
</div>

<ul class="post-list">
  {% for post in pageLoop  limit: 5 %}
    <li class = 'flex out post-item'>  
      {% assign date_format = "%b %-d, %Y" %}
      {% assign cat = page.title | upcase%}
      <a class="post-image child main" href="{{ post.url | relative_url }}">
        <img src = '{{ site.baseurl }}/assets/posts/{{ post. permalink | remove: '/'}}.jpg' alt = '{{ post. permalink | remove: '/'}}'>
      </a>
      <a class = 'post-summary child third flex-down' href="{{ post.url | relative_url }}">
        <p class = 'flex out'><span class="post-meta">{{ post.date | date: date_format }}</span><span class = 'right {{ cat | downcase }}'>{{ cat }}</span></p>
        <p><h1>{{ post.title | escape }}</h1></p>
        <p class = 'post-excerpt'>{{post.excerpt | truncate: 175 | strip_html }}</p>
      </a>
    </li>
    {% endfor %}
  </ul>
  <ul class = 'child main'>
  </ul>
  <div class = 'child third'>
    <div id="archives">
    <p class = 'more'>Even More Wicked</p>
    {% for category in site.categories %}
      <div class="archive-group">
        {% capture category_name %}{{ category | first }}{% endcapture %}
        {% if category_name != page.title %}
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
        {% endif %}
      </div>
    {% endfor %}
    </div>
  </div>
</section>
