import{O as u,I as i,J as s,P as t,u as a,K as c,F as n,Q as m,C as r,R as w,U as g,D as _,V as f,W as S,X as h,Y as y,Z as b,_ as v,$ as k}from"./swiper-vue.ff7f2140.js";import{u as N}from"./products.f593f4af.js";import"./entry.36ff9693.js";const $={class:"container mx-auto px-4"},F={class:"grid gap-1 grid-cols-4 h-[600px] 2xl:grid-cols-3"},B={class:"slide-info text-md 2xl:text-2xl"},E={class:"font-bold"},K={key:0},A={key:1,class:"text-red-500 font-bold"},C=["src"],I={__name:"[id]",setup(H){u();const o=N();return(e,M)=>{const p=k,d=m;return r(),i("div",$,[s("div",F,[s("div",B,[s("p",E,t(a(o).propellers[e.$route.params.id-1].title),1),a(o).propellers[e.$route.params.id-1].quantity>0?(r(),i("p",K)):(r(),i("p",A,"Нет в наличии")),s("p",null,"Состояние: "+t(a(o).propellers[e.$route.params.id-1].condition),1),s("p",null,t(a(o).propellers[e.$route.params.id-1].price)+" руб.",1),s("p",null,t(a(o).propellers[e.$route.params.id-1].description),1)]),c(d,{class:"cols-span-3 mb-4",modules:["SwiperAutoplay"in e?e.SwiperAutoplay:a(f),"SwiperNavigation"in e?e.SwiperNavigation:a(S),"SwiperHashNavigation"in e?e.SwiperHashNavigation:a(h),"SwiperEffectFade"in e?e.SwiperEffectFade:a(y),"SwiperKeyboard"in e?e.SwiperKeyboard:a(b),"SwiperMousewheel"in e?e.SwiperMousewheel:a(v)],"slides-per-view":1,loop:!0,effect:"fade",navigation:"",mousewheel:"",keyboard:{enabled:!0},pagination:{clickable:!0},scrollbar:{draggable:!0},autoplay:{delay:8e3,disableOnInteraction:!0}},{default:n(()=>[(r(!0),i(w,null,g(a(o).propellers[e.$route.params.id-1].images,l=>(r(),_(p,{class:"object-contain",key:l.id},{default:n(()=>[s("img",{class:"object-contain",src:l.src},null,8,C)]),_:2},1024))),128))]),_:1},8,["modules"])])])}}};export{I as default};
