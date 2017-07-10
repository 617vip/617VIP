---
layout: default
---
<section class = 'flex'>
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
    {% if site.disqus.shortname %}
      {% include disqus_comments.md %}
    {% endif %}
  </article>
  <aside class = ' child third'>
  </aside>
</section>
