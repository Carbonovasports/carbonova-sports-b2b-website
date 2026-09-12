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
  function track(eventName,params){pushDataLayer(eventName,params);sendGtag(eventName,params);}
  function pathOnly(url){try{return new URL(url,location.href).pathname||'/';}catch(e){return location.pathname;}}
  function formId(form){return form.id||('rfq_'+(location.pathname.replace(/[^a-z0-9]+/gi,'_').replace(/^_|_$/g,'')||'page'));}
  function formLocation(){return location.pathname==='/contact.html'?'contact_page':'page_rfq';}
  function productInterest(form){const product=form.querySelector('[name="product"]');return product?product.value:'';}
  function formParams(form){return {form_id:formId(form),form_location:formLocation(),page_path:location.pathname,product_interest:productInterest(form)};}
  function trackFormError(form,errorType,errorStage,fieldName){
    const key=errorType+'|'+errorStage+'|'+(fieldName||'');
    form._carbonovaFormErrors=form._carbonovaFormErrors||{};
    if(form._carbonovaFormErrors[key])return;
    form._carbonovaFormErrors[key]=true;
    track('form_error',Object.assign(formParams(form),{error_type:errorType,error_stage:errorStage,field_name:fieldName||''}));
  }

  const forms=document.querySelectorAll('form[data-rfq-form]');
  forms.forEach(function(form){
    form.addEventListener('focusin',function(event){
      const target=event.target;
      if(form._carbonovaFormStarted||!target.matches('input:not([type="hidden"]),select,textarea'))return;
      form._carbonovaFormStarted=true;
      track('form_start',Object.assign(formParams(form),{first_field:target.name||target.id||''}));
    });
    form.addEventListener('invalid',function(event){
      const target=event.target;
      if(target&&target.matches('input,select,textarea'))trackFormError(form,target.validity&&target.validity.valueMissing?'required':'invalid','native_validation',target.name||target.id||'');
    },true);
    form.addEventListener('error',function(){trackFormError(form,'submission_error','submit','');});
    form.addEventListener('submit',function(){
      const productInterest=productInterestValue(form);
      if(!form._carbonovaSubmitTracked){
        form._carbonovaSubmitTracked=true;
        track('form_submit_attempt',Object.assign(formParams(form),{has_country:!!(form.querySelector('[name="country"]')||{}).value,has_quantity:!!(form.querySelector('[name="quantity"]')||{}).value}));
      }
      try{
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
      }catch(e){trackFormError(form,'script_exception','submit_prepare','');}
    });
  });

  function productInterestValue(form){return productInterest(form);}

  document.querySelectorAll('a[href*="wa.me/"]').forEach(function(link){
    link.addEventListener('click',function(){
      const params={contact_method:'whatsapp',page_path:location.pathname,link_text:(link.textContent||link.getAttribute('aria-label')||'WhatsApp').trim()};
      pushDataLayer('carbonova_whatsapp_click',params);
      sendGtag('whatsapp_click',params);
    });
  });

  document.querySelectorAll('a.btn[href]').forEach(function(link){
    if(link.href.indexOf('wa.me/')!==-1)return;
    link.addEventListener('click',function(){
      const section=link.closest('section');
      const params={cta_id:link.id||link.dataset.ctaId||pathOnly(link.href),cta_text:(link.textContent||link.getAttribute('aria-label')||'').trim(),destination:pathOnly(link.href),page_path:location.pathname,section_id:section?(section.id||String(section.className||'').split(/\s+/)[0]):''};
      track('cta_click',params);
    });
  });

  const productSchema=[].slice.call(document.querySelectorAll('script[type="application/ld+json"]')).map(function(script){try{return JSON.parse(script.textContent||'{}');}catch(e){return null;}}).find(function(data){return data&&data['@type']==='Product';});
  if(productSchema){
    track('view_item',{item_id:location.pathname.replace(/\/$/,'')||'/',item_name:productSchema.name||'',item_category:productSchema.category||'',page_path:location.pathname});
  }

  if(document.body&&document.body.dataset.leadConfirmation==='true'){
    let pending='';let product='';let sourcePage='';
    try{pending=sessionStorage.getItem('carbonova_pending_lead')||'';product=sessionStorage.getItem('carbonova_lead_product')||'';sourcePage=sessionStorage.getItem('carbonova_lead_source_page')||'';}catch(e){}
    if(pending==='1'){
      try{sessionStorage.removeItem('carbonova_pending_lead');sessionStorage.removeItem('carbonova_lead_product');sessionStorage.removeItem('carbonova_lead_source_page');}catch(e){}
      const params={lead_source:'rfq_form',product_interest:product,source_page:sourcePage};
      pushDataLayer('carbonova_generate_lead',params);
      sendGtag('generate_lead',params);
    }
  }
})();

document.querySelectorAll('form[data-rfq-form]').forEach(function(f){var sel=f.querySelector('select[name="product"]');var pf=f.querySelectorAll('.padel-fields');if(!sel||!pf.length)return;function sync(){var show=sel.value==='Padel Racket';pf.forEach(function(el){el.style.display=show?'':'none';el.querySelectorAll('input,select,textarea').forEach(function(ctrl){ctrl.disabled=!show;});});}sel.addEventListener('change',sync);sync();});
