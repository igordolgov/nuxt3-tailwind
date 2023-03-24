<template lang="pug">
main.container.mx-auto.px-4.min-h-screen
  h1.text-3xl.font-bold.card Заголовок 1
  .grid.grid-cols-1.gap-4.mb-8(class="sm:grid-cols-2 lg:grid-cols-3")
    .p-6.rounded-lg.shadow-xl.shadow-zinc-300(
      v-for="item in store.cardTexts",
      :key="item.id"
    ) {{ item.text }}
  .bg-zinc-200.pt-6.pb-6
    .container.mx-auto.px-4
      h1.text-3xl.mb-4.font-bold Заголовок 2
      .grid.grid-cols-1.gap-4(class="sm:grid-cols-2 lg:grid-cols-4")
        mixin card2
          .px-6.py-4.border-2.border-zinc-300.bg-white.rounded-b-2xl
            | Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, qui veritatis sit nisi error cum saepe dolore velit? Quos vel itaque quas voluptate? Est cumque rerum non omnis mollitia suscipit.
        +card2
        +card2
        +card2
        +card2
        +card2
        +card2
  ScrollToTop
</template>

<script setup>
  // импортируем (подключаем) хранилище
  import { useCardTexts } from '~~/stores/myStore'
  // сохраняем в переменную данные из хранилища
  const store = useCardTexts()
</script>
