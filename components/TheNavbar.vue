<template lang="pug">
header.flex.items-center.mb-3.h-12.text-white.text-xl.sticky.inset-x-0.top-0.shadow-lg.shadow-zinc-400.bg-gradient-to-r.from-sky-600.to-gray-700
  .container.mx-auto.px-4
    nav.flex.items-center.justify-between
      a.h-6.w-6.mr-2.pl-6.bg-white(href="#!").
        Logo
      .flex.gap-2(class="md:gap-2")
        a.px-6.py-2(href="#!", class="hover:bg-red-800 active:bg-red-700") Каталог
        a.px-6.py-2(href="#!", class="hover:bg-red-800 active:bg-red-700") Новости
        a.px-6.py-2(href="#!", class="hover:bg-red-800 active:bg-red-700") Контакты
</template>
