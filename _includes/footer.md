<footer class="site-footer">

  <div class="wrapper">

    <h2 class="footer-heading">{{ site.title | escape }}</h2>

    <div class="footer-col-wrapper">
      <div class="footer-col footer-col-1">
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

      <div class="footer-col footer-col-2">
        <ul class="social-media-list">
        
          {% if site.twitter_username %}
          <li>
            twitter
          </li>
          {% endif %}
        </ul>
      </div>

      <div class="footer-col footer-col-3">
        <p>{{ site.copyright | escape }}</p>
      </div>
    </div>

  </div>

</footer>
