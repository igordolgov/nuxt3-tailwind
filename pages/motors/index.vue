<template lang="pug">
main.container.mx-auto.px-4.min-h-screen
    h1.text-2xl.font-bold.card Моторы
    .grid.grid-cols-1.gap-4.mb-8(class="sm:grid-cols-3 lg:grid-cols-6")
        NuxtLink.p-4.rounded-xl.shadow-lg.shadow-stone-400(
            v-for="item in store.motors"
            :key="item.id"
            :to="'/motors/' + item.id"
        )
            h2.mb-2.font-bold.leading-tight(class="h-[40px]") {{ item.title }}
            img(:src='item.images[0].src' :alt="item.title").w-full.h-auto.aspect-square.object-contain.bg-stone-300
            p {{ item.price }} руб.
</template>

<script setup>
// импортируем (подключаем) хранилище
import { useCardTexts } from '~~/stores/products'
// сохраняем в переменную данные из хранилища
const store = useCardTexts()
</script>