<section class = 'header'>
  <header class="flex out">
      {% assign default_paths = site.pages | map: "path" %}
      {% assign page_paths = site.header_pages | default: default_paths %}
      <div class = 'small'>
      <a class="brand" href="{{ "/" | relative_url }}">{{ site.title | escape }}</a>
      </div>
      {% if page_paths %}
        <nav class="main main-menu">
          <p class="flex desc">
          {{ site.desc | upcase }}
          </p>
          <p class = 'flex'>
          {% for category in site.data.menu %}
            <a class="{{category}}" href="{{site.baseurl}}/category/{{  category}}">{{ category | upcase }}</a>
          {% endfor %}
          </p>
        </nav>
      {% endif %}
      <div class = 'small flex'>
      {% for item in site.data.social %}
         <a href = '{{ item.url }}' class = 'flex {{ item.icon}} social' target = '_blank'><i class = 'fa fa-{{ item.icon }}' aria-hidden = 'true'></i></a>
      {% endfor %}
      </div>
  </header>
</section>
