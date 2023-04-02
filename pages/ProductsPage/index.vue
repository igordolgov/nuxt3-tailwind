<template lang="pug">
main.container.mx-auto.px-4.min-h-screen
    .grid.grid-cols-6
        AsideComponent
        .mb-8.grid.col-span-5.grid-cols-4.gap-4
            NuxtLink.p-4.border-stone-300(
                v-for="item in store.motors"
                :key="item.id"
                :to="'/MotorsPage/' + item.id"
                class="border-[1px]"
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