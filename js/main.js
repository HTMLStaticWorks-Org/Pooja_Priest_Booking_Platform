
(() => {
 const body=document.body, saved=localStorage.getItem('pp-theme');
 if(saved) body.dataset.theme=saved;
 const themeBtn=document.querySelectorAll('[data-theme-toggle]');
 themeBtn.forEach(b=>b.addEventListener('click',()=>{const next=body.dataset.theme==='dark'?'light':'dark';body.dataset.theme=next;localStorage.setItem('pp-theme',next);b.textContent=next==='dark'?'☀ Theme':'☾ Theme';}));
 const rtlBtn=document.querySelectorAll('[data-rtl-toggle]');
 rtlBtn.forEach(b=>b.addEventListener('click',()=>{body.classList.toggle('rtl');const on=body.classList.contains('rtl');localStorage.setItem('pp-rtl',on?'1':'0');b.textContent=on?'LTR':'RTL';}));
 if(localStorage.getItem('pp-rtl')==='1') body.classList.add('rtl');
 rtlBtn.forEach(b=>b.textContent=body.classList.contains('rtl')?'LTR':'RTL');
 themeBtn.forEach(b=>b.textContent=body.dataset.theme==='dark'?'☀ Theme':'☾ Theme');
 const menu=document.querySelector('.menu-btn'), links=document.querySelector('.navlinks');
 if(menu&&links)menu.addEventListener('click',()=>links.classList.toggle('open'));
 document.querySelectorAll('.show-pass').forEach(b=>b.addEventListener('click',()=>{const input=b.parentElement.querySelector('input');input.type=input.type==='password'?'text':'password';b.textContent=input.type==='password'?'Show':'Hide';}));
 document.querySelectorAll('form[data-demo]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const msg=f.querySelector('.form-message');if(msg)msg.textContent='Thank you! Your details have been received in this demo. We will be in touch soon.';}));
 document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
})();
