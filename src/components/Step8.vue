<template>
  <div class="step-view step-8">
    <div class="congrats-wrapper">
      <div class="inner">
        <div class="rating">
          <img
            src="@/assets/images/star.png"
            alt="star"
          >
        </div>
        <div class="content">
          <ScrumVision />
          <h3>恭喜通過 Scrum 新手村</h3>
          <p>正式加入敏捷資訊的開發 A 組</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScrumVision from '@/components/ScrumVision.vue'

export default {
  name: 'Step8',
  components: {
    ScrumVision
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/scss/components/_step8.scss';
</style>
