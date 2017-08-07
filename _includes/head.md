<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>{% if page.title %}{{ page.title | escape }} | {{site.title}}{% else %}{{ site.title | escape }}{% endif %}</title>
  <meta property='og:site_name' content='{{site.title}}' />
  <meta itemprop = 'description' name='description' content='{{ page.excerpt | default: site.description | strip_html | normalize_whitespace | truncate: 160 | escape }}'>
  <meta property='og:description' content='{{ page.excerpt | default: site.description | strip_html | normalize_whitespace | truncate: 160 | escape }}'>
  <meta property='og:locale' content='en_US' />
  {% if page.layout == 'post' %}
    {% if page.image %}  
      {% assign postImage = page.image %}
    {% else %}
      {% assign postImage = page.permalink | remove: '/' %}
    {% endif %}
    <script type='application/ld+json'>
      {'@context': 'http://schema.org',
      '@type': 'BlogPosting',
      'name': '{{site.title}}',
      'headline': '{{page.title}}',
      'description': '{{page.excerpt | strip_html | truncate: 156 }}',
      'url': '{{site.url}}{{page.url}}'}
    </script>}
    <meta property='og:type' content='article' />
    <meta property='og:title' content='{{page.title}}' />
    <meta property='og:url' content='{{site.url}}{{page.url}}' />
    <meta property='article:published_time' content='{{page.date | date_to_xmlschema}}' />
    <meta property='og:image' content='{{site.url}}/assets/posts/{{ postImage }}.jpg' />
    <meta property='og:image:width' content='720' />
    <meta property='og:image:height' content='360' />
    <meta name='twitter:site' content='@{{ site.twitter }}' />
    <meta name='twitter:image' content='{{site.url}}/assets/posts/{{ postImage }}.jpg?w=240' />
    <meta name='twitter:card' content='summary' />
    <meta name='twitter:creator' content='@{{ site.twitter }}' />
    <meta property='og:description' content='{{ page.excerpt }}'/>
  {% endif %}
  <link rel='mask-icon' href='{{site.baseurl}}/safari.svg' color='#5bbad5'>
  <meta name='theme-color' content='#ffffff'>
  <link rel='canonical' href='{{ page.url | replace:'index.html','' | absolute_url }}'>
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
