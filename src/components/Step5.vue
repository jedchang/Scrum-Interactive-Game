<template>
  <div class="step-view step-5">
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
          等等等等等，你都還不知道什麼是 Sprint 吧！讓我先為你介紹一下~ 仔細聽好，等等會考考你！
        </p>
      </div>
      <a
        href="https://www.atlassian.com/wac/software/confluence"
        target="_blank"
        class="has-pic confluence"
        title="Confluence"
      />
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
          Sprint 是一個短衝，開發團隊會在這期間執行開發。在這段期間內，開發團隊舉辦每日站立會議 (Daily Scrum)，追蹤成員間的工作狀況，除了 <span>每日站立會議</span>，在 Sprint 的結束也會包含 <span>短衝檢視會議 (Sprint Review)</span>、<span>短衝自省會議 (Sprint Retrospective)</span>。
        </p>
      </div>
    </div>
    <div class="sprint-introduce">
      <div class="item daily">
        <div class="inner">
          <div class="number">
            <span>01</span>
          </div>
          <div class="title">
            <h3>每日站立會議</h3>
            <span>Daily Scrum</span>
          </div>
          <ul class="info">
            <li>每天都要進行的會議，以 15 分鐘為限制</li>
            <li class="dotted">
              昨天為團隊的短衝目標 (Sprint Goal) 做了那些進度
            </li>
            <li class="dotted">
              今天我會如何準備來幫助團隊達到短衝目標
            </li>
            <li class="dotted">
              過程中有遇到什麼問題、難題
            </li>
            <li>
              透過團隊分享，追蹤大家的工作狀況。
            </li>
          </ul>
        </div>
      </div>
      <div class="item review">
        <div class="inner">
          <div class="number">
            <span>02</span>
          </div>
          <div class="title">
            <h3>短衝檢視會議</h3>
            <span>Sprint Review</span>
          </div>
          <ul class="info">
            <li>
              用來檢視該次短衝增量的成果，以蒐集相關的回饋數據或意見。
            </li>
          </ul>
        </div>
      </div>
      <div class="item retrospective">
        <div class="inner">
          <div class="number">
            <span>03</span>
          </div>
          <div class="title">
            <h3>短衝自省會議</h3>
            <span>Sprint Retrospective</span>
          </div>
          <ul class="info">
            <li>
              團隊在自省會議裡, 會共同回顧該短衝歷程發生的事情
            </li>
            <li class="dotted">
              好的地方
            </li>
            <li class="dotted">
              可以改進的地方
            </li>
            <li class="dotted">
              如何維持我們已有的成功經驗
            </li>
            <li>
              優化工作流程、讓團隊有變得更好的機會。
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step5'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/scss/components/_roleTalk.scss';
@import '@/assets/scss/components/_step5.scss';
</style>
