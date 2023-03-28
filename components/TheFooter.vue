<template lang="pug">
footer.bg-neutral-600.text-center.text-neutral-200(class="dark:bg-neutral-600 dark:text-neutral-200 lg:text-left")
  .container.mx-auto.px-4
    .flex.items-center.justify-center.border-b-2.border-neutral-200.p-6(class="dark:border-neutral-500 lg:justify-between")
      .mr-12.hidden(class="lg:block")
        span Get connected with us on social networks:
      .flex.justify-center
        a(href="#!" class="dark:text-neutral-200").mr-6.text-neutral-200
          Icon(name="uil:facebook-f" size="24")
        a(href="#!" class="dark:text-neutral-200").mr-6.text-neutral-200
          Icon(name="uil:twitter" size="24")
        a(href="#!" class="dark:text-neutral-200").mr-6.text-neutral-200
          Icon(name="akar-icons:vk-fill" size="24")
        a(href="#!" class="dark:text-neutral-200").mr-6.text-neutral-200
          Icon(name="uil:instagram" size="24")
        a(href="#!" class="dark:text-neutral-200").mr-6.text-neutral-200
          Icon(name="mingcute:telegram-fill" size="24")
        a(href="#!" class="dark:text-neutral-200").mr-6.text-neutral-200
          Icon(name="uil:whatsapp" size="24")
    .mx-6.py-10.text-center(class="md:text-left")
      .grid-1.grid.gap-8(class="md:grid-cols-2 lg:grid-cols-4")
        div
          h6.mb-2.flex.items-center.justify-center.font-semibold.uppercase(class="md:justify-start")
            svg.mr-3.h-4.w-4(xmlns="http://www.w3.org/2000/svg", viewBox="0 0 24 24", fill="currentColor")
              path(d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z")
            | Tailwind ELEMENTS
          p Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        div
          h6.mb-2.flex.justify-center.font-semibold.uppercase(class="md:justify-start").
            Products
          p.mb-2
            a(href="#!" class="dark:text-neutral-200").text-gray-100 Angular
          p.mb-2
            a(href="#!" class="dark:text-neutral-200").text-gray-100 React
          p.mb-2
            a(href="#!" class="dark:text-neutral-200").text-gray-100 Vue
          p
            a(href="#!" class="dark:text-neutral-200").text-gray-100 Laravel
        div
          h6.mb-2.flex.justify-center.font-semibold.uppercase(class="md:justify-start").
            Useful links
          p.mb-2
            a(href="#!" class="dark:text-neutral-200").text-gray-100 Pricing
          p.mb-2
            a(href="#!" class="dark:text-neutral-200").text-gray-100 Settings
          p.mb-2
            a(href="#!" class="dark:text-neutral-200").text-gray-100 Orders
          p
            a(href="#!" class="dark:text-neutral-200").text-gray-100 Help
        div
          h6.mb-2.flex.justify-center.font-semibold.uppercase(class="md:justify-start").
            Contact
          p.mb-2.flex.items-center.justify-center(class="md:justify-start" title="Наш адрес")
            Icon(name="ic:baseline-home" size="24").mr-2
            | New York, NY 10012, US
          p.mb-2.flex.items-center.justify-center(class="md:justify-start" title="Написать письмо")
            Icon(name="material-symbols:mail-rounded" size="20").mr-2
            | info@example.com
          p.mb-2.flex.items-center.justify-center(class="md:justify-start" title="Позвонить")
            Icon(name="ic:baseline-phone" size="24").mr-2
            | + 01 234 567 88
          p.flex.items-center.justify-center(class="md:justify-start" title="Отправить факс")
            Icon(name="material-symbols:fax" size="24").mr-2
            | + 01 234 567 89
  .bg-neutral-800.text-center.p-6(class="dark:bg-neutral-700")
    span © 2023 Copyright:&nbsp;
    a(href="https://tailwind-elements.com/" class="dark:text-neutral-400").font-semibold.text-neutral-300.
      Tailwind Elements
</template>
