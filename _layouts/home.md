---
layout: default
---
{{ content }}
<section class = 'flex-in'>
{% assign pageLoop = site.posts %}
{% assign pageLoopMore = site.posts offset: 6 %}
{% assign firstPost = pageLoop | first %}
{% if firstPost.image %}  
  {% assign firstImage = firstPost.image %}
{% else %}
  {% assign firstImage = firstPost.permalink | remove: '/' %}
{% endif %}
<style>
@media screen and (min-width: 667px) and (max-width: 832px){
    .featured .main{
      background-image: url({{ site.baseurl }}/assets/posts/{{ firstImage }}.jpg);
      background-size:cover;
      background-repeat:no-repeat;
    }
  }
</style>
<div class = 'hold-featured'>
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
      <img src = '{{ site.baseurl }}/assets/posts/{{ firstImage }}.jpg' alt = '{{ firstImage }}'>
    </a>
    {% include share.md %}
  </div>
</div>
<div class = 'ads-container'>
  <div class = 'desktop'>
    {% include ads/ads-header.md %}
  </div>
  <div class = 'mobile'>
    {% include ads/ads-header-mobile.md %}
  </div>
</div>
<ul class="post-list">
  {% for post in site.posts limit: 4 %}
    <li class = 'flex out post-item'>
      {% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
      {% assign cat = post.categories | first | upcase%}
      {% if post.image %}  
        {% assign image = post.image %}
      {% else %}
        {% assign image = post.permalink | remove: '/' %}
      {% endif %}
      <a class="post-image child main" href="{{ post.url | relative_url }}">
        <img src = '{{ site.baseurl }}/assets/posts/{{ image }}.jpg' alt = '{{ image }}'/>
      </a>
      <div class = 'post-summary child third flex-down'>
        <p class = 'flex out'><span class="post-meta">{{ post.date | date: date_format }}</span><span class = 'right {{ cat | downcase }}'><a href="{{ post.url | relative_url }}"> {{ cat }}</a></span></p>
        <p><h1><a href="{{ post.url | relative_url }}"> {{ post.title | escape }}</a></h1></p>
        <p class = 'post-excerpt'>{{post.excerpt | truncate: 175 | strip_html }}</p>
      </div>
    </li>
  {% endfor %}
</ul>
</section>
<section class = 'flex-in'>
<!-- Load More Posts -->
{% include load-more-posts.md %}
<aside class = 'child third'>
 <div class = 'desktop'>{% include subscribe-sidebar.md %}</div>
  <div id="archives">
  <p class = 'more'>Even More Wicked Silly News</p>
    <div class="archive-group">
    {% for category in site.categories %}
      {% capture category_name %}{{ category | first }}{% endcapture %}
      <div id="#{{ category_name | slugize }}"></div>
      <p></p>
      <a  href="{{site.baseurl}}/category/{{  category_name | downcase}}"   class="right category-head {{ category_name |downcase }}">{{ category_name | upcase}}</a>
      <!-- <a name="{{ category_name | slugize }}"></a> -->
      {% for post in site.categories[category_name] limit : 3 %}
      <div class="archive-item">
        <h3><a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a></h3>
        <p><span class="post-meta">{{ post.date | date: date_format }}</span></p>
      </div>
      {% endfor %}
    </div>
  {% endfor %}
  </div>
</aside>
</section>
<div class = 'ads-container'>
  <div class = 'desktop'>
    {% include ads/ads-footer.md %}
  </div>
  <div class = 'mobile'>
    {% include ads/ads-footer-mobile.md %}
  </div>
</div>