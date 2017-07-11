<footer>
  <header class = 'flex'>
    <div class=" child quad">
      <a class="" href="{{ "/" | relative_url }}">{{ site.title | escape }}</a>
      </ul>
    </div>
    <div class="child duo">
        {% include subscribe.md %}
    </div>
    <div class="child quad flex">
        {% for item in site.data.social %}
        <a href = '{{ item.url }}' class = ' flex {{ item.icon}} social' target = '_blank'><i class = 'fa fa-{{ item.icon }}' aria-hidden = 'true'></i></a>
      {% endfor %}
    </div>
  </header>
  <div class="foot-links">
    <header class = 'flex-in'>
      {% for category in site.data.footer %}
        {% if category == 'home' %} 
         <a class="child small flex" href="{{ "/" | relative_url }}">{{ category | capitalize }}</a>
        {% else %}
          <a class="child small flex" href="{{site.baseurl}}/{{  category | slugify}}/">{{ category | capitalize }}</a>
        {% endif %}
      {% endfor %}
      <span class = 'duo flex'>{{ site.copyright | escape }}</span>
    </header>
  </div>
</footer>
<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>
<script>{% include index.js %}</script>