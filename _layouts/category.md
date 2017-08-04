---
layout: default
---
{{content}}
{% assign pageLoop = site.categories[page.title] %}
{% assign pageLoopMore = pageLoop %}
<section class = 'flex-in'>
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
      <img src = '{{ site.baseurl }}/assets/posts/{{ firstImage }}.jpg' alt = '{{ firstImage }}'>
    </a>
  </div>
    {% include share.md %}
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
  {% for post in pageLoop  limit: 4 %}
    <li class = 'flex out post-item'>  
      {% assign date_format = "%b %-d, %Y" %}
      {% assign cat = page.title | upcase%}
      {% if post.image %}  
        {% assign image = post.image %}
      {% else %}
        {% assign image = post.permalink | remove: '/' %}
      {% endif %}
      <a class="post-image child main" href="{{ post.url | relative_url }}">
        <img src = '{{ site.baseurl }}/assets/posts/{{ image }}.jpg' alt = '{{ image }}'>
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
  {% include load-more-posts.md %}
  <aside class = 'child third'>
  <div class = 'desktop'>{% include subscribe-sidebar.md %}</div>
    <div id="archives">
    <p class = 'more'>Even More Wicked Silly News</p>
    {% for category in site.categories %}
      <div class="archive-group">
        {% capture category_name %}{{ category | first }}{% endcapture %}
        {% if category_name != page.title %}
        <div id="#{{ category_name | slugize }}"></div>
        <a  href="{{site.baseurl}}/category/{{  category_name | downcase }}" class="right category-head {{ category_name | downcase }} mark">{{ category_name | upcase}}</a>
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
  </aside >
</section>
<div class = 'ads-container'>
  <div class = 'desktop'>
    {% include ads/ads-footer.md %}
  </div>
  <div class = 'mobile'>
    {% include ads/ads-footer-mobile.md %}
  </div>
</div>