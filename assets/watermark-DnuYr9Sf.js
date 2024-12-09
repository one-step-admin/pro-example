
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.hurui.me
 */
    
import{aD as X,N as Y,I as K,f as U,p as $,K as R}from"./index-mFYeOg6f.js";/*!
 * watermark-js-plus v1.5.7
 * (c) 2022-2024 Michael Sun
 * Released under the MIT License.
 */function J(r,t){t===void 0&&(t={});var a=t.insertAt;if(!(typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",a==="top"&&i.firstChild?i.insertBefore(e,i.firstChild):i.appendChild(e),e.styleSheet?e.styleSheet.cssText=r:e.appendChild(document.createTextNode(r))}}var Q="@keyframes watermark{0%{background-position:0 0}25%{background-position:100% 100%}50%{background-position:0 0}75%{background-position:100% -100%}to{background-position:0 0}}";J(Q);var I=function(r,t){return I=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,i){a.__proto__=i}||function(a,i){for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&(a[e]=i[e])},I(r,t)};function Z(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");I(r,t);function a(){this.constructor=r}r.prototype=t===null?Object.create(t):(a.prototype=t.prototype,new a)}var k=function(){return k=Object.assign||function(t){for(var a,i=1,e=arguments.length;i<e;i++){a=arguments[i];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},k.apply(this,arguments)};function S(r,t,a,i){function e(n){return n instanceof a?n:new a(function(o){o(n)})}return new(a||(a=Promise))(function(n,o){function l(c){try{s(i.next(c))}catch(h){o(h)}}function d(c){try{s(i.throw(c))}catch(h){o(h)}}function s(c){c.done?n(c.value):e(c.value).then(l,d)}s((i=i.apply(r,t||[])).next())})}function b(r,t){var a={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},i,e,n,o;return o={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function l(s){return function(c){return d([s,c])}}function d(s){if(i)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(i=1,e&&(n=s[0]&2?e.return:s[0]?e.throw||((n=e.return)&&n.call(e),0):e.next)&&!(n=n.call(e,s[1])).done)return n;switch(e=0,n&&(s=[s[0]&2,n.value]),s[0]){case 0:case 1:n=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,e=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(n=a.trys,!(n=n.length>0&&n[n.length-1])&&(s[0]===6||s[0]===2)){a=0;continue}if(s[0]===3&&(!n||s[1]>n[0]&&s[1]<n[3])){a.label=s[1];break}if(s[0]===6&&a.label<n[1]){a.label=n[1],n=s;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(s);break}n[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(r,a)}catch(c){s=[6,c],e=0}finally{i=n=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}}var V=function(r){return r.toDataURL("image/png",1)},N=function(r){return typeof r=="function"},x=function(r){return r===void 0},tt=function(r){return typeof r=="string"},B=function(r,t,a){t===void 0&&(t={}),a===void 0&&(a="http://www.w3.org/2000/svg");var i=document.createElementNS(a,r);for(var e in t)i.setAttribute(e,t[e]);return i},et=function(r,t,a){for(var i=[],e="",n="",o=0,l=t.length;o<l;o++){if(n=t.charAt(o),n===`
`){i.push(e),e="";continue}e+=n,r.measureText(e).width>a&&(i.push(e.substring(0,e.length-1)),e="",o--)}return i.push(e),i},at=function(r,t){return S(void 0,void 0,void 0,function(){var a,i,e,n,o,l,d,s,c;return b(this,function(h){switch(h.label){case 0:return a=B("svg",{xmlns:"http://www.w3.org/2000/svg"}),i=document.createElement("div"),i.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),i.style.cssText=`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font: `.concat(r.font,`;
  color: `).concat(t.fontColor,`;
`),i.innerHTML="<div class='rich-text-content'>".concat(t.content,"</div>"),document.body.appendChild(i),[4,it(i)];case 1:return h.sent(),e=(c=i.querySelector(".rich-text-content"))===null||c===void 0?void 0:c.getBoundingClientRect(),n=e==null?void 0:e.width,o=e==null?void 0:e.height,document.body.removeChild(i),l=t.richTextWidth||n||t.width,d=t.richTextHeight||o||t.height,a.setAttribute("width",l.toString()),a.setAttribute("height",d.toString()),s=B("foreignObject",{width:l.toString(),height:d.toString()}),s.appendChild(i),a.appendChild(s),[2,{element:a,width:l,height:d}]}})})};function it(r){return S(this,void 0,void 0,function(){var t,a,i,e,n;return b(this,function(o){switch(o.label){case 0:t=r.querySelectorAll("img"),a=function(l){var d,s,c,h,v;return b(this,function(u){switch(u.label){case 0:if(d=l.getAttribute("src"),!d)return[3,6];u.label=1;case 1:return u.trys.push([1,5,,6]),[4,fetch(d)];case 2:return s=u.sent(),[4,s.blob()];case 3:return c=u.sent(),[4,new Promise(function(m,p){var f=new FileReader;f.onloadend=function(){return m(f.result)},f.onerror=p,f.readAsDataURL(c)})];case 4:return h=u.sent(),tt(h)&&l.setAttribute("src",h),[3,6];case 5:return v=u.sent(),console.error("Error converting ".concat(d," to base64:"),v),[3,6];case 6:return[2]}})},i=0,e=Array.from(t),o.label=1;case 1:return i<e.length?(n=e[i],[5,a(n)]):[3,4];case 2:o.sent(),o.label=3;case 3:return i++,[3,1];case 4:return[2]}})})}var nt=function(r){var t=r.outerHTML.replace(/<(img|br|input|hr|embed)(.*?)>/g,"<$1$2/>").replace(/\n/g,"").replace(/\t/g,"").replace(/#/g,"%23");return"data:image/svg+xml;charset=utf-8,".concat(t)},y=function(r,t){return x(r)?t:r},G=function(r,t,a){t===void 0&&(t=void 0),a===void 0&&(a=void 0);var i=new Image;return i.setAttribute("crossOrigin","Anonymous"),!x(t)&&(i.width=t),!x(a)&&(i.height=a),i.src=r,new Promise(function(e){i.onload=function(){e(i)}})},rt=function(r,t,a){return Array.from({length:r},function(){return new Array(t).fill(a)})},z={width:300,height:300,rotate:45,layout:"default",auxiliaryLine:!1,translatePlacement:"middle",contentType:"text",content:"hello watermark-js-plus",textType:"fill",imageWidth:0,imageHeight:0,lineHeight:30,zIndex:2147483647,backgroundPosition:"0 0",backgroundRepeat:"repeat",fontSize:"20px",fontFamily:"sans-serif",fontStyle:"",fontVariant:"",fontColor:"#000",fontWeight:"normal",filter:"none",letterSpacing:"0px",wordSpacing:"0px",globalAlpha:.5,mode:"default",mutationObserve:!0,monitorProtection:!1,movable:!1,parent:"body",onSuccess:function(){},onBeforeDestroy:function(){},onDestroyed:function(){},onObserveError:function(){}},ot=function(r,t,a){var i=r.getContext("2d");if(i===null)throw new Error("get context error");i.font="".concat(t.fontStyle," ").concat(t.fontVariant," ").concat(t.fontWeight," ").concat(t.fontSize," ").concat(t.fontFamily),i.filter=t.filter,i.letterSpacing=t.letterSpacing,i.wordSpacing=t.wordSpacing,t!=null&&t.rotate&&(t.rotate=(360-t.rotate%360)*(Math.PI/180)),x(a.textRowMaxWidth)&&(t.textRowMaxWidth=t.width);var e={image:{rect:{width:t.imageWidth,height:t.imageHeight},position:{x:0,y:0}},textLine:{data:[],yOffsetValue:0},advancedStyleParams:{linear:{x0:0,x1:0},radial:{x0:0,y0:0,r0:0,x1:0,y1:0,r1:0},conic:{x:0,y:0,startAngle:0},pattern:{}}};switch(t.contentType){case"text":e.textLine.data=[t.content];break;case"multi-line-text":e.textLine.data=et(i,t.content,t.textRowMaxWidth);break}var n=t.width/2,o=t.height/2,l="middle",d="center";switch(!x(a==null?void 0:a.translateX)&&!x(a==null?void 0:a.translateY)?(n=a==null?void 0:a.translateX,o=a==null?void 0:a.translateY,l="top",d="left"):(e.advancedStyleParams.linear.x0=-t.width/2,e.advancedStyleParams.linear.x1=t.width/2,e.advancedStyleParams.radial.r0=0,e.advancedStyleParams.radial.r1=t.width/2),a.translatePlacement){case"top":n=t.width/2,o=0,l="top",e.advancedStyleParams.linear.x0=-t.width/2,e.advancedStyleParams.linear.x1=t.width/2,e.advancedStyleParams.radial.y0=e.textLine.data.length*t.lineHeight/2,e.advancedStyleParams.radial.y1=e.textLine.data.length*t.lineHeight/2,e.advancedStyleParams.conic.y=e.textLine.data.length*t.lineHeight/2;break;case"top-start":n=0,o=0,l="top",d="start",e.advancedStyleParams.linear.x0=0,e.advancedStyleParams.linear.x1=t.width,e.advancedStyleParams.radial.x0=t.width/2,e.advancedStyleParams.radial.y0=e.textLine.data.length*t.lineHeight/2,e.advancedStyleParams.radial.x1=t.width/2,e.advancedStyleParams.radial.y1=e.textLine.data.length*t.lineHeight/2,e.advancedStyleParams.conic.x=t.width/2,e.advancedStyleParams.conic.y=e.textLine.data.length*t.lineHeight/2;break;case"top-end":n=t.width,o=0,l="top",d="end",e.advancedStyleParams.linear.x0=0,e.advancedStyleParams.linear.x1=-t.width,e.advancedStyleParams.radial.x0=-t.width/2,e.advancedStyleParams.radial.y0=e.textLine.data.length*t.lineHeight/2,e.advancedStyleParams.radial.x1=-t.width/2,e.advancedStyleParams.radial.y1=e.textLine.data.length*t.lineHeight/2,e.advancedStyleParams.conic.x=-t.width/2,e.advancedStyleParams.conic.y=e.textLine.data.length*t.lineHeight/2;break;case"bottom":n=t.width/2,o=t.height,l="bottom",e.advancedStyleParams.linear.x0=-t.width/2,e.advancedStyleParams.linear.x1=t.width/2,e.advancedStyleParams.radial.y0=-e.textLine.data.length*t.lineHeight/2,e.advancedStyleParams.radial.y1=-e.textLine.data.length*t.lineHeight/2,e.advancedStyleParams.conic.x=0,e.advancedStyleParams.conic.y=-e.textLine.data.length*t.lineHeight/2;break;case"bottom-start":n=0,o=t.height,l="bottom",d="start",e.advancedStyleParams.linear.x0=0,e.advancedStyleParams.linear.x1=t.width,e.advancedStyleParams.radial.x0=t.width/2,e.advancedStyleParams.radial.y0=-e.textLine.data.length*t.lineHeight/2,e.advancedStyleParams.radial.x1=t.width/2,e.advancedStyleParams.radial.y1=-e.textLine.data.length*t.lineHeight/2,e.advancedStyleParams.conic.x=t.width/2,e.advancedStyleParams.conic.y=-e.textLine.data.length*t.lineHeight/2;break;case"bottom-end":n=t.width,o=t.height,l="bottom",d="end",e.advancedStyleParams.linear.x0=0,e.advancedStyleParams.linear.x1=-t.width,e.advancedStyleParams.radial.x0=-t.width/2,e.advancedStyleParams.radial.y0=-e.textLine.data.length*t.lineHeight/2,e.advancedStyleParams.radial.x1=-t.width/2,e.advancedStyleParams.radial.y1=-e.textLine.data.length*t.lineHeight/2,e.advancedStyleParams.conic.x=-t.width/2,e.advancedStyleParams.conic.y=-e.textLine.data.length*t.lineHeight/2;break;case"left":n=0,o=t.height/2,d="start",e.advancedStyleParams.linear.x0=0,e.advancedStyleParams.linear.x1=t.width,e.advancedStyleParams.radial.x0=t.width/2,e.advancedStyleParams.radial.x1=t.width/2,e.advancedStyleParams.conic.x=t.width/2,e.advancedStyleParams.conic.y=0;break;case"right":n=t.width,o=t.height/2,d="end",e.advancedStyleParams.linear.x0=0,e.advancedStyleParams.linear.x1=-t.width,e.advancedStyleParams.radial.x0=-t.width/2,e.advancedStyleParams.radial.x1=-t.width/2,e.advancedStyleParams.conic.x=-t.width/2,e.advancedStyleParams.conic.y=0;break}if(t.translateX=n,t.translateY=o,x(a==null?void 0:a.textBaseline)&&(t.textBaseline=l),x(a==null?void 0:a.textAlign)&&(t.textAlign=d),["text","multi-line-text"].includes(t.contentType))switch(t.textBaseline){case"middle":e.textLine.yOffsetValue=(e.textLine.data.length-1)*t.lineHeight/2;break;case"bottom":case"alphabetic":case"ideographic":e.textLine.yOffsetValue=(e.textLine.data.length-1)*t.lineHeight+(t.lineHeight-parseInt(t.fontSize))/2;break;case"top":case"hanging":e.textLine.yOffsetValue=-t.lineHeight/2+parseInt(t.fontSize)/2;break}return e},q=function(r){typeof window>"u"||r&&(Object.defineProperty(window,"MutationObserver",{writable:!1,configurable:!1}),Object.defineProperty(window,"requestAnimationFrame",{writable:!1,configurable:!1}))},C=function(){function r(t,a){this.props=t,this.options=a,this.canvas=r.createCanvas(this.options.width,this.options.height),this.recommendOptions=ot(this.canvas,this.options,this.props)}return r.createCanvas=function(t,a){var i,e=window.devicePixelRatio||1,n=document.createElement("canvas");return n.width=t*e,n.height=a*e,n.style.width="".concat(t,"px"),n.style.height="".concat(a,"px"),(i=n.getContext("2d"))===null||i===void 0||i.setTransform(e,0,0,e,0,0),n},r.clearCanvas=function(t){var a=t.getContext("2d");if(a===null)throw new Error("get context error");a.restore(),a.resetTransform(),a.clearRect(0,0,t.width,t.height);var i=window.devicePixelRatio||1;a.setTransform(i,0,0,i,0,0)},r.prototype.getCanvas=function(){return this.canvas},r.prototype.clear=function(){r.clearCanvas(this.canvas)},r.prototype.draw=function(){var t=this,a=this.canvas.getContext("2d");if(a===null)throw new Error("get context error");return this.options.auxiliaryLine&&(a.beginPath(),a.rect(0,0,this.options.width,this.options.height),a.lineWidth=1,a.strokeStyle="#000",a.stroke(),a.closePath(),a.beginPath(),a.rect(this.options.translateX,this.options.translateY,1,1),a.lineWidth=1,a.strokeStyle="#f00",a.stroke(),a.closePath()),this.setStyle(a),a.save(),a.translate(this.options.translateX,this.options.translateY),a.rotate(this.options.rotate),new Promise(function(i){switch(t.options.contentType){case"text":t.drawText(a,i);break;case"image":t.drawImage(a,i);break;case"multi-line-text":t.drawMultiLineText(a,i);break;case"rich-text":t.drawRichText(a,i);break}})},r.prototype.setStyle=function(t){var a,i="fillStyle";this.options.textType==="stroke"&&(i="strokeStyle");var e=this.options.fontColor;if(!((a=this.options)===null||a===void 0)&&a.advancedStyle)switch(this.options.advancedStyle.type){case"linear":e=this.createLinearGradient(t);break;case"radial":e=this.createRadialGradient(t);break;case"conic":e=this.createConicGradient(t);break;case"pattern":e=this.createPattern(t);break}t[i]&&e&&(t[i]=e),this.options.textAlign&&(t.textAlign=this.options.textAlign),this.options.textBaseline&&(t.textBaseline=this.options.textBaseline),t.globalAlpha=this.options.globalAlpha,this.options.shadowStyle&&(t.shadowBlur=y(this.options.shadowStyle.shadowBlur,0),t.shadowColor=y(this.options.shadowStyle.shadowColor,"#00000000"),t.shadowOffsetX=y(this.options.shadowStyle.shadowOffsetX,0),t.shadowOffsetY=y(this.options.shadowStyle.shadowOffsetY,0)),N(this.options.extraDrawFunc)&&this.options.extraDrawFunc(t)},r.prototype.createLinearGradient=function(t){var a,i,e,n,o,l,d,s,c,h,v,u,m,p,f,w=t.createLinearGradient(y((e=(i=(a=this.options.advancedStyle)===null||a===void 0?void 0:a.params)===null||i===void 0?void 0:i.linear)===null||e===void 0?void 0:e.x0,this.recommendOptions.advancedStyleParams.linear.x0),y((l=(o=(n=this.options.advancedStyle)===null||n===void 0?void 0:n.params)===null||o===void 0?void 0:o.linear)===null||l===void 0?void 0:l.y0,0),y((c=(s=(d=this.options.advancedStyle)===null||d===void 0?void 0:d.params)===null||s===void 0?void 0:s.linear)===null||c===void 0?void 0:c.x1,this.recommendOptions.advancedStyleParams.linear.x1),y((u=(v=(h=this.options.advancedStyle)===null||h===void 0?void 0:h.params)===null||v===void 0?void 0:v.linear)===null||u===void 0?void 0:u.y1,0));return(f=(p=(m=this.options)===null||m===void 0?void 0:m.advancedStyle)===null||p===void 0?void 0:p.colorStops)===null||f===void 0||f.forEach(function(g){w.addColorStop(g.offset,g.color)}),w},r.prototype.createConicGradient=function(t){var a,i,e,n,o,l,d,s,c,h,v,u,m,p,f,w=t.createConicGradient(y((n=(e=(i=(a=this.options)===null||a===void 0?void 0:a.advancedStyle)===null||i===void 0?void 0:i.params)===null||e===void 0?void 0:e.conic)===null||n===void 0?void 0:n.startAngle,0),y((s=(d=(l=(o=this.options)===null||o===void 0?void 0:o.advancedStyle)===null||l===void 0?void 0:l.params)===null||d===void 0?void 0:d.conic)===null||s===void 0?void 0:s.x,this.recommendOptions.advancedStyleParams.conic.x),y((u=(v=(h=(c=this.options)===null||c===void 0?void 0:c.advancedStyle)===null||h===void 0?void 0:h.params)===null||v===void 0?void 0:v.conic)===null||u===void 0?void 0:u.y,this.recommendOptions.advancedStyleParams.conic.y));return(f=(p=(m=this.options)===null||m===void 0?void 0:m.advancedStyle)===null||p===void 0?void 0:p.colorStops)===null||f===void 0||f.forEach(function(g){w.addColorStop(g.offset,g.color)}),w},r.prototype.createRadialGradient=function(t){var a,i,e,n,o,l,d,s,c,h,v,u,m,p,f,w,g,_,P,O,E,L,T,A,W,D,H,j=t.createRadialGradient(y((n=(e=(i=(a=this.options)===null||a===void 0?void 0:a.advancedStyle)===null||i===void 0?void 0:i.params)===null||e===void 0?void 0:e.radial)===null||n===void 0?void 0:n.x0,this.recommendOptions.advancedStyleParams.radial.x0),y((s=(d=(l=(o=this.options)===null||o===void 0?void 0:o.advancedStyle)===null||l===void 0?void 0:l.params)===null||d===void 0?void 0:d.radial)===null||s===void 0?void 0:s.y0,this.recommendOptions.advancedStyleParams.radial.y0),y((u=(v=(h=(c=this.options)===null||c===void 0?void 0:c.advancedStyle)===null||h===void 0?void 0:h.params)===null||v===void 0?void 0:v.radial)===null||u===void 0?void 0:u.r0,this.recommendOptions.advancedStyleParams.radial.r0),y((w=(f=(p=(m=this.options)===null||m===void 0?void 0:m.advancedStyle)===null||p===void 0?void 0:p.params)===null||f===void 0?void 0:f.radial)===null||w===void 0?void 0:w.x1,this.recommendOptions.advancedStyleParams.radial.x1),y((O=(P=(_=(g=this.options)===null||g===void 0?void 0:g.advancedStyle)===null||_===void 0?void 0:_.params)===null||P===void 0?void 0:P.radial)===null||O===void 0?void 0:O.y1,this.recommendOptions.advancedStyleParams.radial.y1),y((A=(T=(L=(E=this.options)===null||E===void 0?void 0:E.advancedStyle)===null||L===void 0?void 0:L.params)===null||T===void 0?void 0:T.radial)===null||A===void 0?void 0:A.r1,this.recommendOptions.advancedStyleParams.radial.r1));return(H=(D=(W=this.options)===null||W===void 0?void 0:W.advancedStyle)===null||D===void 0?void 0:D.colorStops)===null||H===void 0||H.forEach(function(M){j.addColorStop(M.offset,M.color)}),j},r.prototype.createPattern=function(t){var a,i,e,n,o,l,d,s;return t.createPattern((n=(e=(i=(a=this.options)===null||a===void 0?void 0:a.advancedStyle)===null||i===void 0?void 0:i.params)===null||e===void 0?void 0:e.pattern)===null||n===void 0?void 0:n.image,((s=(d=(l=(o=this.options)===null||o===void 0?void 0:o.advancedStyle)===null||l===void 0?void 0:l.params)===null||d===void 0?void 0:d.pattern)===null||s===void 0?void 0:s.repetition)||"")},r.prototype.setText=function(t,a){var i="fillText";this.options.textType==="stroke"&&(i="strokeText"),t[i]&&t[i](a.text,a.x,a.y,a.maxWidth)},r.prototype.drawText=function(t,a){this.setText(t,{text:this.options.content,x:0,y:0-this.recommendOptions.textLine.yOffsetValue,maxWidth:this.options.textRowMaxWidth||this.options.width}),a(t.canvas)},r.prototype.drawImage=function(t,a){var i=this;G(this.options.image).then(function(e){var n=i.getImageRect(e),o=n.width,l=n.height,d=i.getDrawImagePosition(o,l);t.drawImage(e,d.x,d.y,o,l),a(t.canvas)})},r.prototype.drawMultiLineText=function(t,a){var i=this,e=this.recommendOptions.textLine.data,n=this.recommendOptions.textLine.yOffsetValue;e.forEach(function(o,l){i.setText(t,{text:o,x:0,y:i.options.lineHeight*l-n,maxWidth:i.options.textRowMaxWidth||i.options.width})}),a(t.canvas)},r.prototype.drawRichText=function(t,a){return S(this,void 0,void 0,function(){var i,e=this;return b(this,function(n){switch(n.label){case 0:return[4,at(t,this.options)];case 1:return i=n.sent(),G(nt(i.element),i.width,i.height).then(function(o){var l=e.getDrawImagePosition(o.width,o.height);t.drawImage(o,l.x,l.y,o.width,o.height),a(t.canvas)}),[2]}})})},r.prototype.getImageRect=function(t){var a={width:this.options.imageWidth||0,height:this.options.imageHeight||0};switch(!0){case(a.width!==0&&a.height===0):a.height=a.width*t.height/t.width;break;case(a.width===0&&a.height!==0):a.width=a.height*t.width/t.height;break;case(a.width===0&&a.height===0):a.width=t.width,a.height=t.height;break}return a},r.prototype.getDrawImagePosition=function(t,a){var i,e,n={x:-t/2,y:-a/2};switch(this.options.translatePlacement){case"top":n.x=-t/2,n.y=0;break;case"top-start":n.x=0,n.y=0;break;case"top-end":n.x=-t,n.y=0;break;case"bottom":n.x=-t/2,n.y=-a;break;case"bottom-start":n.x=0,n.y=-a;break;case"bottom-end":n.x=-t,n.y=-a;break;case"left":n.x=0,n.y=-a/2;break;case"right":n.x=-t,n.y=-a/2;break}return!x((i=this.props)===null||i===void 0?void 0:i.translateX)&&(n.x=0),!x((e=this.props)===null||e===void 0?void 0:e.translateY)&&(n.y=0),n},r}(),lt=function(){function r(t,a){var i,e,n,o;this.options=t,this.partialWidth=this.options.width,this.partialHeight=this.options.height,this.rows=((i=this.options.gridLayoutOptions)===null||i===void 0?void 0:i.rows)||1,this.cols=((e=this.options.gridLayoutOptions)===null||e===void 0?void 0:e.cols)||1,this.matrix=((n=this.options.gridLayoutOptions)===null||n===void 0?void 0:n.matrix)||rt(this.rows,this.cols,1),this.gap=((o=this.options.gridLayoutOptions)===null||o===void 0?void 0:o.gap)||[0,0],this.partialCanvas=a}return r.prototype.draw=function(){var t,a,i,e,n,o,l,d,s=C.createCanvas(((t=this.options.gridLayoutOptions)===null||t===void 0?void 0:t.width)||this.partialWidth*this.cols+this.gap[0]*this.cols,((a=this.options.gridLayoutOptions)===null||a===void 0?void 0:a.height)||this.partialHeight*this.rows+this.gap[1]*this.rows),c=s.getContext("2d");!((i=this.options.gridLayoutOptions)===null||i===void 0)&&i.backgroundImage&&(c==null||c.drawImage((e=this.options.gridLayoutOptions)===null||e===void 0?void 0:e.backgroundImage,0,0,(n=this.options.gridLayoutOptions)===null||n===void 0?void 0:n.width,(o=this.options.gridLayoutOptions)===null||o===void 0?void 0:o.height));for(var h=0;h<this.rows;h++)for(var v=0;v<this.cols;v++)!((d=(l=this.matrix)===null||l===void 0?void 0:l[h])===null||d===void 0)&&d[v]&&(c==null||c.drawImage(this.partialCanvas,this.partialWidth*v+this.gap[0]*v,this.partialHeight*h+this.gap[1]*h,this.partialWidth,this.partialHeight));return s},r}(),st=function(r,t){switch(r.layout){case"grid":return new lt(r,t).draw();default:return t}},dt=function(r){var t,a,i;switch(r.layout){case"grid":{var e=((t=r.gridLayoutOptions)===null||t===void 0?void 0:t.cols)||1,n=((a=r.gridLayoutOptions)===null||a===void 0?void 0:a.rows)||1,o=((i=r.gridLayoutOptions)===null||i===void 0?void 0:i.gap)||[0,0];return[r.width*e+o[0]*e,r.height*n+o[1]*n]}default:return[r.width,r.height]}},F=function(){function r(t){t===void 0&&(t={}),this.parentElement=document.body,this.isCreating=!1,this.props=t,this.options=k(k({},z),t),this.changeParentElement(this.options.parent),this.watermarkCanvas=new C(this.props,this.options),q(this.options.monitorProtection)}return r.prototype.changeOptions=function(){return S(this,arguments,void 0,function(t,a,i){return t===void 0&&(t={}),a===void 0&&(a="overwrite"),i===void 0&&(i=!0),b(this,function(e){switch(e.label){case 0:return this.initConfigData(t,a),q(this.options.monitorProtection),i?(this.remove(),[4,this.create()]):[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}})})},r.prototype.create=function(){return S(this,void 0,void 0,function(){var t,a,i,e,n,o,l,d,s,c,h,v;return b(this,function(u){switch(u.label){case 0:return this.isCreating?[2]:(this.isCreating=!0,this.validateUnique()?this.validateContent()?(t=x(this.watermarkDom),[4,(o=this.watermarkCanvas)===null||o===void 0?void 0:o.draw()]):(this.isCreating=!1,[2]):(this.isCreating=!1,[2]));case 1:if(u.sent(),this.layoutCanvas=st(this.options,(l=this.watermarkCanvas)===null||l===void 0?void 0:l.getCanvas()),a=V(this.layoutCanvas),(d=this.watermarkCanvas)===null||d===void 0||d.clear(),this.watermarkDom=document.createElement("div"),i=document.createElement("div"),this.watermarkDom.__WATERMARK__="watermark",this.watermarkDom.__WATERMARK__INSTANCE__=this,e=this.checkParentElementType(),this.watermarkDom.style.cssText=`
      z-index:`.concat(this.options.zIndex,`!important;display:block!important;visibility:visible!important;transform:none!important;scale:none!important;
      `).concat(e==="custom"?"top:0!important;bottom:0!important;left:0!important;right:0!important;height:100%!important;pointer-events:none!important;position:absolute!important;":"position:relative!important;",`
    `),n=dt(this.options),i.style.cssText=`
      display:block!important;visibility:visible!important;pointer-events:none;top:0;bottom:0;left:0;right:0;transform:none!important;scale:none!important;
      position:`.concat(e==="root"?"fixed":"absolute",`!important;-webkit-print-color-adjust:exact!important;width:100%!important;height:100%!important;
      z-index:`).concat(this.options.zIndex,"!important;background-image:url(").concat(a,")!important;background-repeat:").concat(this.options.backgroundRepeat,`!important;
      background-size:`).concat(n[0],"px ").concat(n[1],"px!important;background-position:").concat(this.options.backgroundPosition,`;
      `).concat(this.options.movable?"animation: 200s ease 0s infinite normal none running watermark !important;":"",`
    `),this.watermarkDom.appendChild(i),this.parentElement.appendChild(this.watermarkDom),this.options.mutationObserve)try{this.bindMutationObserve()}catch{(c=(s=this.options).onObserveError)===null||c===void 0||c.call(s)}return t&&((v=(h=this.options).onSuccess)===null||v===void 0||v.call(h)),this.isCreating=!1,[2]}})})},r.prototype.destroy=function(){this.remove(),this.watermarkDom=void 0},r.prototype.check=function(){return S(this,void 0,void 0,function(){return b(this,function(t){return[2,this.parentElement.contains(this.watermarkDom)]})})},r.prototype.remove=function(){var t,a,i,e,n,o,l,d;(a=(t=this.options).onBeforeDestroy)===null||a===void 0||a.call(t),(i=this.observer)===null||i===void 0||i.disconnect(),(e=this.parentObserve)===null||e===void 0||e.disconnect(),this.unbindCheckWatermarkElementEvent(),(o=(n=this.watermarkDom)===null||n===void 0?void 0:n.parentNode)===null||o===void 0||o.removeChild(this.watermarkDom),(d=(l=this.options).onDestroyed)===null||d===void 0||d.call(l)},r.prototype.initConfigData=function(t,a){var i=this;a===void 0&&(a="overwrite"),a==="append"?Object.keys(t).forEach(function(e){i.props&&(i.props[e]=t[e])}):this.props=t,this.options=k(k({},z),this.props),this.changeParentElement(this.options.parent),this.watermarkCanvas=new C(this.props,this.options)},r.prototype.changeParentElement=function(t){if(typeof t=="string"){var a=document.querySelector(t);a&&(this.parentElement=a)}else this.parentElement=t;this.parentElement||console.error("[WatermarkJsPlus]: please pass a valid parent element.")},r.prototype.validateUnique=function(){var t=!0;return Array.from(this.parentElement.childNodes).forEach(function(a){t&&Object.hasOwnProperty.call(a,"__WATERMARK__")&&(t=!1)}),t},r.prototype.validateContent=function(){switch(this.options.contentType){case"image":return Object.hasOwnProperty.call(this.options,"image");case"multi-line-text":case"rich-text":case"text":return this.options.content.length>0}},r.prototype.checkParentElementType=function(){return["html","body"].includes(this.parentElement.tagName.toLocaleLowerCase())?"root":"custom"},r.prototype.checkWatermarkElement=function(){return S(this,void 0,void 0,function(){return b(this,function(t){switch(t.label){case 0:return this.parentElement.contains(this.watermarkDom)?[3,2]:(this.remove(),[4,this.create()]);case 1:t.sent(),t.label=2;case 2:return this.bindCheckWatermarkElementEvent(),[2]}})})},r.prototype.bindMutationObserve=function(){var t=this;this.watermarkDom&&(this.bindCheckWatermarkElementEvent(),this.observer=new MutationObserver(function(a){return S(t,void 0,void 0,function(){return b(this,function(i){switch(i.label){case 0:return a.length>0?(this.remove(),[4,this.create()]):[3,2];case 1:i.sent(),i.label=2;case 2:return[2]}})})}),this.observer.observe(this.watermarkDom,{attributes:!0,childList:!0,subtree:!0,characterData:!0}),this.parentObserve=new MutationObserver(function(a){return S(t,void 0,void 0,function(){var i,e,n,o;return b(this,function(l){switch(l.label){case 0:i=0,e=a,l.label=1;case 1:return i<e.length?(n=e[i],(n==null?void 0:n.target)===this.watermarkDom||((o=n==null?void 0:n.removedNodes)===null||o===void 0?void 0:o[0])===this.watermarkDom||n.type==="childList"&&n.target===this.parentElement&&n.target.lastChild!==this.watermarkDom?(this.remove(),[4,this.create()]):[3,3]):[3,4];case 2:l.sent(),l.label=3;case 3:return i++,[3,1];case 4:return[2]}})})}),this.parentObserve.observe(this.parentElement,{attributes:!0,childList:!0,subtree:!0,characterData:!0}))},r.prototype.bindCheckWatermarkElementEvent=function(){this.unbindCheckWatermarkElementEvent(),this.checkWatermarkElementRequestID=requestAnimationFrame(this.checkWatermarkElement.bind(this))},r.prototype.unbindCheckWatermarkElementEvent=function(){x(this.checkWatermarkElementRequestID)||cancelAnimationFrame(this.checkWatermarkElementRequestID)},r}();(function(r){Z(t,r);function t(a){a===void 0&&(a={});var i={globalAlpha:.005,mode:"blind"};return r.call(this,k(k({},a),i))||this}return t.decode=function(a){var i=a.url,e=i===void 0?"":i,n=a.fillColor,o=n===void 0?"#000":n,l=a.compositeOperation,d=l===void 0?"color-burn":l,s=a.mode,c=s===void 0?"canvas":s,h=a.compositeTimes,v=h===void 0?3:h,u=a.onSuccess;if(e&&c==="canvas"){var m=new Image;m.src=e,m.addEventListener("load",function(){var p=m.width,f=m.height,w=C.createCanvas(p,f),g=w.getContext("2d");if(!g)throw new Error("get context error");g.drawImage(m,0,0,p,f),g.globalCompositeOperation=d,g.fillStyle=o;for(var _=0;_<v;_++)g.fillRect(0,0,p,f);var P=V(w);N(u)&&(u==null||u(P))})}},t})(F);const ht=X("watermark",()=>{const r=Y(),t=K(),a=U(),i=$({get(){return Object.assign({contentType:"multi-line-text",content:`One-step-admin
当前用户：${t.account}`,fontColor:r.currentColorScheme==="light"?"#000":"#fff",globalAlpha:.2,width:200,height:200},a.value)},set(o){n(o)}}),e=new F(i.value);R(i,async()=>{r.settings.app.enableWatermark&&await e.check()&&e.changeOptions(i.value)},{deep:!0}),R(()=>r.settings.app.enableWatermark,o=>{o?e.create():e.destroy()},{immediate:!0}),R(()=>r.currentColorScheme,async()=>{r.settings.app.enableWatermark&&await e.check()&&e.changeOptions(i.value)});function n(o={}){a.value=o}return{update:n}});export{ht as u};