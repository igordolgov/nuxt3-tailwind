import{O as u,I as t,J as s,P as r,u as a,K as c,F as l,Q as m,C as i,R as w,U as g,D as _,V as f,W as S,X as h,Y as y,Z as b,_ as v,$ as k}from"./swiper-vue.2db1d5dd.js";import{u as N}from"./products.7b8232a8.js";import"./entry.a75f01dc.js";const $={class:"container mx-auto px-4"},F={class:"grid gap-1 grid-cols-4 h-[600px] 2xl:grid-cols-3"},B={class:"slide-info text-md xl:text-xl"},E={class:"font-bold"},K={key:0},A={key:1,class:"text-red-500 font-bold"},C=["src"],I={__name:"[id]",setup(H){u();const o=N();return(e,M)=>{const d=k,p=m;return i(),t("div",$,[s("div",F,[s("div",B,[s("p",E,r(a(o).motors[e.$route.params.id-1].title),1),a(o).motors[e.$route.params.id-1].quantity>0?(i(),t("p",K)):(i(),t("p",A,"Нет в наличии")),s("p",null,"Состояние: "+r(a(o).motors[e.$route.params.id-1].condition),1),s("p",null,r(a(o).motors[e.$route.params.id-1].price)+" руб.",1),s("p",null,r(a(o).motors[e.$route.params.id-1].description),1)]),c(p,{class:"cols-span-3 mb-4",modules:["SwiperAutoplay"in e?e.SwiperAutoplay:a(f),"SwiperNavigation"in e?e.SwiperNavigation:a(S),"SwiperHashNavigation"in e?e.SwiperHashNavigation:a(h),"SwiperEffectFade"in e?e.SwiperEffectFade:a(y),"SwiperKeyboard"in e?e.SwiperKeyboard:a(b),"SwiperMousewheel"in e?e.SwiperMousewheel:a(v)],"slides-per-view":1,loop:!0,effect:"fade",navigation:"",mousewheel:"",keyboard:{enabled:!0},pagination:{clickable:!0},scrollbar:{draggable:!0},autoplay:{delay:8e3,disableOnInteraction:!0}},{default:l(()=>[(i(!0),t(w,null,g(a(o).motors[e.$route.params.id-1].images,n=>(i(),_(d,{class:"object-contain",key:n.id},{default:l(()=>[s("img",{class:"object-contain",src:n.src},null,8,C)]),_:2},1024))),128))]),_:1},8,["modules"])])])}}};export{I as default};
