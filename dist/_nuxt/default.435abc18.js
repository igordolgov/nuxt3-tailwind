import{o as u,b as l,e as s,h as d,i as _,j as c,K as x,k as g,l as y,R as v,m as b,p as k,q as w,s as $,v as K,S as C,w as T,T as N,f as B,F as S}from"./entry.f6a673b9.js";const j={class:"w-full text-center mx-auto"},A=s("button",{class:"hover:bg-sky-800 focus:outline-none border border-blue-500 bg-transparent-500 text-sky-300 rounded-md px-2 py-1 mt-1 transition duration-400 ease select-none",type:"button"},"\u041A\u043D\u043E\u043F\u043A\u0430",-1),F=[A];function R(e,n){return u(),l("div",j,F)}const V={},H=d(V,[["render",R]]),O={class:"flex items-center mb-3 h-12 text-white text-xl sticky inset-x-0 top-0 shadow-lg shadow-zinc-400 bg-gradient-to-r from-sky-600 to-gray-700"},z={class:"container mx-auto px-4"},I={class:"flex items-center justify-between"},P=s("a",{class:"h-6 w-6 mr-2 pl-6 bg-white",href:"#!"},"Logo",-1),q={class:"flex gap-2 md:gap-2"},E=s("a",{class:"hover:bg-red-800 active:bg-red-700 px-6 py-2",href:"#!"},"\u041A\u0430\u0442\u0430\u043B\u043E\u0433",-1),L=s("a",{class:"hover:bg-red-800 active:bg-red-700 px-6 py-2",href:"#!"},"\u041D\u043E\u0432\u043E\u0441\u0442\u0438",-1),D=s("a",{class:"hover:bg-red-800 active:bg-red-700 px-6 py-2",href:"#!"},"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",-1);function G(e,n){const o=H;return u(),l("header",O,[s("div",z,[s("nav",I,[P,s("div",q,[E,L,D,_(o)])])])])}const J={},M=d(J,[["render",G]]),Q=(e,n)=>n.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,o=>{var t;return((t=e.params[o.slice(1)])==null?void 0:t.toString())||""}),U=(e,n)=>{var a;const o=n.route.matched.find(r=>{var i;return((i=r.components)==null?void 0:i.default)===n.Component.type}),t=(a=e!=null?e:o==null?void 0:o.meta.key)!=null?a:o&&Q(n.route,o);return typeof t=="function"?t(n.route):t},W=(e,n)=>({default:()=>e?c(x,e===!0?{}:e,n):n}),X=g({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:n}){const o=y();return()=>c(v,{name:e.name,route:e.route,...n},{default:t=>{var p,m,f,h;if(!t.Component)return;const a=U(e.pageKey,t),r=(m=(p=e.transition)!=null?p:t.route.meta.pageTransition)!=null?m:$,i=o.deferHydration();return K(N,r,W((h=(f=e.keepalive)!=null?f:t.route.meta.keepalive)!=null?h:T,c(C,{onPending:()=>o.callHook("page:start",t.Component),onResolve:()=>o.callHook("page:finish",t.Component).finally(i)},{default:()=>c(Y,{key:a,routeProps:t,pageKey:a,hasTransition:!!r})}))).default()}})}}),Y=g({props:["routeProps","pageKey","hasTransition"],setup(e){const n=e.pageKey,o=e.routeProps.route,t={};for(const a in e.routeProps.route)t[a]=b(()=>n===e.pageKey?e.routeProps.route[a]:o[a]);return k("_route",w(t)),()=>c(e.routeProps.Component)}}),Z={class:"flex items-center h-10 bg-zinc-600 text-white text-lg sticky inset-x-0 bottom-0"},ee=B('<div class="container mx-auto my-0 px-4"><nav class="flex items-center"></nav><div class="flex gap-2 md:gap-6"><a href="#!">\u0410\u0434\u0440\u0435\u0441</a><a href="#!">\u041D\u043E\u0432\u043E\u0441\u0442\u0438</a><a href="#!">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</a></div></div>',1),te=[ee];function ne(e,n){return u(),l("footer",Z,te)}const oe={},ae=d(oe,[["render",ne]]);function se(e,n){const o=M,t=X,a=ae;return u(),l(S,null,[_(o),_(t),_(a)],64)}const ce={},ie=d(ce,[["render",se]]);export{ie as default};
