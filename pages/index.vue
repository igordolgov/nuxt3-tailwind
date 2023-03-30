<template lang="pug">
main.container.mx-auto.px-4.min-h-screen
    h1.text-3xl.font-bold.card Моторы
    .grid.grid-cols-1.gap-4.mb-8(class="sm:grid-cols-2 lg:grid-cols-4")
        .p-6.rounded-lg.shadow-xl.shadow-zinc-300(
            v-for="item in store.motors",
            :key="item.id"
        )
          img(:src="item.images[0].src" :alt="item.title")
          p {{ item.condition }} руб.
          p {{ item.price }} руб.
</template>

<script setup>
// импортируем (подключаем) хранилище
import { useCardTexts } from '~~/stores/products'
// сохраняем в переменную данные из хранилища
const store = useCardTexts()
</script>