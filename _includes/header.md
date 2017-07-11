<section class = 'header'>
  <header class="flex out">
      {% assign default_paths = site.pages | map: "path" %}
      {% assign page_paths = site.header_pages | default: default_paths %}
      <div class = 'child quad'>
      <a class="flex" href="{{ "/" | relative_url }}">{{ site.title | escape }}</a>
      </div>
      {% if page_paths %}
        <nav class=" duo child">
          <p class="Flex">
          {{ site.desc | upcase }}
          </p>
          {% for category in site.data.menu %}
            <a class="{{category}}" href="{{site.baseurl}}/category/{{  category}}">{{ category | upcase }}</a>
          {% endfor %}
        </nav>
      {% endif %}
      <div class = 'small'>
      {% for item in site.data.social %}
         <a href = '{{ item.url }}' class = 'flex {{ item.icon}} social' target = '_blank'><i class = 'fa fa-{{ item.icon }}' aria-hidden = 'true'></i></a>
      {% endfor %}
      </div>
  </header>
</section>
