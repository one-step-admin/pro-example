
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.hurui.me
 */
    
import{_ as $}from"./index.vue_vue_type_script_setup_true_lang-ChZ28WVx.js";import{e as b,o as r,c as d,d as w,x as y,a as o,y as g,_ as v,f as p,w as t,r as _,b as s,u as f,h as B}from"./index-mFYeOg6f.js";import{_ as E}from"./index.vue_vue_type_script_setup_true_lang-Buj60MwG.js";import{i as N}from"./logo-NdH2FlYi.js";const V={class:"chip inline-block rounded-999 bg-stone-1 px-3 vertical-mid transition-background-color dark-bg-stone-8"},z={class:"content h-8 flex items-center gap-2 text-xs"},A=b({name:"Chip",__name:"index",props:{closable:{type:Boolean}},emits:["close"],setup(x,{emit:l}){const i=l;return(a,m)=>{const e=v;return r(),d("div",V,[w("div",z,[y(a.$slots,"default"),a.closable?(r(),d("span",{key:0,class:"closable h-6 w-6 flex-center cursor-pointer rounded-1/2 bg-stone-2 text-sm text-initial transition-background-color -mr-1.5 dark-bg-stone-9 hover-op-70",onClick:m[0]||(m[0]=u=>i("close"))},[o(e,{name:"i-ep:close-bold"})])):g("",!0)])])}}}),L=b({__name:"index",setup(x){const l=p(!0),i=p(N);function a(){l.value=!1}return(m,e)=>{const u=E,n=A,c=_("ElAvatar"),k=v,C=_("ElSpace"),S=$;return r(),d("div",null,[o(u,{title:"纸片",content:"Chip"}),o(S,null,{default:t(()=>[o(C,null,{default:t(()=>[o(n,null,{default:t(()=>e[0]||(e[0]=[s(" 基础纸片 ")])),_:1}),o(n,null,{default:t(()=>[o(c,{size:"small",class:"-ml-1.5"},{default:t(()=>e[1]||(e[1]=[s(" Fa ")])),_:1}),e[2]||(e[2]=s(" 头像文字 "))]),_:1}),o(n,null,{default:t(()=>[o(c,{size:"small",class:"-ml-1.5"},{default:t(()=>[o(k,{name:"i-ep:user-filled"})]),_:1}),e[3]||(e[3]=s(" 头像图标 "))]),_:1}),o(n,null,{default:t(()=>[o(c,{src:f(i),size:"small",class:"-ml-1.5"},null,8,["src"]),e[4]||(e[4]=s(" 头像图片 "))]),_:1}),f(l)?(r(),B(n,{key:0,closable:"",onClose:a},{default:t(()=>e[5]||(e[5]=[s(" 关闭按钮 ")])),_:1})):g("",!0),o(n,{class:"c-white bg-sky!"},{default:t(()=>e[6]||(e[6]=[s(" 自定义颜色 ")])),_:1})]),_:1})]),_:1})])}}});export{L as default};