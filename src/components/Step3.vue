<template>
  <div class="step-view step-3">
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
          產品待辦清單完成後，我們來召集 Scrum Master 和開發團隊共同召開短衝規劃會議 (Sprint Planning)。短衝即是一個迭代，具有<span>固定時間限制</span>，我們會在這個會議中，決定要完成哪些工作事項來達到商業需求，列出 <span>短衝待辦清單 (Sprint Backlog) </span>，由開發團隊在接下來的產品開發週期裡執行。
        </p>
      </div>
    </div>
    <div
      class="role-item"
      data-name="SM-小捷"
    >
      <div class="role">
        <img
          src="@/assets/images/role-sm.png"
          alt="role"
        >
      </div>
      <div class="talk">
        <p>
          嗨嗨 你是新來的前端吧！我是這次的 Scrum Master 小捷，我的工作主要是促成開發團隊成員協作、引導團隊進行自省會議，提升團隊成員對 Scrum 瞭解。這兩位是 Jason和 Allen，是我們開發團為的成員唷~
        </p>
        <p>目前我們團隊一次 Sprint 是兩的時間，依照我的觀察，目前我們團隊一次 Sprint 週期是兩週的時間，依照我的觀察，<span>目前團隊可以負擔的點數 (Sprint Point) 大約是 20 點</span>。</p>
      </div>
    </div>
    <div
      class="role-item reverse"
      data-name="開發-小斯"
    >
      <div class="role">
        <img
          src="@/assets/images/role-senior.png"
          alt="role"
        >
      </div>
      <div class="talk">
        <p>
          欸新來的，你應該不知道點數是什麼意思吧 哈哈 我來跟你介紹一下吧~ <span>Sprint Point 目的是為了衡量速度，是用大概花費的時間預估出的相對點數</span>。
        </p>
      </div>
    </div>
    <div
      class="role-item reverse"
      data-name="開發-小廣"
    >
      <div class="role">
        <img
          src="@/assets/images/role-junior.png"
          alt="role"
        >
      </div>
      <div class="talk">
        <p>
          沒錯，如果小斯哥說的，我這邊已經把剛剛討論好的點數標上去囉~ 你來練習把任務排到短衝待辦清單吧！
        </p>
        <p>
          By the way, 我們平常管理認識是使用 Jira 這套軟體，你有時間記得先去註冊和熟悉唷
        </p>
      </div>
      <a
        href="https://www.atlassian.com/software/jira"
        target="_blank"
        class="has-pic small jira"
        title="Jira"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step3'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/scss/components/_roleTalk.scss';
</style>
