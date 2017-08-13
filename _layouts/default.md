---
layout: compress
---
<!DOCTYPE html>
<html lang="{{ page.lang | default: site.lang | default: "en" }}">
  {% include head.md %}
  <body>
    {% include header.md %}
    <main class="page-content {% if page.layout == 'post' %}blog-post{% endif %}" aria-label="Content">
        {{ content }}
    </main>
    {% include footer.md %}
  </body>
</html>
