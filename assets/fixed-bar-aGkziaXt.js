
/**
 * 由 One-step Console 提供技术支持
 * Powered by One-step Console
 * https://one-step-admin.hurui.me
 */
  
import{$r as e,Cr as t,Kn as n,Kr as r,Xn as i,Yn as a,Zn as o,_r as s,an as c,br as l,cr as u,dt as d,gr as f,pr as p,rr as m,ti as h}from"./src-JHitjWEY.js";var g=m({name:`BuiltInFixedBar`,__name:`index`,props:{position:{},class:{type:[Boolean,null,String,Object,Array]}},setup(m){let g=m,_=a(()=>{let e=g.position===`top`?`fixed_bar_top`:`fixed_bar_bottom`;return`#${CSS.escape(`${u(d,``)}_${e}`)}`}),v=r(!1);return s(()=>{v.value=!0}),p(()=>{v.value=!0}),f(()=>{v.value=!1}),(r,a)=>(l(),o(n,{to:_.value,defer:``,disabled:!v.value},[i(`div`,{class:h(e(c)(`mx-auto bg-background pointer-events-auto p-4`,g.class))},[t(r.$slots,`default`)],2)],8,[`to`,`disabled`]))}});export{g as t};