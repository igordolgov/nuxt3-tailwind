<template lang="pug">
main.container.mx-auto.px-4.min-h-screen
    h1.text-3xl.font-bold.card Моторы
    img.w-80.h-80(src='../assets/engine1-01.jpg')
    .grid.grid-cols-1.gap-4.mb-8(class="sm:grid-cols-2 lg:grid-cols-3")
        .p-6.rounded-lg.shadow-xl.shadow-zinc-300(
            v-for="item in store.motors",
            :key="item.id"
        ) {{ item.title }}
          img.w-40.h-40(src='item.images[0]' alt="item.title")
          p {{ item.price }} руб.
</template>

<script setup>
    // импортируем (подключаем) хранилище
    import { useCardTexts } from '~~/stores/myStore'
    // сохраняем в переменную данные из хранилища
    const store = useCardTexts()
</script>