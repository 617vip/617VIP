<footer>
   <div class = 'flex'>
      <div class=" child quad">
        <p>{{ site.title | escape }}</p>
        <ul class="contact-list">
          <li>
            {% if site.author %}
              {{ site.author | escape }}
            {% else %}
              {{ site.title | escape }}
            {% endif %}
            </li>
            {% if site.address %}
            <li>{{ site.address }}</li>
            {% endif %}
        </ul>
      </div>
      <div class="child duo">
        <ul class="social-media-list">
          {% if site.twitter_username %}
          <li>
            twitter
          </li>
          {% endif %}
        </ul>
      </div>
      <div class="child quad">
      </div>
    </div>
    <div class="foot-links flex out">
      {% for category in site.data.footer %}
        <a class="child small flex" href="{{site.baseurl}}/{{  category | slugify}}/">{{ category | capitalize }}</a>
      {% endfor %}
        <span class = 'duo'>{{ site.copyright | escape }}</span>
    </div>
</footer>
