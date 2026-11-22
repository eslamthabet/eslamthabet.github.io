/* Motion only. Content, layout and links stay in the original files. */
(() => {
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const ease = 'cubic-bezier(.16,1,.3,1)';
  const running = new Set();
  const seen = new WeakSet();
  let observer;
  function animate(el, frames, options) {
    if (!el || preference.matches || !el.animate) return;
    const animation = el.animate(frames, options);
    running.add(animation);
    animation.finished.catch(() => {}).finally(() => running.delete(animation));
  }
  function reveal(el, delay = 0) {
    if (seen.has(el)) return;
    seen.add(el);
    animate(el, [{opacity:0,transform:'translate3d(0,38px,0)'},{opacity:1,transform:'translate3d(0,0,0)'}],{duration:1050,delay,easing:ease,fill:'backwards'});
  }
  function observe() {
    const groups = ['.section-heading > *','.work-toolbar','#video-grid > *','.ads-section .section-head > *','.ad-stage','.ad-controls','.services-grid > *','.clients > p','.client-list > *','.contact > .kicker','.contact-layout > div:first-child > *','#social-links > *','.social-date','.footer > *'];
    groups.forEach(selector => document.querySelectorAll(selector).forEach((el,i) => {
      if (seen.has(el)) return;
      el.dataset.motionDelay = String((i % 3) * 85);
      if (preference.matches) {seen.add(el);return;}
      observer.observe(el);
    }));
  }
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      reveal(entry.target, Number(entry.target.dataset.motionDelay) || 0);
      observer.unobserve(entry.target);
    }),{threshold:.08,rootMargin:'0px 0px -30px 0px'});
    observe();
    let pending = false;
    // Language changes rebuild only gallery and socials, so observe their new nodes.
    new MutationObserver(() => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => {pending=false;observe();bindHover();});
    }).observe(document.body,{childList:true,subtree:true});
  }
  const heroItems = document.querySelectorAll('.hero-copy > *');
  animate(document.querySelector('.header'),[{opacity:0,transform:'translateY(-16px)'},{opacity:1,transform:'translateY(0)'}],{duration:950,easing:ease,fill:'backwards'});
  heroItems.forEach((el,i)=>reveal(el,130+i*105));
  animate(document.querySelector('.portrait-stage'),[{opacity:0,transform:'translateY(32px) scale(.97)',clipPath:'inset(8% 0 0 0 round 24px)'},{opacity:1,transform:'translateY(0) scale(1)',clipPath:'inset(0% 0 0 0 round 0px)'}],{duration:1450,delay:240,easing:ease,fill:'backwards'});
  const bound = new WeakSet();
  function bindHover() {
    document.querySelectorAll('.video-image,.service,.portrait-frame').forEach(el=>{
      if(bound.has(el))return;
      bound.add(el);
      let id=0,x=0,y=0;
      el.addEventListener('pointermove',event=>{
        if(preference.matches||!finePointer.matches)return;
        const r=el.getBoundingClientRect();
        x=(event.clientX-r.left)/r.width-.5;y=(event.clientY-r.top)/r.height-.5;
        if(id)return;
        id=requestAnimationFrame(()=>{id=0;const strength=el.classList.contains('portrait-frame')?16:3;el.style.setProperty('--tilt-x',`${-y*strength}deg`);el.style.setProperty('--tilt-y',`${x*strength}deg`);el.style.setProperty('--light-x',`${(x+.5)*100}%`);el.style.setProperty('--light-y',`${(y+.5)*100}%`);});
      },{passive:true});
      el.addEventListener('pointerleave',()=>{cancelAnimationFrame(id);id=0;el.style.setProperty('--tilt-x','0deg');el.style.setProperty('--tilt-y','0deg');});
    });
  }
  bindHover();
  const portrait = document.querySelector('#portrait');
  const ticker = document.querySelector('.ticker > div');
  let queued=false;
  function scrollFrame(){
    queued=false;
    if(preference.matches)return;
    const stage=document.querySelector('.portrait-stage').getBoundingClientRect();
    if(stage.bottom>0&&stage.top<innerHeight){
      const shift=Math.max(-14,Math.min(14,(innerHeight*.4-stage.top)*.035));
      portrait.style.transform=`translate3d(0,${shift}px,0) scale(1.075)`;
    }
    const r=ticker.getBoundingClientRect();
    if(r.bottom>0&&r.top<innerHeight)ticker.style.transform=`translate3d(${Math.max(-24,Math.min(24,(innerHeight*.5-r.top)*.045))}px,0,0)`;
  }
  addEventListener('scroll',()=>{if(!queued&&!preference.matches){queued=true;requestAnimationFrame(scrollFrame)}},{passive:true});
  preference.addEventListener('change',()=>{
    if(preference.matches){running.forEach(a=>a.cancel());portrait.style.transform='';ticker.style.transform='';}
    else scrollFrame();
  });
  scrollFrame();
})();
