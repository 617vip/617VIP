<footer>
  <header class = 'flex'>
    <div class="quad">
      <a class="" href="{{ "/" | relative_url }}"><img src = '{{ site.baseurl }}/assets/logo.png' alt = 'footer-logo'></a>
    </div>
    <div class="child duo">
        {% include subscribe-footer.md %}
    </div>
    <div class="quad flex">
        {% for item in site.data.social %}
        <a href = '{{ item.url }}' class = ' flex {{ item.icon}} social' target = '_blank'><i class = 'icon icon-{{ item.icon }}' aria-hidden = 'true'></i></a>
      {% endfor %}
    </div>
  </header>
  <header class="foot-links">
      {% for category in site.data.footer %}
        {% if category == 'home' %} 
         <a  href="{{ "/" | relative_url }}">{{ category | capitalize }}</a>
        {% else %}
          <a href="{{site.baseurl}}/{{  category | slugify}}/">{{ category | capitalize }}</a>
        {% endif %}
      {% endfor %}
    <span class = 'copyrights'>{{ site.copyright | escape }}</span>
  </header>
</footer>
<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>
<script>
  {% include index.js %}
</script>