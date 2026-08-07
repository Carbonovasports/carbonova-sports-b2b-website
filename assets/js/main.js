
const toggle=document.querySelector('.menu-toggle');const mobile=document.querySelector('.mobile-menu');if(toggle&&mobile){toggle.addEventListener('click',()=>{const open=mobile.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
