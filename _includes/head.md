<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>{% if page.title %}{{ page.title | escape }} | {{site.title}}{% else %}{{ site.title | escape }}{% endif %}</title>
  {% if page.image %}  
    {% assign postImage = page.image %}
  {% else %}
    {% assign postImage = page.permalink | remove: '/' %}
  {% endif %}
  <meta property='og:site_name' content='{{site.title}}' />
  {% if page.excerpt %}
    {% assign pageDesc = page.excerpt | strip_html | truncate: 160 %}
  {% else %}
    {% assign pageDesc = site.description | strip_html | truncate: 160 %}
  {% endif %}
   {% if page.layout == 'post' %}
  <script type='application/ld+json'>
    {'@context': 'http://schema.org',
    '@type': 'BlogPosting',
    'name': '{{site.title}}',
    'headline': '{{page.title}}',
    'description': '{{pageDesc }}',
    'url': '{{site.url}}{{page.url}}'}
  </script>}
  <meta property='article:published_time' content='{{page.date | date_to_xmlschema}}' />
  {% endif %}
  <meta property='og:locale' content='en_US' />
  <meta property='og:type' content='article' />
  <meta property='og:title' content='{{ page.title }}' />
  <meta property="article:publisher" content="http://www.facebook.com/{{ site.facebook }}" />
  <meta property='og:url' content='{{ site.url }}{{ page.url }}' />
  <meta property='og:description' content='{{ pageDesc  }}'/>
  <meta property='og:image' itemprop = 'image' content='{{site.url}}/assets/posts/{{ postImage }}.jpg' />
  <meta name="twitter:card" content="summary" />
  <meta name='twitter:site' content='@{{ site.twitter }}' />
  <meta name="twitter:url" content='{{ site.url }}{{ page.url }}' />
  <meta name='twitter:creator' content='@{{ site.twitter }}' />
  <meta name="twitter:title" content="{{ page.title }}" />
  <meta name="twitter:description" content='{{ pageDesc }}'/> 
  <meta name='twitter:image:src' content='{{site.url}}/assets/posts/{{ postImage }}.jpg' />
  <link rel='mask-icon' href='{{site.baseurl}}/safari.svg' color='#5bbad5'>
  <meta name='theme-color' content='#ffffff'>
  <link rel='canonical' href='{{ page.url | replace:'index.html','' | absolute_url }}'>
 <link rel='apple-touch-icon'  href='{{ site.baseurl }}/assets/apple-icon.png'>
 <link rel='shortcut icon' href='{{ site.baseurl }}/assets/favicon.ico'>
  <link rel='alternate' type='application/rss+xml' title='{{ site.title | escape }}' href='{{ "/feed.xml" | relative_url }}'>
  <meta name="theme-color" content="#ffffff">
  {% if jekyll.environment == 'production' and site.google_analytics %}
  {% include google-analytics.md %}
  {% endif %}
  <style>
     {% include main.css %}
  </style>
</head>
