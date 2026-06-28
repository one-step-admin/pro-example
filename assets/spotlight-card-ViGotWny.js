
/**
 * 由 One-step Console 提供技术支持
 * Powered by One-step Console
 * https://one-step-admin.hurui.me
 */
  
import{$n as e,$r as t,Cr as n,Kr as r,Xn as i,Yn as a,_r as o,an as s,br as c,ri as l,rr as u,ti as d}from"./src-JHitjWEY.js";var f=u({name:`BuiltInSpotlightCard`,__name:`index`,props:{gradientSize:{default:200},gradientColor:{default:`oklch(var(--primary))`},gradientOpacity:{default:.1},class:{type:[Boolean,null,String,Object,Array]},slotClass:{type:[Boolean,null,String,Object,Array]}},setup(u){let f=u,p=r(-f.gradientSize*10),m=r(-f.gradientSize*10);function h(e){let t=e.currentTarget.getBoundingClientRect();p.value=e.clientX-t.left,m.value=e.clientY-t.top}function g(){p.value=-f.gradientSize*10,m.value=-f.gradientSize*10}o(()=>{p.value=-f.gradientSize*10,m.value=-f.gradientSize*10});let _=a(()=>`radial-gradient(
    circle ${f.gradientSize}px at ${p.value}px ${m.value}px,
    ${f.gradientColor} 0%,
    rgba(0, 0, 0, 0) 100%
  )`);return(r,a)=>(c(),e(`div`,{class:d(t(s)(`group/spotlightCard relative size-full overflow-hidden border rounded-xl bg-neutral-950/[.012] dark:bg-white/5`,f.class)),onMousemove:h,onMouseleave:g},[i(`div`,{class:d(t(s)(`relative z-10`,f.slotClass))},[n(r.$slots,`default`)],2),i(`div`,{class:`rounded-xl opacity-0 pointer-events-none transition-opacity duration-300 inset-0 absolute group-hover/spotlightCard:opacity-100`,style:l({background:_.value,opacity:u.gradientOpacity})},null,4)],34))}});export{f as t};