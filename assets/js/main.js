
const toggle=document.querySelector('.menu-toggle');const mobile=document.querySelector('.mobile-menu');if(toggle&&mobile){toggle.addEventListener('click',()=>{const open=mobile.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
document.querySelectorAll('form[data-rfq-form]').forEach(function(f){f.addEventListener('submit',function(){function h(n,v){var i=document.createElement('input');i.type='hidden';i.name=n;i.value=v||'';f.appendChild(i);}h('source_page',location.pathname);h('referrer',document.referrer);var q=new URLSearchParams(location.search);['utm_source','utm_medium','utm_campaign'].forEach(function(k){if(q.get(k))h(k,q.get(k));});});});
