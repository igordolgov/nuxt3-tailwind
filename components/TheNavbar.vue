<template lang="pug">
header.flex.items-center.mb-3.h-12.text-white.text-xl.sticky.inset-x-0.top-0.shadow-lg.shadow-zinc-400.bg-gradient-to-r.from-sky-600.to-gray-700.transition-color.ease-in
  .container.mx-auto.px-4
    nav.flex.items-center.justify-between
      a(href="#!").h-6.w-6.mr-2.pl-6.bg-white.
        Logo
      .flex
        Nuxt-link(to="/", class="hover:bg-sky-600 focus:border-b-4 focus:border-white").px-6.py-2.border-b-4.border-transparent
          | Каталог
        Nuxt-link(to="NewsPage", class="hover:bg-sky-600 focus:border-b-4 focus:border-white").px-6.py-2.border-b-4.border-transparent
          | Новости
        Nuxt-link(to="#!", class="hover:bg-sky-600 focus:border-b-4 focus:border-white").px-6.py-2.border-b-4.border-transparent
          | Контакты
        ButtonComponent.ml-4(title="Кнопка")
</template>
