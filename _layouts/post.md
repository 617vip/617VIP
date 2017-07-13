---
layout: default
---
<section class = 'flex-in'>
  <article class="post child main" itemscope itemtype="http://schema.org/BlogPosting">
    <section class="post-header">
      <p class="post-meta">
        <time datetime="{{ page.date | date_to_xmlschema }}" itemprop="datePublished">
          {% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
          {{ page.date | date: date_format }}
        </time>
        {% if page.author %}
          • <span itemprop="author" itemscope itemtype="http://schema.org/Person"><span itemprop="name">{{ page.author }}</span></span>
        {% endif %}
      </p>
      <img src = '{{ site.baseurl }}/assets/posts/{{ page. permalink | remove: '/'}}.jpg' alt = '{{ page. permalink | remove: '/'}}'>
      <h1 class="post-title" itemprop="name headline">{{ page.title | escape }}</h1>
    </section>
    <div class="post-content" itemprop="articleBody">
      {{ content }}
    </div>
    <div class = 'meta-tags'>
      {% for tag in page.tags %}
          <a href = '/'>{{ tag }}</a>
      {% endfor %}
    </div>
    {% include nextprev.md %}
    {% if site.disqus.shortname %}
      {% include disqus_comments.md %}
    {% endif %}
  </article>
  <aside class = ' child third'>
   <div id="archives">
    <p class = 'more'>Even More Wicked</p>
      {% for category in site.categories %}
      <div class="archive-group">
        {% capture category_name %}{{ category | first }}{% endcapture %}
        <div id="#{{ category_name | slugize }}"></div>
        <p></p>
        <a  href="{{site.baseurl}}/category/{{  category_name}}"><h3 class="category-head {{ category_name |downcase }}">{{ category_name | upcase}}</h3></a>
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
  </aside>
</section>
