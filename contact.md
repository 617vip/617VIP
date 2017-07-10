---
layout: page
permalink: /contact-617vip/
published: true
---
<style>
   form{
     width:100%;
     max-width:480px;
     padding:20px 25px;
   }
   input,textarea{
     width:100%;
     margin:17.5px auto;
     padding:12.5px 15px;
     font-size:1.2em;
     border-radius:6px;
     display:block;
     border:none;
     outline:none;
     -webkit-appearance:none;
     background-color:rgba(0,255,0,0.07);
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
</style>
<div class = 'form flex'>
  <form>
    <input type = 'text' placeholder = 'Name' name = 'name'>
    <input type = 'email' placeholder = 'Email Address' name = 'email'>
    <textarea placeholder = 'Type your message' name = 'message'></textarea>
    <input type = 'submit' value = 'Submit Message'>
  </form>
</div>
