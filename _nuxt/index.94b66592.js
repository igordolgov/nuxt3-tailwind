import{_ as p}from"./nuxt-link.29b4a361.js";import{u as _}from"./products.ecda4bde.js";import{I as r,J as t,R as n,U as c,u as i,C as o,D as d,F as u,P as e}from"./swiper-vue.2db1d5dd.js";import"./entry.65adc6fb.js";const g={class:"container mx-auto px-4 min-h-screen"},h={class:"grid grid-cols-6"},b={class:"mb-8 grid col-span-5 grid-cols-4 gap-4"},f={class:"mb-2 font-bold leading-tight h-[40px]"},x=["src","alt"],m={class:"mb-2 font-bold leading-tight h-[40px]"},k=["src","alt"],P={class:"mb-2 font-bold leading-tight h-[40px]"},w=["src","alt"],F={__name:"index",setup(y){const a=_();return(B,j)=>{const l=p;return o(),r("main",g,[t("div",h,[t("div",b,[(o(!0),r(n,null,c(i(a).motors,s=>(o(),d(l,{class:"p-4 border-stone-300 border-[1px]",key:s.id,to:"/MotorsPage/"+s.id},{default:u(()=>[t("h2",f,e(s.title),1),t("img",{class:"w-full h-auto aspect-square object-contain bg-stone-200",src:s.images[0].src,alt:s.title},null,8,x),t("p",null,e(s.price)+" руб.",1)]),_:2},1032,["to"]))),128)),(o(!0),r(n,null,c(i(a).propellers,s=>(o(),d(l,{class:"p-4 border-stone-300 border-[1px]",key:s.id,to:"/PropellersPage/"+s.id},{default:u(()=>[t("h2",m,e(s.title),1),t("img",{class:"w-full h-auto aspect-square object-contain bg-stone-200",src:s.images[0].src,alt:s.title},null,8,k),t("p",null,e(s.price)+" руб.",1)]),_:2},1032,["to"]))),128)),(o(!0),r(n,null,c(i(a).starters,s=>(o(),d(l,{class:"p-4 border-stone-300 border-[1px]",key:s.id,to:"/StartersPage/"+s.id},{default:u(()=>[t("h2",P,e(s.title),1),t("img",{class:"w-full h-auto aspect-square object-contain bg-stone-200",src:s.images[0].src,alt:s.title},null,8,w),t("p",null,e(s.price)+" руб.",1)]),_:2},1032,["to"]))),128))])])])}}};export{F as default};