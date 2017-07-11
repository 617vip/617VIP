<footer>
   <div class = 'flex'>
      <div class=" child quad">
        <ul class="contact-list">
            <li>
              <a class="" href="{{ "/" | relative_url }}">{{ site.title | escape }}</a>
            </li>
            {% if site.address %}
            <li>{{ site.address }}</li>
            {% endif %}
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
    </div>
    <div class="foot-links flex out">
      {% for category in site.data.footer %}
        <a class="child small flex" href="{{site.baseurl}}/{{  category | slugify}}/">{{ category | capitalize }}</a>
      {% endfor %}
        <span class = 'duo'>{{ site.copyright | escape }}</span>
    </div>
</footer>
