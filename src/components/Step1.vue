<template>
  <div class="step-view step-1">
    <div
      class="role-item"
      data-name="PO-小敏"
    >
      <div class="role">
        <img
          src="@/assets/images/role-po.png"
          alt="role"
        >
      </div>
      <div class="talk">
        <p>
          我是敏捷資訊，開發 A 組的小敏。PO 也就是產品負責人 (Product Owner)。產品負責人會負責評估產品待辦清單的價值與重要性，<span>依序排列要執行的優先順序</span>，對齊產品目標。最後排出 <span>產品待辦清單 (Product Backlog)</span> 唷！
        </p>
        <p>
          剛好我最近手邊有一個『人才招募系統』的案子，我才剛列出了『產品需求清單』。既然你都來了，來試試看 <span>調整產品優先度，排出產品待辦清單吧！</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step1'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/scss/components/_roleTalk.scss';
</style>
