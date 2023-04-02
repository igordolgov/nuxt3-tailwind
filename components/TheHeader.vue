<template lang="pug">
header.flex.items-center.mb-3.text-white.text-xl.sticky.inset-x-0.top-0(class="h-[90px] bg-[#2490C5]")
  .container.mx-auto.px-4
    nav.flex.items-center.justify-between
      NuxtLink(to="/").flex
        .site-logo
          img(src="/img/logo.png" alt="SKSAVIA" class="max-h-[84px]").mr-4
        NuxtLink.main-page(to="/", class="hover:bg-sky-600").px-6.py-7 Главная
        NuxtLink(to="/ProductsPage", class="hover:bg-sky-600").px-6.py-7 Каталог
        NuxtLink(to="#!", class="hover:bg-sky-600").px-6.py-7 Контакты
</template>
