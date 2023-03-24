<template lang="pug">
header.flex.items-center.mb-3.h-12.text-white.text-xl.sticky.inset-x-0.top-0.shadow-lg.shadow-zinc-400.bg-gradient-to-r.from-sky-600.to-gray-700.transition-color.ease-in
  .container.mx-auto.px-4
    nav.flex.items-center.justify-between
      a(href="#!").h-6.w-6.mr-2.pl-6.bg-white.
        Logo
      .flex
        a(href="#!", class="hover:ripple-bg-red-800 active:bg-red-700").px-6.py-2.transition-color.duration-500.ease-in-out Каталог
        a(href="#!", class="hover:ripple-bg-red-800 active:bg-red-700").px-6.py-2.transition-color.duration-500.ease-in-out Новости
        a(href="#!", class="hover:ripple-bg-red-800 active:bg-red-700").px-6.py-2.transition-color.duration-500.ease-in-out Контакты
        ButtonComponent.ml-4
</template>
