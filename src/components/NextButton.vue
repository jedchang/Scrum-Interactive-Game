<template>
  <a class="btn-next">
    <slot name="btn-name">下一頁</slot>
  </a>
</template>
<script>
export default {
  name: 'NextButton'
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/components/_nextButton.scss';
</style>
