(function(){
  const measurementId='G-RPMSVNPBQW';
  window.dataLayer=window.dataLayer||[];
  window.gtag=window.gtag||function(){window.dataLayer.push(arguments);};
  window.gtag('js',new Date());
  window.gtag('config',measurementId);
  const script=document.createElement('script');
  script.async=true;
  script.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(measurementId);
  document.head.appendChild(script);
})();

const toggle=document.querySelector('.menu-toggle');const mobile=document.querySelector('.mobile-menu');if(toggle&&mobile){toggle.addEventListener('click',()=>{const open=mobile.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

(function(){
  const attributionKeys=['utm_source','utm_medium','utm_campaign','utm_term','utm_content','gclid'];
  const query=new URLSearchParams(location.search);
  try{
    attributionKeys.forEach(function(key){const value=query.get(key);if(value)sessionStorage.setItem('carbonova_'+key,value);});
    if(!sessionStorage.getItem('carbonova_landing_page'))sessionStorage.setItem('carbonova_landing_page',location.href);
  }catch(e){}

  function setHidden(form,name,value){
    let input=form.querySelector('input[type="hidden"][name="'+name+'"]');
    if(!input){input=document.createElement('input');input.type='hidden';input.name=name;form.appendChild(input);}
    input.value=value||'';
  }
  function stored(key){try{return sessionStorage.getItem('carbonova_'+key)||'';}catch(e){return '';}}
  function pushDataLayer(eventName,params){window.dataLayer=window.dataLayer||[];window.dataLayer.push(Object.assign({event:eventName},params||{}));}
  function sendGtag(eventName,params){if(typeof window.gtag==='function')window.gtag('event',eventName,params||{});}

  document.querySelectorAll('form[data-rfq-form]').forEach(function(form){
    form.addEventListener('submit',function(){
      const product=form.querySelector('[name="product"]');
      const productInterest=product?product.value:'';
      setHidden(form,'_next','https://www.carbonovasports.com/thank-you.html');
      setHidden(form,'_url',location.href);
      setHidden(form,'source_page',location.pathname);
      setHidden(form,'referrer',document.referrer);
      setHidden(form,'landing_page',stored('landing_page'));
      attributionKeys.forEach(function(key){const value=query.get(key)||stored(key);if(value)setHidden(form,key,value);});
      try{
        sessionStorage.setItem('carbonova_pending_lead','1');
        sessionStorage.setItem('carbonova_lead_product',productInterest);
        sessionStorage.setItem('carbonova_lead_source_page',location.pathname);
      }catch(e){}
    });
  });

  document.querySelectorAll('a[href*="wa.me/"]').forEach(function(link){
    link.addEventListener('click',function(){
      const params={contact_method:'whatsapp',page_path:location.pathname,link_text:(link.textContent||link.getAttribute('aria-label')||'WhatsApp').trim()};
      pushDataLayer('carbonova_whatsapp_click',params);
      sendGtag('whatsapp_click',params);
    });
  });

  if(document.body&&document.body.dataset.leadConfirmation==='true'){
    let pending='';let product='';let sourcePage='';
    try{pending=sessionStorage.getItem('carbonova_pending_lead')||'';product=sessionStorage.getItem('carbonova_lead_product')||'';sourcePage=sessionStorage.getItem('carbonova_lead_source_page')||'';}catch(e){}
    if(pending==='1'){
      const params={lead_source:'rfq_form',product_interest:product,source_page:sourcePage};
      pushDataLayer('carbonova_generate_lead',params);
      sendGtag('generate_lead',params);
      try{sessionStorage.removeItem('carbonova_pending_lead');sessionStorage.removeItem('carbonova_lead_product');sessionStorage.removeItem('carbonova_lead_source_page');}catch(e){}
    }
  }
})();

document.querySelectorAll('form[data-rfq-form]').forEach(function(f){var sel=f.querySelector('select[name="product"]');var pf=f.querySelectorAll('.padel-fields');if(!sel||!pf.length)return;function sync(){var show=sel.value==='Padel Racket';pf.forEach(function(el){el.style.display=show?'':'none';});}sel.addEventListener('change',sync);sync();});
