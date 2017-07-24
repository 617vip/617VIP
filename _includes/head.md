<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>{% if page.title %}{{ page.title | escape }} | {{site.title}}{% else %}{{ site.title | escape }}{% endif %}</title>
  <meta property="og:url"           content="{{ site.url }}{{ page.url }}" />
  <meta property="og:type"          content="website" />
  <meta property="og:title" content="{{ site.title }}" />
  <meta property="og:description" content="{{ site.description
  }}" />
  <meta property="og:image" content="{{ site.url }}/assets/posts/{{ page.permalink | remove: '/' }}.jpg" />
  <meta name="description" content="{{ page.excerpt | default: site.description | strip_html | normalize_whitespace | truncate: 160 | escape }}">
 <link rel="apple-touch-icon"  href="{{ site.baseurl }}/assets/apple-icon.png">
 <link rel="shortcut icon" href="{{ site.baseurl }}/assets/favicon.ico">
  <link rel="canonical" href="{{ page.url | replace:'index.html','' | absolute_url }}">
  <link rel="alternate" type="application/rss+xml" title="{{ site.title | escape }}" href="{{ "/feed.xml" | relative_url }}">
  <meta name="theme-color" content="#ffffff">
  <script src='https://use.fontawesome.com/22572db09e.js' ></script>
  {% if jekyll.environment == 'production' and site.google_analytics %}
  {% include google-analytics.md %}
  {% endif %}
  <style>
     {% include main.css %}
  </style>
</head>
