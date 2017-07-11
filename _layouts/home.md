---
layout: default
---
{{ content }}
<section class = 'flex-in'>
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
  </div>
</section>
