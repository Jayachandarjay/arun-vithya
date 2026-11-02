const callBtn=document.getElementById('callBtn'),waBtn=document.getElementById('waBtn');
const nav=document.getElementById('nav');
document.getElementById('hamb').addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
 document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
 const f=btn.dataset.filter;document.querySelectorAll('#treatGrid [data-kind]').forEach(item=>item.hidden=f!=='all'&&item.dataset.kind!==f);
}));
// Replace with the hospital's verified email address before publishing.
// Replace with the hospital's verified phone number, digits with country code, e.g. 919XXXXXXXXX
const HOSPITAL_PHONE='919677103566';
if(/^\d{10,15}$/.test(HOSPITAL_PHONE)){callBtn.href='tel:+'+HOSPITAL_PHONE;waBtn.href='https://wa.me/'+HOSPITAL_PHONE;waBtn.target='_blank';waBtn.rel='noopener';}
else{callBtn.textContent='📞 Request a call-back';waBtn.hidden=true;}
// Triage and doctor buttons preselect the doctor in the form
document.querySelectorAll('[data-doc]').forEach(a=>a.addEventListener('click',()=>{
 const n=a.dataset.doc,sel=document.getElementById('doctor');
 const o=[...sel.options].find(o=>n&&o.text.startsWith(n+' –'));sel.value=o?o.text:'No preference';
 if(!n)document.getElementById('message').value='Enquiry about skin & wellness services.';}));
// Open-now and next-slot (Chennai time)
const SLOTS={ortho:[[900,960]],gen:[[660,810],[1050,1110]]};
const DAYS=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const fmt=m=>{const h=Math.floor(m/60),mm=m%60;return (h%12||12)+':'+String(mm).padStart(2,'0')+' '+(h<12?'AM':'PM')};
const ist=new Date(new Date().toLocaleString('en-US',{timeZone:'Asia/Kolkata'}));
const mins=ist.getHours()*60+ist.getMinutes(),dow=ist.getDay();
function nextSlot(sl){for(let i=0;i<8;i++){const d=(dow+i)%7;if(d===0)continue;
 for(const [s,e] of sl){if(i===0&&e<=mins)continue;if(i===0&&s<=mins)return 'available now';
  return (i===0?'today':i===1?'tomorrow':DAYS[d])+' '+fmt(s);}}return '–';}
document.querySelectorAll('[data-next]').forEach(el=>el.textContent=nextSlot(SLOTS[el.dataset.next]));
document.getElementById('openNow').textContent=(dow!==0&&mins>=600&&mins<1140)?'Hospital is open now':(dow===6&&mins>=1140||dow===0)?'Closed today · opens Monday 10:00 AM':'Closed now · opens '+(mins<600&&dow!==0?'today 10:00 AM':'tomorrow 10:00 AM');
document.querySelector('.filter.active').click();
document.getElementById('appointmentForm').addEventListener('submit',e=>{
 e.preventDefault();const form=e.currentTarget;if(!form.reportValidity())return;
 const d=new FormData(form);
 const msg=`Appointment enquiry - Arun Vijaya Hospital\nName: ${d.get('name')}\nPhone: ${d.get('phone')}\nPreferred date: ${d.get('date')||'Not specified'}\nDoctor/department: ${d.get('doctor')}\nMessage: ${d.get('message')||'Not provided'}`;
 document.getElementById('status').textContent='Opening WhatsApp. Please press Send there to complete the enquiry.';
 window.open('https://wa.me/'+HOSPITAL_PHONE+'?text='+encodeURIComponent(msg),'_blank','noopener');
});
// Hero slider
const SL=[['Your Health, Our Priority','Strong Bones, Stronger Tomorrows','Orthopaedic and general physician care in KK Nagar, Chennai.'],['Care That Listens','Clear Answers, Calm Consultations','Doctors who explain your condition without creating stress.'],['Close To Home','Family Health, Right in KK Nagar','General physician and orthopaedic consultations, Monday to Saturday.']];
let si=0;const hs=document.getElementById('hTitle');
function show(i){si=(i+SL.length)%SL.length;hs.style.opacity=0;setTimeout(()=>{document.getElementById('hSub').textContent=SL[si][0];hs.textContent=SL[si][1];document.getElementById('hText').textContent=SL[si][2];hs.style.opacity=1;},200);}
document.getElementById('prev').addEventListener('click',()=>show(si-1));document.getElementById('next').addEventListener('click',()=>show(si+1));
setInterval(()=>show(si+1),7000);

