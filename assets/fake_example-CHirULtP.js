
/**
 * 由 One-step Console 提供技术支持
 * Powered by One-step Console
 * https://one-step-admin.hurui.me
 */
  
import{$n as e,$r as t,Fr as n,Gn as r,Kr as i,Sr as a,St as o,Xn as s,br as c,er as l,ii as u,rr as d,rt as f,tr as p}from"./src-JHitjWEY.js";import{t as m}from"./page-header-iPhwR5xG.js";import{f as h}from"./index-CngQkKLg.js";import{t as g}from"./client-Dfvzj6n2.js";var _={class:`mt-4 empty:hidden`},v=d({__name:`index`,setup(d){g({icon:`i-ri:database-2-line`,title:`menu.fake`});let v=i([]);function y(){h.permission().then(e=>{v.value=e.data.permissions})}return(i,d)=>{let h=m,g=o,b=f;return c(),e(`div`,null,[p(h,{title:`假数据`,description:`通过拦截 Ajax 请求，模拟返回响应数据，可以让前端工程师独立于后端进行开发。`}),p(b,null,{default:n(()=>[p(g,{onClick:y},{default:n(()=>[...d[0]||=[l(` 测试：获取用户权限 `,-1)]]),_:1}),s(`div`,_,[(c(!0),e(r,null,a(t(v),(t,n)=>(c(),e(`div`,{key:n},u(t),1))),128))])]),_:1})])}}});export{v as default};