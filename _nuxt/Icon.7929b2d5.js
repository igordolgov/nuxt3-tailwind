import{u as Qe,f as Ue,_ as Ve}from"./entry.a75f01dc.js";import{u as Ke}from"./config.9cce607b.js";import{y as ke,z as ie,a as Ge,h as j,w as Je,a1 as We,u as m,C as _,I as ce,a2 as A,D as le,a3 as Xe,P as Ye,N as Ze}from"./swiper-vue.2db1d5dd.js";const je=Object.freeze({left:0,top:0,width:16,height:16}),Te=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Y=Object.freeze({...je,...Te});Object.freeze({...Y,body:"",hidden:!1});({...je});const Pe=Object.freeze({width:null,height:null}),Oe=Object.freeze({...Pe,...Te});function et(e,t){const n={...e};for(const r in t){const o=t[r],s=typeof o;r in Pe?(o===null||o&&(s==="string"||s==="number"))&&(n[r]=o):s===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const tt=/[\s,]+/;function nt(e,t){t.split(tt).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function ot(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(e);return isNaN(o)?0:r(o)}else if(n!==e){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let s=parseFloat(e.slice(0,e.length-n.length));return isNaN(s)?0:(s=s/o,s%1===0?r(s):0)}}return t}const rt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,st=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function ae(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const r=e.split(rt);if(r===null||!r.length)return e;const o=[];let s=r.shift(),i=st.test(s);for(;;){if(i){const c=parseFloat(s);isNaN(c)?o.push(s):o.push(Math.ceil(c*t*n)/n)}else o.push(s);if(s=r.shift(),s===void 0)return o.join("");i=!i}}const it=e=>e==="unset"||e==="undefined"||e==="none";function ct(e,t){const n={...Y,...e},r={...Oe,...t},o={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,r].forEach(w=>{const f=[],p=w.hFlip,v=w.vFlip;let b=w.rotate;p?v?b+=2:(f.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),f.push("scale(-1 1)"),o.top=o.left=0):v&&(f.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),f.push("scale(1 -1)"),o.top=o.left=0);let x;switch(b<0&&(b-=Math.floor(b/4)*4),b=b%4,b){case 1:x=o.height/2+o.top,f.unshift("rotate(90 "+x.toString()+" "+x.toString()+")");break;case 2:f.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:x=o.width/2+o.left,f.unshift("rotate(-90 "+x.toString()+" "+x.toString()+")");break}b%2===1&&(o.left!==o.top&&(x=o.left,o.left=o.top,o.top=x),o.width!==o.height&&(x=o.width,o.width=o.height,o.height=x)),f.length&&(s='<g transform="'+f.join(" ")+'">'+s+"</g>")});const i=r.width,c=r.height,l=o.width,a=o.height;let u,d;i===null?(d=c===null?"1em":c==="auto"?a:c,u=ae(d,l/a)):(u=i==="auto"?l:i,d=c===null?ae(u,a/l):c==="auto"?a:c);const h={},y=(w,f)=>{it(f)||(h[w]=f.toString())};return y("width",u),y("height",d),h.viewBox=o.left.toString()+" "+o.top.toString()+" "+l.toString()+" "+a.toString(),{attributes:h,body:s}}const lt=/\sid="(\S+)"/g,at="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let ut=0;function ft(e,t=at){const n=[];let r;for(;r=lt.exec(e);)n.push(r[1]);if(!n.length)return e;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(s=>{const i=typeof t=="function"?t(s):t+(ut++).toString(),c=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+i+o+"$3")}),e=e.replace(new RegExp(o,"g"),""),e}function dt(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)n+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function pt(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function ht(e){return'url("data:image/svg+xml,'+pt(e)+'")'}const ue={...Oe,inline:!1},gt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},mt={display:"inline-block"},U={backgroundColor:"currentColor"},Ee={backgroundColor:"transparent"},fe={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},de={webkitMask:U,mask:U,background:Ee};for(const e in de){const t=de[e];for(const n in fe)t[e+n]=fe[n]}const z={};["horizontal","vertical"].forEach(e=>{const t=e.slice(0,1)+"Flip";z[e+"-flip"]=t,z[e.slice(0,1)+"-flip"]=t,z[e+"Flip"]=t});function pe(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const yt=(e,t)=>{const n=et(ue,t),r={...gt},o=t.mode||"svg",s={},i=t.style,c=typeof i=="object"&&!(i instanceof Array)?i:{};for(let f in t){const p=t[f];if(p!==void 0)switch(f){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[f]=p===!0||p==="true"||p===1;break;case"flip":typeof p=="string"&&nt(n,p);break;case"color":s.color=p;break;case"rotate":typeof p=="string"?n[f]=ot(p):typeof p=="number"&&(n[f]=p);break;case"ariaHidden":case"aria-hidden":p!==!0&&p!=="true"&&delete r["aria-hidden"];break;default:{const v=z[f];v?(p===!0||p==="true"||p===1)&&(n[v]=!0):ue[f]===void 0&&(r[f]=p)}}}const l=ct(e,n),a=l.attributes;if(n.inline&&(s.verticalAlign="-0.125em"),o==="svg"){r.style={...s,...c},Object.assign(r,a);let f=0,p=t.id;return typeof p=="string"&&(p=p.replace(/-/g,"_")),r.innerHTML=ft(l.body,p?()=>p+"ID"+f++:"iconifyVue"),ie("svg",r)}const{body:u,width:d,height:h}=e,y=o==="mask"||(o==="bg"?!1:u.indexOf("currentColor")!==-1),w=dt(u,{...a,width:d+"",height:h+""});return r.style={...s,"--svg":ht(w),width:pe(a.width),height:pe(a.height),...mt,...y?U:Ee,...c},ie("span",r)},bt=Object.create(null),wt=ke({inheritAttrs:!1,render(){const e=this.$attrs,t=e.icon,n=typeof t=="string"?bt[t]:typeof t=="object"?t:null;return n===null||typeof n!="object"||typeof n.body!="string"?this.$slots.default?this.$slots.default():null:yt({...Y,...n},e)}}),P=/^[a-z0-9]+(-[a-z0-9]+)*$/,D=(e,t,n,r="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),l=o.pop(),a={provider:o.length>0?o[0]:r,prefix:l,name:c};return t&&!L(a)?null:a}const s=o[0],i=s.split("-");if(i.length>1){const c={provider:r,prefix:i.shift(),name:i.join("-")};return t&&!L(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:s};return t&&!L(c,n)?null:c}return null},L=(e,t)=>e?!!((e.provider===""||e.provider.match(P))&&(t&&e.prefix===""||e.prefix.match(P))&&e.name.match(P)):!1,Fe=Object.freeze({left:0,top:0,width:16,height:16}),N=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Z=Object.freeze({...Fe,...N}),V=Object.freeze({...Z,body:"",hidden:!1});function xt(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(n.rotate=r),n}function he(e,t){const n=xt(e,t);for(const r in V)r in N?r in e&&!(r in n)&&(n[r]=N[r]):r in t?n[r]=t[r]:r in e&&(n[r]=e[r]);return n}function It(e,t){const n=e.icons,r=e.aliases||Object.create(null),o=Object.create(null);function s(i){if(n[i])return o[i]=[];if(!(i in o)){o[i]=null;const c=r[i]&&r[i].parent,l=c&&s(c);l&&(o[i]=[c].concat(l))}return o[i]}return(t||Object.keys(n).concat(Object.keys(r))).forEach(s),o}function vt(e,t,n){const r=e.icons,o=e.aliases||Object.create(null);let s={};function i(c){s=he(r[c]||o[c],s)}return i(t),n.forEach(i),he(e,s)}function _e(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(o=>{t(o,null),n.push(o)});const r=It(e);for(const o in r){const s=r[o];s&&(t(o,vt(e,o,s)),n.push(o))}return n}const St={provider:"",aliases:{},not_found:{},...Fe};function q(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function Ae(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!q(e,St))return null;const n=t.icons;for(const o in n){const s=n[o];if(!o.match(P)||typeof s.body!="string"||!q(s,V))return null}const r=t.aliases||Object.create(null);for(const o in r){const s=r[o],i=s.parent;if(!o.match(P)||typeof i!="string"||!n[i]&&!r[i]||!q(s,V))return null}return t}const ge=Object.create(null);function Ct(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function C(e,t){const n=ge[e]||(ge[e]=Object.create(null));return n[t]||(n[t]=Ct(e,t))}function ee(e,t){return Ae(t)?_e(t,(n,r)=>{r?e.icons[n]=r:e.missing.add(n)}):[]}function kt(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let O=!1;function Me(e){return typeof e=="boolean"&&(O=e),O}function jt(e){const t=typeof e=="string"?D(e,!0,O):e;if(t){const n=C(t.provider,t.prefix),r=t.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function Tt(e,t){const n=D(e,!0,O);if(!n)return!1;const r=C(n.provider,n.prefix);return kt(r,n.name,t)}function Pt(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),O&&!t&&!e.prefix){let o=!1;return Ae(e)&&(e.prefix="",_e(e,(s,i)=>{i&&Tt(s,i)&&(o=!0)})),o}const n=e.prefix;if(!L({provider:t,prefix:n,name:"a"}))return!1;const r=C(t,n);return!!ee(r,e)}const Ot=Object.freeze({width:null,height:null}),Et=Object.freeze({...Ot,...N});""+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);const K=Object.create(null);function Ft(e,t){K[e]=t}function G(e){return K[e]||K[""]}function te(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const ne=Object.create(null),T=["https://api.simplesvg.com","https://api.unisvg.com"],$=[];for(;T.length>0;)T.length===1||Math.random()>.5?$.push(T.shift()):$.push(T.pop());ne[""]=te({resources:["https://api.iconify.design"].concat($)});function _t(e,t){const n=te(t);return n===null?!1:(ne[e]=n,!0)}function oe(e){return ne[e]}const At=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let me=At();function Mt(e,t){const n=oe(e);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(i=>{o=Math.max(o,i.length)});const s=t+".json?icons=";r=n.maxURL-o-n.path.length-s.length}return r}function zt(e){return e===404}const Lt=(e,t,n)=>{const r=[],o=Mt(e,t),s="icons";let i={type:s,provider:e,prefix:t,icons:[]},c=0;return n.forEach((l,a)=>{c+=l.length+1,c>=o&&a>0&&(r.push(i),i={type:s,provider:e,prefix:t,icons:[]},c=l.length),i.icons.push(l)}),r.push(i),r};function $t(e){if(typeof e=="string"){const t=oe(e);if(t)return t.path}return"/"}const Nt=(e,t,n)=>{if(!me){n("abort",424);return}let r=$t(t.provider);switch(t.type){case"icons":{const s=t.prefix,c=t.icons.join(","),l=new URLSearchParams({icons:c});r+=s+".json?"+l.toString();break}case"custom":{const s=t.uri;r+=s.slice(0,1)==="/"?s.slice(1):s;break}default:n("abort",400);return}let o=503;me(e+r).then(s=>{const i=s.status;if(i!==200){setTimeout(()=>{n(zt(i)?"abort":"next",i)});return}return o=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?n("abort",s):n("next",o)});return}setTimeout(()=>{n("success",s)})}).catch(()=>{n("next",o)})},Dt={prepare:Lt,send:Nt};function Rt(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((o,s)=>o.provider!==s.provider?o.provider.localeCompare(s.provider):o.prefix!==s.prefix?o.prefix.localeCompare(s.prefix):o.name.localeCompare(s.name));let r={provider:"",prefix:"",name:""};return e.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const s=o.provider,i=o.prefix,c=o.name,l=n[s]||(n[s]=Object.create(null)),a=l[i]||(l[i]=C(s,i));let u;c in a.icons?u=t.loaded:i===""||a.missing.has(c)?u=t.missing:u=t.pending;const d={provider:s,prefix:i,name:c};u.push(d)}),t}function ze(e,t){e.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==t))})}function Bt(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const r=e.provider,o=e.prefix;t.forEach(s=>{const i=s.icons,c=i.pending.length;i.pending=i.pending.filter(l=>{if(l.prefix!==o)return!0;const a=l.name;if(e.icons[a])i.loaded.push({provider:r,prefix:o,name:a});else if(e.missing.has(a))i.missing.push({provider:r,prefix:o,name:a});else return n=!0,!0;return!1}),i.pending.length!==c&&(n||ze([e],s.id),s.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),s.abort))})}))}let qt=0;function Ht(e,t,n){const r=qt++,o=ze.bind(null,n,r);if(!t.pending.length)return o;const s={id:r,icons:t,callback:e,abort:o};return n.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(s)}),o}function Qt(e,t=!0,n=!1){const r=[];return e.forEach(o=>{const s=typeof o=="string"?D(o,t,n):o;s&&r.push(s)}),r}var Ut={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Vt(e,t,n,r){const o=e.resources.length,s=e.random?Math.floor(Math.random()*o):e.index;let i;if(e.random){let g=e.resources.slice(0);for(i=[];g.length>1;){const I=Math.floor(Math.random()*g.length);i.push(g[I]),g=g.slice(0,I).concat(g.slice(I+1))}i=i.concat(g)}else i=e.resources.slice(s).concat(e.resources.slice(0,s));const c=Date.now();let l="pending",a=0,u,d=null,h=[],y=[];typeof r=="function"&&y.push(r);function w(){d&&(clearTimeout(d),d=null)}function f(){l==="pending"&&(l="aborted"),w(),h.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),h=[]}function p(g,I){I&&(y=[]),typeof g=="function"&&y.push(g)}function v(){return{startTime:c,payload:t,status:l,queriesSent:a,queriesPending:h.length,subscribe:p,abort:f}}function b(){l="failed",y.forEach(g=>{g(void 0,u)})}function x(){h.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),h=[]}function He(g,I,k){const F=I!=="success";switch(h=h.filter(S=>S!==g),l){case"pending":break;case"failed":if(F||!e.dataAfterTimeout)return;break;default:return}if(I==="abort"){u=k,b();return}if(F){u=k,h.length||(i.length?B():b());return}if(w(),x(),!e.random){const S=e.resources.indexOf(g.resource);S!==-1&&S!==e.index&&(e.index=S)}l="completed",y.forEach(S=>{S(k)})}function B(){if(l!=="pending")return;w();const g=i.shift();if(g===void 0){if(h.length){d=setTimeout(()=>{w(),l==="pending"&&(x(),b())},e.timeout);return}b();return}const I={status:"pending",resource:g,callback:(k,F)=>{He(I,k,F)}};h.push(I),a++,d=setTimeout(B,e.rotate),n(g,t,I.callback)}return setTimeout(B),v}function Le(e){const t={...Ut,...e};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function o(c,l,a){const u=Vt(t,c,l,(d,h)=>{r(),a&&a(d,h)});return n.push(u),u}function s(c){return n.find(l=>c(l))||null}return{query:o,find:s,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:r}}function ye(){}const H=Object.create(null);function Kt(e){if(!H[e]){const t=oe(e);if(!t)return;const n=Le(t),r={config:t,redundancy:n};H[e]=r}return H[e]}function Gt(e,t,n){let r,o;if(typeof e=="string"){const s=G(e);if(!s)return n(void 0,424),ye;o=s.send;const i=Kt(e);i&&(r=i.redundancy)}else{const s=te(e);if(s){r=Le(s);const i=e.resources?e.resources[0]:"",c=G(i);c&&(o=c.send)}}return!r||!o?(n(void 0,424),ye):r.query(t,o,n)().abort}const be="iconify2",E="iconify",$e=E+"-count",we=E+"-version",Ne=36e5,Jt=168;function J(e,t){try{return e.getItem(t)}catch{}}function re(e,t,n){try{return e.setItem(t,n),!0}catch{}}function xe(e,t){try{e.removeItem(t)}catch{}}function W(e,t){return re(e,$e,t.toString())}function X(e){return parseInt(J(e,$e))||0}const R={local:!0,session:!0},De={local:new Set,session:new Set};let se=!1;function Wt(e){se=e}let M=typeof window>"u"?{}:window;function Re(e){const t=e+"Storage";try{if(M&&M[t]&&typeof M[t].length=="number")return M[t]}catch{}R[e]=!1}function Be(e,t){const n=Re(e);if(!n)return;const r=J(n,we);if(r!==be){if(r){const c=X(n);for(let l=0;l<c;l++)xe(n,E+l.toString())}re(n,we,be),W(n,0);return}const o=Math.floor(Date.now()/Ne)-Jt,s=c=>{const l=E+c.toString(),a=J(n,l);if(typeof a=="string"){try{const u=JSON.parse(a);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>o&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&t(u,c))return!0}catch{}xe(n,l)}};let i=X(n);for(let c=i-1;c>=0;c--)s(c)||(c===i-1?(i--,W(n,i)):De[e].add(c))}function qe(){if(!se){Wt(!0);for(const e in R)Be(e,t=>{const n=t.data,r=t.provider,o=n.prefix,s=C(r,o);if(!ee(s,n).length)return!1;const i=n.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,i):i,!0})}}function Xt(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const r in R)Be(r,o=>{const s=o.data;return o.provider!==e.provider||s.prefix!==e.prefix||s.lastModified===t});return!0}function Yt(e,t){se||qe();function n(r){let o;if(!R[r]||!(o=Re(r)))return;const s=De[r];let i;if(s.size)s.delete(i=Array.from(s).shift());else if(i=X(o),!W(o,i+1))return;const c={cached:Math.floor(Date.now()/Ne),provider:e.provider,data:t};return re(o,E+i.toString(),JSON.stringify(c))}t.lastModified&&!Xt(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function Ie(){}function Zt(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,Bt(e)}))}function en(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:r}=e,o=e.iconsToLoad;delete e.iconsToLoad;let s;if(!o||!(s=G(n)))return;s.prepare(n,r,o).forEach(c=>{Gt(n,c,l=>{if(typeof l!="object")c.icons.forEach(a=>{e.missing.add(a)});else try{const a=ee(e,l);if(!a.length)return;const u=e.pendingIcons;u&&a.forEach(d=>{u.delete(d)}),Yt(e,l)}catch(a){console.error(a)}Zt(e)})})}))}const tn=(e,t)=>{const n=Qt(e,!0,Me()),r=Rt(n);if(!r.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(r.loaded,r.missing,r.pending,Ie)}),()=>{l=!1}}const o=Object.create(null),s=[];let i,c;return r.pending.forEach(l=>{const{provider:a,prefix:u}=l;if(u===c&&a===i)return;i=a,c=u,s.push(C(a,u));const d=o[a]||(o[a]=Object.create(null));d[u]||(d[u]=[])}),r.pending.forEach(l=>{const{provider:a,prefix:u,name:d}=l,h=C(a,u),y=h.pendingIcons||(h.pendingIcons=new Set);y.has(d)||(y.add(d),o[a][u].push(d))}),s.forEach(l=>{const{provider:a,prefix:u}=l;o[a][u].length&&en(l,o[a][u])}),t?Ht(t,r,s):Ie},nn=e=>new Promise((t,n)=>{const r=typeof e=="string"?D(e,!0):e;if(!r){n(e);return}tn([r||e],o=>{if(o.length&&r){const s=jt(r);if(s){t({...Z,...s});return}}n(e)})});({...Et});const ve={backgroundColor:"currentColor"},on={backgroundColor:"transparent"},Se={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Ce={webkitMask:ve,mask:ve,background:on};for(const e in Ce){const t=Ce[e];for(const n in Se)t[e+n]=Se[n]}const Q={};["horizontal","vertical"].forEach(e=>{const t=e.slice(0,1)+"Flip";Q[e+"-flip"]=t,Q[e.slice(0,1)+"-flip"]=t,Q[e+"Flip"]=t});Me(!0);Ft("",Dt);if(typeof document<"u"&&typeof window<"u"){qe();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Pt(r))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const r="IconifyProviders["+n+"] is invalid.";try{const o=t[n];if(typeof o!="object"||!o||o.resources===void 0)continue;_t(n,o)||console.error(r)}catch{console.error(r)}}}}({...Z});const rn=["width","height"],sn=ke({__name:"Icon",props:{name:{type:String,required:!0},size:{type:String,default:""}},async setup(e){var w;let t,n;const r=e,o=Qe(),s=Ke();(w=s==null?void 0:s.nuxtIcon)!=null&&w.aliases;const i=Ue("icons",()=>({})),c=Ge(!1),l=j(()=>{var f;return(((f=s.nuxtIcon)==null?void 0:f.aliases)||{})[r.name]||r.name}),a=j(()=>{var f;return(f=i.value)==null?void 0:f[l.value]}),u=j(()=>o.vueApp.component(l.value)),d=j(()=>{var p,v,b;if(!r.size&&typeof((p=s.nuxtIcon)==null?void 0:p.size)=="boolean"&&!((v=s.nuxtIcon)!=null&&v.size))return;const f=r.size||((b=s.nuxtIcon)==null?void 0:b.size)||"1em";return String(Number(f))===f?`${f}px`:f}),h=j(()=>{var f;return((f=s==null?void 0:s.nuxtIcon)==null?void 0:f.class)??"icon"});async function y(){var f;u.value||(f=i.value)!=null&&f[l.value]||(c.value=!0,i.value[l.value]=await nn(l.value).catch(()=>{}),c.value=!1)}return Je(()=>l.value,y),!u.value&&([t,n]=We(()=>y()),t=await t,n()),(f,p)=>m(c)?(_(),ce("span",{key:0,class:A(m(h)),width:m(d),height:m(d)},null,10,rn)):m(a)?(_(),le(m(wt),{key:1,icon:m(a),class:A(m(h)),width:m(d),height:m(d)},null,8,["icon","class","width","height"])):m(u)?(_(),le(Xe(m(u)),{key:2,class:A(m(h)),width:m(d),height:m(d)},null,8,["class","width","height"])):(_(),ce("span",{key:3,class:A(m(h)),style:Ze({fontSize:m(d),lineHeight:m(d),width:m(d),height:m(d)})},Ye(e.name),7))}});const un=Ve(sn,[["__scopeId","data-v-cf1ec82f"]]);export{un as default};
