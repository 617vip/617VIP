<style>
  .share-panel{
    display: flex;
    align-items:center;
    flex-flow:row wrap;
    justify-content:center;
  }
  .share-panel a{
     margin:2.5px 17.5px 12px 0;
     height:35px;
     width:35px;
     color:#fff;
     opacity:1;
     transition:opacity 0.3s ease-in-out;
     border-radius:50%;
  }
  .mobile .share-panel a{
     margin-bottom:0;
  }
  .share-panel a:hover{
     opacity:0.84;
  }
  .facebook {
    background-color: #3b5998;
  }
  .linkedin {
      background-color: #0077b5;
  }
  .whatsapp {
      background-color: #34af23;
  }
  .twitter {
      background-color: #4099FF;
  }
  .mobile{
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    height:60px;
    background-color:#f5f5fa;
    z-index:499;
  }
</style>
<div class = 'share-panel'> 
   <a class = 'facebook flex' href="https://www.facebook.com/sharer/sharer.php?u={{ site.url }}{{site.baseurl}}{{ page.url }}"
   onclick="window.open(this.href, 'mywin','left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;" >
     <i class="fa fa-facebook"></i>
   </a>
   
   <a class = 'twitter flex' href="https://twitter.com/intent/tweet?text={{ page.title }}&url={{ site.url }}{{site.baseurl}}{{ page.url }}" 
   onclick="window.open(this.href, 'mywin', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;">
     <i class="fa fa-twitter"></i>
   </a>
<!--  
   <a class = 'linkedin flex' href="https://www.linkedin.com/shareArticle?mini=true&url={{ site.url }}{{site.baseurl}}{{ page.url }}&title={{ page.title }}&summary={{ page.description }}&source=617vip" 
   onclick="window.open(this.href, 'mywin', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;" >
     <i class="fa fa-linkedin"></i>
   </a>-->
   
   <a class = 'whatsapp flex' href="whatsapp://send?text={{ site.url }}{{site.baseurl}}{{ page.url }}" data-action="share/whatsapp/share">
     <i class="fa fa-whatsapp"></i>
   </a>                                       
</div>