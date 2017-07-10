<section class = 'header'>
  <header class="flex out">
      {% assign default_paths = site.pages | map: "path" %}
      {% assign page_paths = site.header_pages | default: default_paths %}
      <div class = 'child quad'>
      <a class="flex" href="{{ "/" | relative_url }}">{{ site.title | escape }}</a>
      </div>
      {% if page_paths %}
        <nav class=" main child">
          <span class="menu-icon">
          </span>
          {% for category in site.data.menu %}
            <a class="{{category}}" href="/category/{{  category}}">{{ category | upcase }}</a>
          {% endfor %}
        </nav>
      {% endif %}
  </header>
</section>
