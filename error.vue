<template lang="pug">
.news-page.bg-red-500
  .container.mx-auto.px-4.min-h-screen.text-center
    h1 Страница ошибки
    p.text-4xl Страница не найдена
    Nuxt-link(to="/")
      ButtonComponent
  ScrollToTop
</template>