<template>
  <div class="layout-wrap">
    <Header />
    <nuxt-child />
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'LayoutIndex',
  components: {
    Header,
    Footer
  },
}
</script>

<style lang='scss' scoped>
.layout-wrap {
  min-width: 100vw;
  min-height: 100vh;
  background: $background-color;
}
</style>
