<template lang="pug">
main.container.mx-auto
    .card.grid.grid-cols-3.mb-4
        .slide-info.text-lg
           p {{ store.motors[$route.params.id - 1].title }}
           p(v-if="store.motors[$route.params.id - 1].quantity > 0")
           p(v-else).text-red-500.font-bold Нет в наличии
           p Состояние: {{ store.motors[$route.params.id - 1].condition }}
           p {{ store.motors[$route.params.id - 1].price }} руб.
           p {{ store.motors[$route.params.id - 1].description }}
        Swiper(:slides-per-view="1" :loop="true" :effect="'creative'" :creative-effect="{prev:{shadow:false,translate:['-20%', 0, -1]},next:{translate:['100%',0,0]}}").cols-span-2.shadow-stone-500.shadow-xl
            SwiperSlide(v-for="item in store.motors[$route.params.id - 1].images", :key="item.id")
                img(:src="item.src")
</template>

<script setup>
import { useCardTexts } from '~~/stores/products'
const store = useCardTexts()
</script>

<style>
.card {
    height: calc(100vh - 72px);
}

.swiper-wrapper {
    width: 700px;
}

.swiper-slide {
    text-align: center;
    font-size: 38px;
    font-weight: 700;
    background-color: #eee;
    display: flex;
    justify-content: center;
}

.swiper-cards .swiper-slide {
    border-radius: 6px;
    border: 1px solid black;
}
</style>