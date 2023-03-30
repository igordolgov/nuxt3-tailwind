<template lang="pug">
.text-center.my-auto
  button.bg-sky-500.block.text-xs.font-medium.uppercase.text-white.rounded-md.px-4.py-2.select-none(type="button" class="hover:bg-sky-600 active:bg-sky-700").
    {{ title }}
</template>

<script>
export default {
  props: ['title']
}
</script>