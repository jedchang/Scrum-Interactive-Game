<template>
  <div class="scrum-vision">
    <div class="clock">
      <div class="minutes" />
      <div class="hours" />
    </div>
    <img
      src="~@/assets/images/scrum-vision.png"
      alt="scrum"
    >
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'ScrumVision',
  components: {
    Footer
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/components/_scrumVision.scss';
</style>
