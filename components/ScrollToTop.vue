<template lang="pug">
button(type="button" @click='backTop' class="hover:bg-sky-600 active:text-white").back-top.hidden.fixed.bottom-14.right-4.z-2.cursor-pointer.bg-sky-700.text-sky-200.px-2.py-1.mt-1.rounded-md.
  Вверх
</template>

<script>
export default {
  name: 'back-top',
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    backTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    handleScroll () {
      const backTop = document.querySelector('.back-top')
      if (window.pageYOffset > 50) {
        backTop.classList.add('active')
      } else {
        backTop.classList.remove('active')
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
.back-top.active {
  display: block;
}
</style>
