<template>
  <div class="step-view step-7">
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
          哇賽新來的，你真的很幸運，今天剛好是開發 B 組的 Retro，你也見識一下，看看 Retro 都該做些什麼吧~
        </p>
        <p>
          我們會在會議裡請團隊成員提出哪些是做得好的地方、哪些可以繼續改善的地方？ 並記錄再 Confluence 中。
        </p>
        <p>
          重點在於 <span>正面表述</span>，你也思考看看，哪一些是適合 Retro 的回饋吧~
        </p>
      </div>
      <a
        href="https://www.atlassian.com/wac/software/confluence"
        target="_blank"
        class="has-pic confluence"
        title="Confluence"
      />
    </div>
    <div class="retro-wrapper">
      <div class="item done">
        <div class="shape-left" />
        <div class="shape-right" />
        <div class="inner">
          <div class="title">
            <div class="icon">
              <font-awesome-icon icon="fa-solid fa-hands-clapping" />
            </div>
            <h3>做得好的地方</h3>
          </div>
          <ul class="options">
            <li>
              <input
                id="radio1"
                v-model="radioDone"
                type="radio"
                name="radio-done"
                value="incorrect"
              >
              <label for="radio1">
                <span />
                這次我幫了很多人救火耶
              </label>
            </li>
            <li>
              <input
                id="radio2"
                v-model="radioDone"
                type="radio"
                name="radio-done"
                value="correct"
              >
              <label for="radio2">
                <span />
                大家在開發上都會互相 Cover，讓任務都有準時在時間內完成。
              </label>
              <div class="check">
                <div class="inside" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="item better">
        <div class="shape-left" />
        <div class="shape-right" />
        <div class="inner">
          <div class="title">
            <div class="icon">
              <font-awesome-icon icon="fa-solid fa-thumbs-up" />
            </div>
            <h3>有哪些可以做得更好?</h3>
          </div>
          <ul class="options">
            <li>
              <input
                id="radio3"
                v-model="radioBetter"
                type="radio"
                name="radio-better"
                value="correct"
              >
              <label for="radio3">
                <span />
                可以記錄這次的開發時間，讓預估團隊點數可以更精準。
              </label>
            </li>
            <li>
              <input
                id="radio4"
                v-model="radioBetter"
                type="radio"
                name="radio-better"
                value="incorrect"
              >
              <label for="radio4">
                <span />
                開發時間預估不準確，請後端下次改進，避免 Delay 到我。
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step7',
  data() {
    return {
      radioDone: '',
      radioBetter: '',
      doneCompleted: false,
      betterCompleted: false
    }
  },
  watch: {
    radioDone() {
      if (this.radioDone === 'correct') {
        this.doneCompleted = true
        this.$emit('done-completed', this.doneCompleted)
      } else {
        this.doneCompleted = false
        this.$emit('done-completed', this.doneCompleted)
      }
    },
    radioBetter() {
      if (this.radioBetter === 'correct') {
        this.betterCompleted = true
        this.$emit('better-completed', this.betterCompleted)
      } else {
        this.betterCompleted = false
        this.$emit('better-completed', this.betterCompleted)
      }
    }
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/scss/components/_roleTalk.scss';
@import '@/assets/scss/components/_step7.scss';
</style>
