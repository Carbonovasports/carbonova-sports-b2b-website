
const toggle=document.querySelector('.menu-toggle');const mobile=document.querySelector('.mobile-menu');if(toggle&&mobile){toggle.addEventListener('click',()=>{const open=mobile.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
document.querySelectorAll('form[data-rfq-form]').forEach(function(f){f.addEventListener('submit',function(){function h(n,v){var i=document.createElement('input');i.type='hidden';i.name=n;i.value=v||'';f.appendChild(i);}h('source_page',location.pathname);h('referrer',document.referrer);var q=new URLSearchParams(location.search);['utm_source','utm_medium','utm_campaign'].forEach(function(k){if(q.get(k))h(k,q.get(k));});});});
document.querySelectorAll('form[data-rfq-form]').forEach(function(f){var sel=f.querySelector('select[name="product"]');var pf=f.querySelectorAll('.padel-fields');if(!sel||!pf.length)return;function sync(){var show=sel.value==='Padel Racket';pf.forEach(function(el){el.style.display=show?'':'none';});}sel.addEventListener('change',sync);sync();});
(function(){
  var hero=document.querySelector('.hero-banner-img');
  document.querySelectorAll('img').forEach(function(img){
    if(img===hero)return;
    if(!img.hasAttribute('loading'))img.setAttribute('loading','lazy');
    if(!img.hasAttribute('decoding'))img.setAttribute('decoding','async');
    if(!img.hasAttribute('fetchpriority'))img.setAttribute('fetchpriority','low');
  });
  if(hero){
    hero.setAttribute('loading','eager');
    hero.setAttribute('fetchpriority','high');
    hero.setAttribute('decoding','async');
  }
})();
