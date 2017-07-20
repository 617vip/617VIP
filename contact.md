---
layout: page
permalink: /contact-617vip/
published: true
---
<style>
  .form{
    position:relative;
  }
   form{
     width:100%;
     max-width:450px;
     padding:0;
   }
   input,textarea{
    display:block;
    width:100%;
    margin:12.5px auto;
    padding:12.5px 15px;
    font-size:1em !important;
    border-radius:6px;
    border:1px solid transparent;
    outline:none;
    -webkit-appearance:none;
    background-color:#eee;
    transition: all 0.3s ease-in-out; 
   }
   input:hover,
   input:focus,
   textarea:hover,
   textarea:focus{
     background-color:#fefefe;
     border:1px solid #dedede;
   }
  ::-webkit-input-placeholder{
      color:#444;
      font-size:1.1em !important;
    }
   .form textarea{
     min-height:100px;
     font-size:1.1em !important
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
  .form-widget{
    width:100%;
    min-height:400px;
    max-width: 450px;
    margin:5px auto;
    padding:0;
    position: relative;
  }
  #notification{
    position:absolute;
    width:100%;
    text-align:center;
    top:0;
    left:0;
    padding:7.5px 12.5px;
    font-size:1.1em;
    opacity:0;
    transition: opacity 1s ease-in;
    color:#343434;
    z-index:9999;
  }
  #notification.showing{
    opacity:1;
    background-color:#fafafa;
  }
  .alert {
    margin-bottom: 0;
    font-size:1.1em;
  }
  .alert span{
    color: #111;
  }
  .alert-success .fa{
    color: #DFF2BF;
    margin-right:25px;
  }
  .alert-error .fa{
    margin-right:25px;
    color: #FFBABA;
  }
  .contact-us{
    align-items: stretch;
    color:#333;
  }
  .contact-us h2{
    padding: 15px 0;
    color:#343434;
  }
  .contact-us h3{
    color:#343434;
    font-size: 1.1em;
    font-weight:bold;
    padding: 12.5px 0;
  }
  .contact-us p{
    padding: 7.5px 0;
    color: inherit;
  }
  .alert-loading{
    width:100%;
    text-align:center;
  }
</style>
<section class = 'flex contact-us'>
  <div class="address child third">
    <h2>Contact 617VIP</h2>
    <h3>Call:</h3>
    {{ site.data.address.call }}
    <h3>Write:</h3>
    {% for item in site.data.address.write %}
    <p>{{ item }}</p>
    {% endfor %}
  </div>
  <div class = 'form flex child main'>
    <div class = 'form-widget'>
      <div id = 'notification'></div>
      <form  id = 'contact-form' method = 'POST' action = 'https://formspree.io/{{site.email}}'>
        <input type = 'text' placeholder = 'Name' name = 'Name' class = 'input-field' required>
        <input type = 'email' placeholder = 'Email Address' name = 'Email' class = 'input-field' required>
        <input type = 'number' placeholder = 'Phone Number' name = 'Phone' class = 'input-field'>
        <input type = 'textl' placeholder = 'Subject' name = 'Subject' class = 'input-field'>
        <textarea placeholder = 'Type your message' name = 'Message' class = 'input-field'></textarea>
        <input type = 'submit' value = 'Submit Message'>
      </form>
     </div>
  </div>
</section>