// English / Tamil toggle (headings, menu and buttons)
const TA={'Home':'முகப்பு','About Us':'எங்களைப் பற்றி','Department':'துறைகள்','Doctors':'மருத்துவர்கள்','Contact Us':'தொடர்புக்கு','Book Appointment ':'முன்பதிவு ','Call Us':'அழைக்க','WhatsApp us':'வாட்ஸ்அப்','Our Departments':'எங்கள் துறைகள்','Major Services We Provide':'நாங்கள் வழங்கும் முக்கிய சேவைகள்','Orthopaedics':'எலும்பியல்','General Medicine':'பொது மருத்துவம்','Spine Care':'முதுகெலும்பு சிகிச்சை','Skin & Wellness':'தோல் மற்றும் நலவாழ்வு','Explore Our Vision':'எங்கள் நோக்கம்','Meet Our Team':'எங்கள் குழு','Our Expert Doctors':'எங்கள் மருத்துவர்கள்','Appointment':'சந்திப்பு','Make an':'முன்பதிவு செய்ய','Find Us':'எங்களைக் காண','Visit Arun Vijaya Hospital':'அருண் விஜயா மருத்துவமனை','Address':'முகவரி','Hours':'நேரம்','Phone':'தொலைபேசி','Frequently Asked Questions':'அடிக்கடி கேட்கப்படும் கேள்விகள்','Common Questions':'பொதுவான கேள்விகள்','Quick Links':'இணைப்புகள்','Contact Us ':'தொடர்புக்கு','Get Directions ↗':'வழி காண ↗','What do you need help with?':'உங்களுக்கு என்ன உதவி வேண்டும்?','Joint, bone or spine pain':'மூட்டு, எலும்பு, முதுகு வலி','Fever, general health, check-up':'காய்ச்சல், பொது உடல்நலம், பரிசோதனை','Weaving Health':'நலம் நெய்தல்','Monday – Saturday, 10:00 AM – 7:00 PM':'திங்கள் – சனி, காலை 10 – மாலை 7'};
const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);const tn=[];while(walker.nextNode()){const n=walker.currentNode,t=n.nodeValue.replace(/\s+/g,' ');const k=Object.keys(TA).find(k=>t.trim()===k.trim());if(k&&!n.parentElement.closest('script,#lang'))tn.push([n,n.nodeValue,TA[k]]);}
let ta=false;const lb=document.getElementById('lang');
lb.addEventListener('click',()=>{ta=!ta;tn.forEach(([n,en,t])=>n.nodeValue=ta?t+(en.endsWith(' ')?' ':''):en);lb.textContent=ta?'English':'தமிழ்';document.documentElement.lang=ta?'ta':'en';});

// Logo animations: continuous loop (play ~4.5s, hold, fade out, repeat). Header starts on load, About logo starts when scrolled into view. Click a logo to restart it.
(()=>{const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
 const PLAY=4500,HOLD=2500,FADE=600;
 function loop(el){let t1,t2;
  function cycle(){clearTimeout(t1);clearTimeout(t2);el.classList.remove('play','out');void el.offsetWidth;el.classList.add('play');
   t1=setTimeout(()=>{el.classList.add('out');t2=setTimeout(cycle,FADE)},PLAY+HOLD);}
  el.classList.add('ready');el.addEventListener('click',cycle);return cycle;}
 function setup(id,onView){const el=document.getElementById(id);if(!el||reduce)return;const cycle=loop(el);
  if(!onView||!('IntersectionObserver' in window)){requestAnimationFrame(()=>requestAnimationFrame(cycle));return;}
  const io=new IntersectionObserver(es=>{if(es[0].isIntersecting){cycle();io.disconnect();}},{threshold:.5});io.observe(el);}
 setup('lanimH',false);setup('lanim',true);})();
