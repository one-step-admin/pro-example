
/**
 * 由 One-step Console 提供技术支持
 * Powered by One-step Console
 * https://one-step-admin.hurui.me
 */
  
import{$r as e,Ar as t,Or as n,Qn as r,Ur as i,Ut as a,cr as o,di as s,dr as c,gt as l,ht as u,lr as d,or as f,rr as p,si as m}from"./src-BGR5flJQ.js";import{b as h}from"./index-DXFkkAVR.js";import{t as g}from"./client-Dfvzj6n2.js";var _={class:`mt-4 empty:hidden`},v=c({__name:`index`,setup(c){g({icon:`i-ri:database-2-line`,title:`menu.fake`});let v=e([]);function y(){h.permission().then(e=>{v.value=e.data.permissions})}return(e,c)=>{let h=l,g=a,b=u;return n(),f(`div`,null,[d(h,{title:`假数据`,description:`通过拦截 Ajax 请求，模拟返回响应数据，可以让前端工程师独立于后端进行开发。`}),d(b,null,{default:i(()=>[d(g,{onClick:y},{default:i(()=>[...c[0]||=[o(` 测试：获取用户权限 `,-1)]]),_:1}),p(`div`,_,[(n(!0),f(r,null,t(m(v),(e,t)=>(n(),f(`div`,{key:t},s(e),1))),128))])]),_:1})])}}});export{v as default};