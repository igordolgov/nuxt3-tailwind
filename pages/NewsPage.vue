<template lang="pug">
.news-page
  .container.mx-auto.px-4
    h1 Страница новостей
    Nuxt-link.p-4.rounded-xl.shadow-lg.shadow-gray-500(
      v-for="item in store.starters",
      :key="item.id"
      to="/StartersPage"
)
</template>

<script setup>
// импортируем (подключаем) хранилище
import { useCardTexts } from '~~/stores/products'
// сохраняем в переменную данные из хранилища
const store = useCardTexts()
</script>
