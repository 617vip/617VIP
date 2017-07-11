---
layout: page
permalink: /contact-617vip/
published: true
---
<style>
  .form{
     min-height:72vh;
  }
   form{
     width:100%;
     max-width:480px;
     padding:20px 25px;
   }
   input,textarea{
    display:block;
    width:100%;
    max-width:360px !important;
    margin:17.5px auto;
    padding:12.5px 15px;
    font-size:1.2em;
    border-radius:6px;
    border:none;
    outline:none;
    -webkit-appearance:none;
    background-color:#eeffee;
    transition: all 0.3s ease-in-out; 
   }
   input:hover,
   input:focus,
   textarea:hover,
   textarea:focus{
     background-color:#fafafa;
   }
  ::-webkit-input-placeholder{
    color:#444;
    }
   textarea{
     min-height:100px;
   }
   input[type='submit']{
     background-color:#222;
     color:#fff;
     cursor:pointer;
   }
   input[type='submit']:hover{
     opacity:0.8;
     color:#eee;
   }
   .form h2{
     text-align:center;
   }
</style>
<ul class="address">
    {% if site.address %}
    <li>{{ site.address }}</li>
    {% endif %}
</ul>
<div class = 'form flex'>
  <div class = 'main child'><h2>Contact 617VIP</h2></div>
  <form class = 'child main'>
    <input type = 'text' placeholder = 'Name' name = 'name'>
    <input type = 'email' placeholder = 'Email Address' name = 'email'>
    <textarea placeholder = 'Type your message' name = 'message'></textarea>
    <input type = 'submit' value = 'Submit Message'>
  </form>
</div>
