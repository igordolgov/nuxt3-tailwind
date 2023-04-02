<template lang="pug">
aside(class="w-[100px]")
    .mb-4.text-xl.text-stone-800.font-bold.border-stone-300(class="w-[190px] border-b-[1px]").
        Каталог:
    ul
        li
            NuxtLink.link(to="/MotorsPage")
                .text-xl.mb-2.card Моторы
            NuxtLink.link(to="/PropellersPage")
                .text-xl.mb-2.card Пропеллеры
            NuxtLink.link(to="/StartersPage")
                .text-xl.mb-2.card Стартеры
</template>

<style lang="sass">
.link:hover
    color: #0085c7
</style>