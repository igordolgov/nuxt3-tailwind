<template lang="pug">
.flex.items-center.justify-center.min-w-screen.min-h-screen.bg-gradient-to-r.from-indigo-600.to-blue-400
  .p-6.bg-white.rounded-lg.shadow-xl
    .grid.grid-cols-1.text-center
      h1.font-bold.text-sky-700(class="text-[192px]") 404
      h6.mb-2.text-2xl.font-bold.text-center.text-gray-800(class="md:text-3xl")
        span.text-black.text-xl Ой! Страница не найдена
      p.mb-8.text-center.text-gray-500(class="md:text-lg").
        Страница, которую вы ищете, не существует
      Nuxt-link(to="/" type="button" data-te-ripple-init data-te-ripple-color="light" class="inline-block rounded bg-sky px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-100 ease-in-out hover:bg-sky-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:ripple-bg-sky-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-sky-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]").border.border-blue-500.bg-sky-700.text-white.rounded-md.px-2.py-4.mt-1.transition.duration-400.ease.select-none Домой
</template>
