(function(){
var d=document,rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
// mobile nav
var bg=d.querySelector('.burger'),ul=d.querySelector('nav ul');
if(bg){bg.addEventListener('click',function(){var o=ul.classList.toggle('open');bg.setAttribute('aria-expanded',o)})}
// scroll progress
var pr=d.querySelector('.prog');
function sp(){var h=d.documentElement;pr.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%'}
if(pr){addEventListener('scroll',sp,{passive:true});sp()}
// reveal on scroll
var rv=[].slice.call(d.querySelectorAll('.rv'));
if('IntersectionObserver' in window&&!rm){
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
rv.forEach(function(el,i){el.style.setProperty('--d',((i%4)*0.08)+'s');io.observe(el)});
}else{rv.forEach(function(el){el.classList.add('in')})}
// counters
function count(el){
var to=parseFloat(el.dataset.count),suf=el.dataset.suffix||'',t0=null;
function f(t){if(!t0)t0=t;var p=Math.min((t-t0)/1600,1),e=1-Math.pow(1-p,4);el.textContent=Math.round(to*e)+suf;if(p<1)requestAnimationFrame(f)}
requestAnimationFrame(f)}
var cs=d.querySelectorAll('[data-count]');
if('IntersectionObserver' in window&&!rm){
var co=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){count(e.target);co.unobserve(e.target)}})},{threshold:.5});
cs.forEach(function(c){co.observe(c)})}
// typing effect
var ty=d.querySelector('[data-type]');
if(ty&&!rm){
var ph=JSON.parse(ty.dataset.type),pi=0,ci=0,del=false,sp2=ty.querySelector('span');
(function tick(){
var w=ph[pi];
sp2.textContent=w.slice(0,ci);
if(!del&&ci<w.length){ci++;setTimeout(tick,60)}
else if(!del){del=true;setTimeout(tick,1600)}
else if(ci>0){ci--;setTimeout(tick,30)}
else{del=false;pi=(pi+1)%ph.length;setTimeout(tick,300)}
})();}
// card spotlight
d.querySelectorAll('.card,.tile').forEach(function(c){
c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')})});
// cursor glow
var gl=d.querySelector('.glow');
if(gl&&!rm&&matchMedia('(pointer:fine)').matches){addEventListener('pointermove',function(e){gl.style.left=e.clientX+'px';gl.style.top=e.clientY+'px'})}
// portfolio filter
var fb=d.querySelectorAll('.filters button');
fb.forEach(function(b){b.addEventListener('click',function(){
fb.forEach(function(x){x.classList.remove('on')});b.classList.add('on');
var k=b.dataset.f;
d.querySelectorAll('[data-cat]').forEach(function(el){el.style.display=(k==='all'||el.dataset.cat===k)?'':'none'})})});
})();
