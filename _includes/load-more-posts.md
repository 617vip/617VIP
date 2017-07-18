{% if paginator.page %}
  {% assign offset = paginator.page  | times:paginator.per_page %}
  {% assign currentPage = paginator.page %}
{% else %}
  {% assign offset = 4 %}
  {% assign currentPage = 2 %}
{% endif %}
<div class = 'child main'>
  <div class = 'postContainer' id='blogContainer' data-page='{{ currentPage }}' data-totalPages='{{ paginator.total_pages }}'>
    <ul class = 'more-list'>
      {% for post in pageLoopMore  limit:site.paginate offset: offset %}
      <li class = 'flex out post-item'>  
        {% assign date_format = '%b %-d, %Y' %}
        {% if page.title != 'Wicked Silly News' %}
          {% assign cat = page.title | upcase%}
        {% else %}
          {% assign cat = post.categories |first %}
        {% endif %}
        <a class='post-image child duo' href='{{ post.url | relative_url }}'>
          <img src = '{{ site.baseurl }}/assets/posts/{{ post. permalink | remove: "/"}}.jpg' alt = '{{ post. permalink | remove: "/"}}'/></a>
        <a class = 'post-summary child duo flex-down' href='{{ post.url | relative_url }}'>
          <p class = 'flex out'>
          <span class = 'post-meta'>{{ post.date | date: date_format }}</span>
          <span class = 'right {{ cat | downcase }}'>{{ cat }}</span>
          </p>
          <p><h2>{{ post.title | escape }}</h2></p>
        </a>
      </li>
      {% endfor %}
    </ul>
  </div>
  {% assign postCount = pageLoop | size %}
  {% assign postsCovered = site.paginate | plus:offset %}
  {% if postsCovered < postCount %}
    <button class="loadMore flex">{{ 'show me more wicked news ' | upcase }}<span><i class="fa fa-arrow-down" aria-hidden="true"></i></span></button>
  {% endif %}
  </div>