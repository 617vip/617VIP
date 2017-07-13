<div class="share-box flex-in"> 
    <a href="https://www.facebook.com/sharer/sharer.php?u={{ site.url }}{{site.baseurl}}{{ page.url }}" onclick="window.open(this.href, 'mywin', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;" ><i class="fa fa-facebook fa share-button"> Facebook</i></a>
    <a href="https://twitter.com/intent/tweet?text={{ page.title }}&url={{ site.url }}{{site.baseurl}}{{ page.url }}" onclick="window.open(this.href, 'mywin', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;">
      <i class="fa fa-twitter fa share-button"> Twitter</i>
    </a>
    <a href="http://www.reddit.com/submit?url={{ site.url }}{{site.baseurl}}{{ page.url }}" onclick="window.open(this.href, 'mywin', 'left=20,top=20,width=900,height=500,toolbar=1,resizable=0'); return false;" >
      <i class="fa fa-reddit fa share-button"> Reddit</i>
    </a>                     
    <a href="mailto:?subject={{ page.title }}&amp;body=Check out this site {{ site.url }}{{site.baseurl}}{{ page.url }}">
        <i class="fa fa-envelope fa share-button"> Email</i>
    </a>                              
</div>