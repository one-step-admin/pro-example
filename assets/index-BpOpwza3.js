
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.hurui.me
 */
    
import{_ as ce}from"./index.vue_vue_type_script_setup_true_lang-ChZ28WVx.js";import{_ as fe}from"./index.vue_vue_type_script_setup_true_lang-DjF5febJ.js";import{aF as k,e as A,f as $,D as X,G as Y,E as L,r as i,W as Z,A as I,u as l,o as b,c as N,a as e,w as t,b as d,m as W,n as ge,p as be,h as V,y as F,s as j,q as _e,aG as H,t as ve,aH as K,_ as Ee,B as J}from"./index-mFYeOg6f.js";import{_ as we}from"./index.vue_vue_type_script_setup_true_lang-Buj60MwG.js";import{u as Ve}from"./usePagination-Bo0a2Msc.js";import{_ as ke}from"./_plugin-vue_export-helper-DlAUqK2U.js";const y={list:m=>k.get("manager/list",{params:m,baseURL:"/mock/"}),detail:m=>k.get("manager/detail",{params:{id:m},baseURL:"/mock/"}),create:m=>k.post("manager/create",m,{baseURL:"/mock/"}),edit:m=>k.post("manager/edit",m,{baseURL:"/mock/"}),delete:m=>k.post("manager/delete",{id:m},{baseURL:"/mock/"}),passwordReset:m=>k.post("manager/password/reset",{id:m},{baseURL:"/mock/"}),changeStatus:m=>k.post("manager/change/status",m,{baseURL:"/mock/"}),check:m=>k.post("manager/check",m,{baseURL:"/mock/"})},Q=A({__name:"index",props:{id:{default:""}},setup(m,{expose:_}){const h=m,C=$(!1),v=X("formRef"),r=$({id:h.id,account:"",name:"",mobile:"",sex:"2"}),o=$({account:[{required:!0,message:"请输入帐号",trigger:"blur"}],name:[{required:!0,message:"请输入姓名",trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:(f,n,u)=>{const g={key:"mobile",value:n};r.value.id!==""&&(g.id=r.value.id),y.check(g).then(E=>{E.data.exist?u(new Error("手机号已存在")):u()})},trigger:"blur"}]});Y(()=>{r.value.id!==""&&p()});function p(){C.value=!0,y.detail(r.value.id).then(f=>{C.value=!1,r.value.account=f.data.account,r.value.name=f.data.name,r.value.mobile=f.data.mobile})}return _({submit(){return new Promise(f=>{var n;(n=v.value)==null||n.validate(u=>{u&&(r.value.id===""?y.create(r.value).then(()=>{L.success({message:"模拟新增成功",center:!0}),f()}):y.edit(r.value).then(()=>{L.success({message:"模拟编辑成功",center:!0}),f()}))})})}}),(f,n)=>{const u=i("ElInput"),g=i("ElFormItem"),E=i("ElRadioButton"),U=i("ElRadioGroup"),x=i("ElForm"),T=Z("loading");return I((b(),N("div",null,[e(x,{ref_key:"formRef",ref:v,model:l(r),rules:l(o),"label-width":"120px","label-suffix":"："},{default:t(()=>[e(g,{label:"帐号",prop:"account"},{default:t(()=>[e(u,{modelValue:l(r).account,"onUpdate:modelValue":n[0]||(n[0]=w=>l(r).account=w),placeholder:"请输入帐号"},null,8,["modelValue"])]),_:1}),e(g,{label:"姓名",prop:"name"},{default:t(()=>[e(u,{modelValue:l(r).name,"onUpdate:modelValue":n[1]||(n[1]=w=>l(r).name=w),placeholder:"请输入姓名"},null,8,["modelValue"])]),_:1}),e(g,{label:"手机号",prop:"mobile"},{default:t(()=>[e(u,{modelValue:l(r).mobile,"onUpdate:modelValue":n[2]||(n[2]=w=>l(r).mobile=w),placeholder:"请输入手机号"},null,8,["modelValue"])]),_:1}),e(g,{label:"性别",prop:"sex"},{default:t(()=>[e(U,{modelValue:l(r).sex,"onUpdate:modelValue":n[3]||(n[3]=w=>l(r).sex=w),size:"small"},{default:t(()=>[e(E,{label:"2"},{default:t(()=>n[4]||(n[4]=[d(" 保密 ")])),_:1}),e(E,{label:"1"},{default:t(()=>n[5]||(n[5]=[d(" 男 ")])),_:1}),e(E,{label:"0"},{default:t(()=>n[6]||(n[6]=[d(" 女 ")])),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])),[[T,l(C)]])}}}),ye=A({__name:"index",props:W({mode:{},id:{}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:W(["success"],["update:modelValue"]),setup(m,{emit:_}){const h=m,C=_,v=ge(m,"modelValue"),r=X("formRef"),o=be(()=>h.id===""?"新增管理员":"编辑管理员");function p(){var n;(n=r.value)==null||n.submit().then(()=>{C("success"),f()})}function f(){v.value=!1}return(n,u)=>{const g=i("ElButton"),E=i("ElDialog"),U=i("ElDrawer");return b(),N("div",null,[h.mode==="dialog"?(b(),V(E,{key:0,modelValue:v.value,"onUpdate:modelValue":u[0]||(u[0]=x=>v.value=x),title:l(o),width:"600px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:t(()=>[e(g,{size:"large",onClick:f},{default:t(()=>u[2]||(u[2]=[d(" 取消 ")])),_:1}),e(g,{type:"primary",size:"large",onClick:p},{default:t(()=>u[3]||(u[3]=[d(" 确定 ")])),_:1})]),default:t(()=>[e(Q,j({ref_key:"formRef",ref:r},n.$props),null,16)]),_:1},8,["modelValue","title"])):h.mode==="drawer"?(b(),V(U,{key:1,modelValue:v.value,"onUpdate:modelValue":u[1]||(u[1]=x=>v.value=x),title:l(o),size:"600px","close-on-click-modal":!1,"destroy-on-close":""},{footer:t(()=>[e(g,{size:"large",onClick:f},{default:t(()=>u[4]||(u[4]=[d(" 取消 ")])),_:1}),e(g,{type:"primary",size:"large",onClick:p},{default:t(()=>u[5]||(u[5]=[d(" 确定 ")])),_:1})]),default:t(()=>[e(Q,j({ref_key:"formRef",ref:r},n.$props),null,16)]),_:1},8,["modelValue","title"])):F("",!0)])}}}),he=A({__name:"index",setup(m){const{pagination:_,getParams:h,onSizeChange:C,onCurrentChange:v,onSortChange:r}=Ve(),o=$({loading:!1,tableAutoHeight:!1,formMode:"dialog",formModeProps:{visible:!1,id:""},search:{account:"",name:"",mobile:"",sex:""},batch:{enable:!0,selectionDataList:[]},dataList:[]});Y(()=>{p()});function p(){o.value.loading=!0;const s={...h(),...o.value.search.account&&{account:o.value.search.account},...o.value.search.name&&{name:o.value.search.name},...o.value.search.mobile&&{mobile:o.value.search.mobile},...o.value.search.sex!==""&&{sex:o.value.search.sex}};y.list(s).then(a=>{o.value.loading=!1,o.value.dataList=a.data.list,_.value.total=a.data.total})}function f(s){C(s).then(()=>p())}function n(s=1){v(s).then(()=>p())}function u({prop:s,order:a}){r(s,a).then(()=>p())}function g(){o.value.formModeProps.id="",o.value.formModeProps.visible=!0}function E(s){o.value.formModeProps.id=s.id,o.value.formModeProps.visible=!0}function U(s){return new Promise(a=>{K.confirm(`确认${s.status?"禁用":"启用"}「${s.account}」吗？`,"确认信息").then(()=>{s.statusLoading=!0,y.changeStatus({id:s.id,status:!s.status}).then(()=>(s.statusLoading=!1,L.success({message:`模拟${s.status?"禁用":"启用"}成功`,center:!0}),a(!0))).catch(()=>(s.statusLoading=!1,a(!1)))}).catch(()=>a(!1))})}function x(s){K.confirm(`确认将「${s.account}」的密码重置为 “123456” 吗？`,"确认信息").then(()=>{y.passwordReset(s.id).then(()=>{L.success({message:"模拟重置成功",center:!0})})}).catch(()=>{})}function T(s){K.confirm(`确认删除「${s.account}」管理员吗？`,"确认信息").then(()=>{y.delete(s.id).then(()=>{p(),L.success({message:"模拟删除成功",center:!0})})}).catch(()=>{})}function w(s,a){switch(s){case"resetPassword":x(a);break;case"delete":T(a);break}}return(s,a)=>{const ee=we,G=i("ElInput"),P=i("ElFormItem"),S=i("ElRadioButton"),ae=i("ElRadioGroup"),B=Ee,M=i("ElButton"),te=i("ElForm"),oe=fe,le=i("ElDivider"),ne=i("ElSpace"),R=i("ElTableColumn"),q=i("ElTag"),se=i("ElSwitch"),O=i("ElDropdownItem"),re=i("ElDropdownMenu"),ie=i("ElDropdown"),ue=i("ElTable"),de=i("ElPagination"),me=ce,pe=Z("loading");return b(),N("div",{class:_e({"absolute-container":l(o).tableAutoHeight})},[e(ee,{title:"管理员管理",content:"页面数据为 Mock 示例数据，非真实数据。"}),e(me,null,{default:t(()=>[e(oe,{"show-toggle":!1},{default:t(({fold:c,toggle:D})=>[e(te,{model:l(o).search,size:"default","label-width":"100px","inline-message":"",inline:"",class:"search-form"},{default:t(()=>[e(P,{label:"帐号"},{default:t(()=>[e(G,{modelValue:l(o).search.account,"onUpdate:modelValue":a[0]||(a[0]=z=>l(o).search.account=z),placeholder:"请输入帐号，支持模糊查询",clearable:"",onKeydown:H(p,["enter"]),onClear:p},null,8,["modelValue"])]),_:1}),e(P,{label:"姓名"},{default:t(()=>[e(G,{modelValue:l(o).search.name,"onUpdate:modelValue":a[1]||(a[1]=z=>l(o).search.name=z),placeholder:"请输入姓名，支持模糊查询",clearable:"",onKeydown:H(p,["enter"]),onClear:p},null,8,["modelValue"])]),_:1}),I(e(P,{label:"手机号"},{default:t(()=>[e(G,{modelValue:l(o).search.mobile,"onUpdate:modelValue":a[2]||(a[2]=z=>l(o).search.mobile=z),placeholder:"请输入手机号",clearable:"",onKeydown:H(p,["enter"]),onClear:p},null,8,["modelValue"])]),_:2},1536),[[J,!c]]),I(e(P,{label:"性别"},{default:t(()=>[e(ae,{modelValue:l(o).search.sex,"onUpdate:modelValue":a[3]||(a[3]=z=>l(o).search.sex=z),onChange:p},{default:t(()=>[e(S,{label:""},{default:t(()=>a[6]||(a[6]=[d(" 全部 ")])),_:1}),e(S,{label:"1"},{default:t(()=>a[7]||(a[7]=[d(" 男 ")])),_:1}),e(S,{label:"0"},{default:t(()=>a[8]||(a[8]=[d(" 女 ")])),_:1}),e(S,{label:"2"},{default:t(()=>a[9]||(a[9]=[d(" 保密 ")])),_:1})]),_:1},8,["modelValue"])]),_:2},1536),[[J,!c]]),e(P,null,{default:t(()=>[e(M,{type:"primary",onClick:p},{icon:t(()=>[e(B,{name:"i-ep:search"})]),default:t(()=>[a[10]||(a[10]=d(" 筛选 "))]),_:1}),e(M,{link:"",onClick:D},{icon:t(()=>[e(B,{name:c?"i-ep:caret-bottom":"i-ep:caret-top"},null,8,["name"])]),default:t(()=>[d(" "+ve(c?"展开":"收起"),1)]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["model"])]),_:1}),e(le,{"border-style":"dashed"}),e(ne,{wrap:""},{default:t(()=>[e(M,{type:"primary",size:"default",onClick:g},{icon:t(()=>[e(B,{name:"i-ep:plus"})]),default:t(()=>[a[11]||(a[11]=d(" 新增 "))]),_:1}),l(o).batch.enable?(b(),V(M,{key:0,size:"default",disabled:!l(o).batch.selectionDataList.length},{default:t(()=>a[12]||(a[12]=[d(" 批量操作 ")])),_:1},8,["disabled"])):F("",!0)]),_:1}),I((b(),V(ue,{class:"my-4",data:l(o).dataList,stripe:"","highlight-current-row":"",border:"",height:"100%",onSortChange:u,onSelectionChange:a[4]||(a[4]=c=>l(o).batch.selectionDataList=c)},{default:t(()=>[l(o).batch.enable?(b(),V(R,{key:0,type:"selection",align:"center",fixed:""})):F("",!0),e(R,{prop:"account",sortable:"",label:"帐号"}),e(R,{prop:"name",label:"姓名",width:"100",align:"center"}),e(R,{prop:"sex",label:"性别",width:"100",align:"center"},{default:t(c=>[c.row.sex===1?(b(),V(q,{key:0,type:"success",size:"small"},{default:t(()=>a[13]||(a[13]=[d(" 男 ")])),_:1})):c.row.sex===0?(b(),V(q,{key:1,type:"warning",size:"small"},{default:t(()=>a[14]||(a[14]=[d(" 女 ")])),_:1})):(b(),V(q,{key:2,type:"info",size:"small"},{default:t(()=>a[15]||(a[15]=[d(" 保密 ")])),_:1}))]),_:1}),e(R,{prop:"mobile",label:"手机号",width:"150",align:"center"}),e(R,{label:"状态",width:"100",align:"center"},{default:t(c=>[e(se,{modelValue:c.row.status,"onUpdate:modelValue":D=>c.row.status=D,loading:c.row.statusLoading,"inline-prompt":"","active-text":"启用","inactive-text":"禁用","before-change":()=>U(c.row)},null,8,["modelValue","onUpdate:modelValue","loading","before-change"])]),_:1}),e(R,{label:"操作",width:"200",align:"center",fixed:"right"},{default:t(c=>[e(M,{type:"primary",size:"small",plain:"",onClick:D=>E(c.row)},{default:t(()=>a[16]||(a[16]=[d(" 编辑 ")])),_:2},1032,["onClick"]),e(ie,{onCommand:D=>w(D,c.row)},{dropdown:t(()=>[e(re,null,{default:t(()=>[e(O,{command:"resetPassword"},{default:t(()=>a[18]||(a[18]=[d(" 重置密码 ")])),_:1}),e(O,{command:"delete",divided:""},{default:t(()=>a[19]||(a[19]=[d(" 删除 ")])),_:1})]),_:1})]),default:t(()=>[e(M,{size:"small"},{default:t(()=>[a[17]||(a[17]=d(" 更多操作 ")),e(B,{name:"i-ep:arrow-down",class:"el-icon--right"})]),_:1})]),_:2},1032,["onCommand"])]),_:1})]),_:1},8,["data"])),[[pe,l(o).loading]]),e(de,{"current-page":l(_).page,total:l(_).total,"page-size":l(_).size,"page-sizes":l(_).sizes,layout:l(_).layout,"hide-on-single-page":!1,class:"pagination",background:"",onCurrentChange:n,onSizeChange:f},null,8,["current-page","total","page-size","page-sizes","layout"])]),_:1}),l(o).formMode==="dialog"||l(o).formMode==="drawer"?(b(),V(ye,{key:0,id:l(o).formModeProps.id,modelValue:l(o).formModeProps.visible,"onUpdate:modelValue":a[5]||(a[5]=c=>l(o).formModeProps.visible=c),mode:l(o).formMode,onSuccess:p},null,8,["id","modelValue","mode"])):F("",!0)],2)}}}),Ue=ke(he,[["__scopeId","data-v-80966f8d"]]);export{Ue as default};