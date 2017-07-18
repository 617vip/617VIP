<section class = 'header'>
  <header class="flex out top-header">
      {% assign default_paths = site.pages | map: "path" %}
      {% assign page_paths = site.header_pages | default: default_paths %}
      <div class = 'quad title flex-in'>
      <a class="brand flex-in" href="{{ "/" | relative_url }}"></a>
      </div>
      {% if page_paths %}
        <nav class="child main-menu">
          <p class="flex desc">
          <img src = '{{ site.baseurl }}/assets/logo-big.png' alt = 'logo'>
          </p>
          <p class = 'flex'>
            <p class = 'browse'>BROWSE CATEGORIES <span><i class = 'fa fa-arrow-down' aria-hidden = 'true'></i></span></p>
            <div class = 'expands'>
              {% for category in site.data.menu %}
                <a class="{{category}}" href="{{site.baseurl}}/category/{{  category}}">{{ category | upcase }}</a>
              {% endfor %}
           </div>
          </p>
        </nav>
      {% endif %}
      <div class = ' flex quad '>
      {% for item in site.data.social %}
         <a href = '{{ item.url }}' class = 'flex {{ item.icon}} social' target = '_blank'><i class = 'fa fa-{{ item.icon }}' aria-hidden = 'true'></i></a>
      {% endfor %}
      </div>
      <i class = 'flex fa fa-bars toggle-menu'></i>
  </header>
</section>
