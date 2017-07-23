---
layout: default
---
<div class = 'ads-container'>{% include ads.md %}</div>
<section class = 'flex-in'>
  <article class="post child main" itemscope itemtype="http://schema.org/BlogPosting">
    <section class="post-header">
      <div class="post-meta">
        {% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
        {% assign cat = page.categories | first | upcase%}
      <p class = 'flex out'>
        <time class="post-meta" datetime="{{ page.date | date_to_xmlschema }}" itemprop="datePublished">
        {{ page.date | date: date_format }}</time>
        <span class = 'right {{ cat | downcase }}'>{{ cat }}</span>
      </p>
        {% if page.author %}
          • <span itemprop="author" itemscope itemtype="http://schema.org/Person"><span itemprop="name">{{ page.author }}</span></span>
        {% endif %}
      </div>
      <img src = '{{ site.baseurl }}/assets/posts/{{ page. permalink | remove: '/'}}.jpg' alt = '{{ page. permalink | remove: '/'}}'>
      <div class = 'holder'>{% include share.md %}</div>
      <h1 class="post-title {{ page.categories | first | downcase}}" itemprop="name headline">{{ page.title | escape }}</h1>
    </section>
    <div class="post-content" itemprop="articleBody">
      {{ content }}
    </div>
    <div class = 'fb-holder'>{% include fb-like.md %}</div>
    {% include nextprev.md %}
    {% if site.disqus.shortname %}
      {% include disqus_comments.md %}
    {% endif %}
    <div class = 'mobile'>{% include subscribe-sidebar.md %}</div>
    <span class = 'mark'>
    <a  href="{{site.baseurl}}/category/{{  cat | downcase}}"></span><h3 class="flex category-head {{ cat |downcase }}"><span>MORE WICKED SILLY {{ cat }} NEWS</span></h3></a>
    <div class = 'flex out related-posts'>
      {% assign kind = page.categories | first %}
       {% for post in site.categories[kind] limit: 5 %}
          {% unless post.title == page.title %}
           <div  class = 'child duo flex-down'>
              <a href="{{ site.baseurl }}{{ post.url }}">
              <img src = '{{ site.baseurl }}/assets/posts/{{ post.permalink | remove: '/'}}.jpg' alt = '{{ post. permalink | remove: '/'}}'>
              <h2 itemprop="name headline">{{ post.title | escape }}</h2></a>
              <time class="post-meta" >{{ post.date | date: date_format }}</time>
           </div>
          {% endunless %}
       {% endfor %}
    </div>
  </article>
  <aside class = ' child third'>
   <div id="archives">
      {% for category in site.categories %}
        <div class="archive-group">
          {% capture category_name %}{{ category | first }}{% endcapture %}
          {% assign cat = cat | downcase | capitalize %}
            {% if category_name == cat %}
            <div id="#{{ category_name | slugize }}"></div>
            <p></p>
            <a  href="{{site.baseurl}}/category/{{  category_name | downcase }}" class="right category-head {{ category_name | downcase }}">{{ category_name | upcase}}</a>
            <a name="{{ category_name | slugize }}" class = 'mark'></a>
            {% for post in site.categories[category_name] limit : 2 %}
              <div class="archive-item">
                <img src = '{{ site.baseurl }}/assets/posts/{{ post.permalink | remove: '/'}}.jpg' alt = '{{ post. permalink | remove: '/'}}'>
                <h3><a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a></h3>
                <p><span class="post-meta">{{ post.date | date: date_format }}</span></p>
              </div>
            {% endfor %}
            {% endif %}
        </div>
      {% endfor %}
      <div class = 'desktop'>{% include subscribe-sidebar.md %}</div>
      <p class = 'more'>Even More Wicked Silly News</p>
      <div class="archive-group">
      {% for category in site.categories %}
        {% capture category_name %}{{ category | first }}{% endcapture %}
         {% assign cat = cat | downcase | capitalize %}
          {% unless category_name == cat %}
          <div id="#{{ category_name | slugize }}"></div>
          <a  href="{{site.baseurl}}/category/{{  category_name | downcase }}" class="right category-head {{ category_name | downcase }} mark">{{ category_name | upcase}}</a>
          {% for post in site.categories[category_name] limit : 3 %}
            <div class="archive-item">
              <h3><a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a></h3>
              <p><span class="post-meta">{{ post.date | date: date_format }}</span></p>
            </div>
          {% endfor %}
          {% endunless %}
      </div>
    {% endfor %}
    </div>
  </aside>
</section>
<div class = 'ads-container'>{% include ads.md %}</div>