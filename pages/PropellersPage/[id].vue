<template lang="pug">
.container.mx-auto.px-4
    .grid.gap-1.grid-cols-4(class="h-[600px] 2xl:grid-cols-3")
        .slide-info.text-md(class="2xl:text-2xl")
            p.font-bold {{ store.propellers[$route.params.id - 1].title }}
            p(v-if="store.propellers[$route.params.id - 1].quantity > 0")
            p(v-else).text-red-500.font-bold Нет в наличии
            p Состояние: {{ store.propellers[$route.params.id - 1].condition }}
            p {{ store.propellers[$route.params.id - 1].price }} руб.
            p {{ store.propellers[$route.params.id - 1].description }}
        Swiper.cols-span-3.mb-4(:modules=" [SwiperAutoplay, SwiperNavigation, SwiperHashNavigation, SwiperEffectFade, SwiperKeyboard, SwiperMousewheel] ", :slides-per-view=" 1 ", :loop=" true ", :effect="'fade' ", navigation, mousewheel, :keyboard="{enabled: true,}", :pagination=" { clickable: true } ", :scrollbar=" { draggable: true } ", :autoplay=" { delay: 8000, disableOnInteraction: true } ")
            SwiperSlide.object-contain(v-for="item in store.propellers[$route.params.id - 1].images", :key="item.id")
                img(:src=" item.src ").object-contain
</template>

<style lang="sass">
.swiper-wrapper
    height: 87vh

.swiper
    width: 954px
    height: 87vh

.swiper-slide
    text-align: center
    font-size: 38px
    font-weight: 700
    background-color: #eee
    display: flex
    justify-content: center

.swiper-cards .swiper-slide
    border-radius: 6px
    border: 1px solid black
</style>

<script setup>
import { register } from 'swiper/element/bundle';
register();
import { useCardTexts } from '~~/stores/products'
const store = useCardTexts()
</script>

