
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.hurui.me
 */
    
import{f as $,p as c,e as v,Y as q,Z as G,$ as Y,G as Z,K as E,a0 as I,a1 as J,a2 as Q,a3 as W,a4 as X,a5 as ee,F as k,a6 as N,r as te,o as r,h as y,w as g,x as m,b as j,t as C,s as ae,c as u,m as x,n as D,d as P,q as h,y as H,u as w,_ as L,g as le,a as ne,a7 as se,a8 as oe,a9 as re}from"./index-mFYeOg6f.js";import{s as ie}from"./HDropdownMenu.vue_vue_type_script_setup_true_lang-FEur1JGF.js";import{_ as ue}from"./_plugin-vue_export-helper-DlAUqK2U.js";function de(t,e,l){let n=$(l==null?void 0:l.value),a=c(()=>t.value!==void 0);return[c(()=>a.value?t.value:n.value),function(i){return a.value||(n.value=i),e==null?void 0:e(i)}]}function ce(t){var e,l;let n=(e=t==null?void 0:t.form)!=null?e:t.closest("form");if(n){for(let a of n.elements)if(a!==t&&(a.tagName==="INPUT"&&a.type==="submit"||a.tagName==="BUTTON"&&a.type==="submit"||a.nodeName==="INPUT"&&a.type==="image")){a.click();return}(l=n.requestSubmit)==null||l.call(n)}}let pe=Symbol("GroupContext"),fe=v({name:"Switch",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},form:{type:String,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:null},disabled:{type:Boolean,default:!1},tabIndex:{type:Number,default:0}},inheritAttrs:!1,setup(t,{emit:e,attrs:l,slots:n,expose:a}){var i;let _=(i=t.id)!=null?i:`headlessui-switch-${q()}`,o=G(pe,null),[p,V]=de(c(()=>t.modelValue),s=>e("update:modelValue",s),c(()=>t.defaultChecked));function B(){V(!p.value)}let M=$(null),f=o===null?M:o.switchRef,z=ie(c(()=>({as:t.as,type:l.type})),f);a({el:f,$el:f});function A(s){s.preventDefault(),B()}function F(s){s.key===N.Space?(s.preventDefault(),B()):s.key===N.Enter&&ce(s.currentTarget)}function K(s){s.preventDefault()}let b=c(()=>{var s,d;return(d=(s=Y(f))==null?void 0:s.closest)==null?void 0:d.call(s,"form")});return Z(()=>{E([b],()=>{if(!b.value||t.defaultChecked===void 0)return;function s(){V(t.defaultChecked)}return b.value.addEventListener("reset",s),()=>{var d;(d=b.value)==null||d.removeEventListener("reset",s)}},{immediate:!0})}),()=>{let{name:s,value:d,form:U,tabIndex:S,...T}=t,O={checked:p.value},R={id:_,ref:f,role:"switch",type:z.value,tabIndex:S===-1?0:S,"aria-checked":p.value,"aria-labelledby":o==null?void 0:o.labelledby.value,"aria-describedby":o==null?void 0:o.describedby.value,onClick:A,onKeyup:F,onKeypress:K};return I(k,[s!=null&&p.value!=null?I(J,Q({features:W.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:p.value,form:U,disabled:T.disabled,name:s,value:d})):null,X({ourProps:R,theirProps:{...l,...ee(T,["modelValue","defaultChecked"])},slot:O,attrs:l,slots:n,name:"Switch"})])}}});const me={key:1},Ce=v({__name:"HTooltip",props:{text:{default:""},enable:{type:Boolean,default:!0}},setup(t){return(e,l)=>{const n=te("VTooltip");return e.enable?(r(),y(n,ae({key:0,"popper-triggers":["hover"]},e.$attrs),{popper:g(()=>[m(e.$slots,"text",{},()=>[j(C(e.text),1)])]),default:g(()=>[m(e.$slots,"default")]),_:3},16)):(r(),u("div",me,[m(e.$slots,"default")]))}}}),ve={class:"absolute inset-0 h-full w-full flex items-center justify-center"},Ve=v({__name:"HToggle",props:x({disabled:{type:Boolean,default:!1},onIcon:{},offIcon:{}},{modelValue:{type:Boolean},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const e=D(t,"modelValue");return(l,n)=>{const a=L;return r(),y(w(fe),{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=i=>e.value=i),disabled:l.disabled,class:h(["relative h-5 w-10 inline-flex flex-shrink-0 cursor-pointer border-2 border-transparent rounded-full p-0 vertical-middle disabled-cursor-not-allowed disabled-opacity-50 focus-outline-none focus-visible-ring-2 focus-visible-ring-offset-2 focus-visible-ring-offset-white dark-focus-visible-ring-offset-gray-900",[e.value?"bg-ui-primary":"bg-stone-3 dark-bg-stone-7"]])},{default:g(()=>[P("span",{class:h(["pointer-events-none relative inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition-margin duration-200 ease-in-out dark-bg-dark",[e.value?"ms-5":"ms-0"]])},[P("span",ve,[e.value&&l.onIcon||!e.value&&l.offIcon?(r(),y(a,{key:0,name:e.value?l.onIcon:l.offIcon,class:"h-3 w-3 text-stone-7 dark-text-stone-3"},null,8,["name"])):H("",!0)])],2)]),_:1},8,["modelValue","disabled","class"])}}}),be={},ye={class:"me-[4px] h-6 min-w-[24px] inline-flex items-center justify-center rounded bg-stone-1 px-1 text-[12px] text-dark font-medium font-sans ring-1 ring-stone-3 ring-inset last:me-0 dark-bg-dark-9 dark-text-white dark-ring-stone-7"};function ge(t,e){return r(),u("kbd",ye,[m(t.$slots,"default")])}const Be=ue(be,[["render",ge]]),he={class:"inline-flex select-none items-center justify-center of-hidden rounded-md bg-stone-3 dark-bg-stone-7"},_e=["disabled","onClick"],Se=v({__name:"HCheckList",props:x({options:{},disabled:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:x(["change"],["update:modelValue"]),setup(t,{emit:e}){const l=e,n=D(t,"modelValue");return E(n,a=>{l("change",a)}),(a,i)=>{const _=L;return r(),u("div",he,[(r(!0),u(k,null,le(a.options,o=>(r(),u("button",{key:o.value,disabled:a.disabled||o.disabled,class:h(["flex cursor-pointer items-center truncate border-size-0 bg-inherit px-2 py-1.5 text-sm disabled-cursor-not-allowed disabled-opacity-50 hover-not-disabled-bg-ui-primary hover-not-disabled-text-ui-text",{"text-ui-text bg-ui-primary":n.value===o.value}]),onClick:p=>n.value=o.value},[o.icon?(r(),y(_,{key:0,name:o.icon},null,8,["name"])):(r(),u(k,{key:1},[j(C(o.label),1)],64))],10,_e))),128))])}}}),ke={class:"relative inline-flex"},Te=v({__name:"HBadge",props:{value:{type:[String,Number,Boolean]}},setup(t){const e=t,l=c(()=>{switch(typeof e.value){case"string":return e.value.length>0;case"number":return e.value>0;case"boolean":return e.value;default:return e.value!==void 0&&e.value!==null}}),n=$({enterActiveClass:"ease-in-out duration-500",enterFromClass:"opacity-0",enterToClass:"opacity-100",leaveActiveClass:"ease-in-out duration-500",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"});return(a,i)=>(r(),u("div",ke,[m(a.$slots,"default"),ne(re,se(oe(w(n))),{default:g(()=>[w(l)?(r(),u("span",{key:0,class:h(["absolute start-[50%] top-0 z-20 whitespace-nowrap rounded-full bg-ui-primary px-1.5 text-xs text-ui-text ring-1 ring-light -translate-y-[50%] dark-ring-dark",{"-indent-9999 w-1.5 h-1.5 px-0! start-[100%]! -translate-x-[50%] rtl:translate-x-[50%] before:content-empty before:block before:bg-ui-primary before:w-full before:h-full before:rounded-full before:absolute before:start-0 before:top-0 before:animate-ping":a.value===!0}])},C(a.value),3)):H("",!0)]),_:1},16)]))}});export{Te as _,Se as a,Be as b,Ve as c,Ce as d};