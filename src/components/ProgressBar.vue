<template>
  <div class="progress-bar">
    <span
      class="current-progress"
      :style="{width:setProgress + '%'}"
    >{{ setProgress }}%</span>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    setProgress: {
      type: Number,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/scss/components/_progressBar.scss';
</style>
