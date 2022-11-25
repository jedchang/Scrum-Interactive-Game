<template>
  <div id="main">
    <div class="logo">
      <div class="clock">
        <div class="minutes" />
        <div class="hours" />
      </div>
      <img
        src="~@/assets/images/loading-scrum.png"
        alt="loading"
      >
    </div>
    <div class="loader" />
    <ProgressBar
      v-if="step !== 0"
      :set-progress="currentProgress"
    />
    <div class="view-notice">
      <div class="icon">
        <div class="eye-block">
          <div class="eye-detail">
            <div class="eye" />
          </div>
        </div>
        <img
          src="~@/assets/images/scrum-vision-small.png"
          alt="icon"
        >
      </div>
      <p>建議使用 1024 x 768 以上螢幕解析度，</p>
      <p>以獲得最佳瀏覽體驗。</p>
    </div>
    <div class="container view-container">
      <div
        v-if="step === 0"
        class="home"
      >
        <div class="row">
          <div class="col-12">
            <ScrumVision />
            <div class="title">
              <h1>
                Teamwork makes the dream work!
              </h1>
              <p>
                哈囉，歡迎加入敏捷資訊！
                在正式加入專案開發之前，需要請你先了解 Scrum 的流程與精神！
                請接受挑戰任務，成功通過 Scrum 新手村的挑戰任務吧～
              </p>
              <NextButton @click.native="nextStep(1)">
                <template #btn-name>
                  開始挑戰
                </template>
              </NextButton>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="step === 1"
        class="step-block"
      >
        <Step1 />
        <div class="btn-wrapper">
          <NextButton @click.native="nextStep(2)">
            <template #btn-name>
              接受挑戰
              <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </template>
          </NextButton>
        </div>
      </div>
      <div
        v-if="step === 2"
        class="step-block"
      >
        <Step2 @product-list="getProductList" />
        <div class="btn-wrapper">
          <NextButton
            :class="{disabled : productList.length < 4}"
            @click.native="nextStep(3)"
          >
            <template
              v-if="productList.length >=4 "
              #btn-name
            >
              我完成了!
              <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </template>
            <template
              v-else
              #btn-name
            >
              尚未完成唷
            </template>
          </NextButton>
        </div>
      </div>
      <div
        v-if="step === 3"
        class="step-block"
      >
        <Step3 />
        <div class="btn-wrapper">
          <NextButton @click.native="nextStep(4)">
            <template #btn-name>
              沒問題，我來挑戰!
              <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </template>
          </NextButton>
        </div>
      </div>
      <div
        v-if="step === 4"
        class="step-block"
      >
        <Step4
          @sprint-list="getSprintList"
          @current-point="getCurrentPoint"
          @point-exceed="getPointExceed"
        />
        <div class="btn-wrapper">
          <NextButton
            :class="{disabled : currentPoint === 0 && sprintList.length <=0 || pointExceed}"
            @click.native="nextStep(5)"
          >
            <template
              v-if=" currentPoint > 0 && !pointExceed && sprintList.length > 0"
              #btn-name
            >
              準備好了! 開始 Sprint
              <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </template>
            <template
              v-else-if="currentPoint >= 20"
              #btn-name
            >
              請在嘗試調整點數
            </template>
            <template
              v-else
              #btn-name
            >
              尚未完成唷
            </template>
          </NextButton>
        </div>
      </div>
      <div
        v-if="step === 5"
        class="step-block"
      >
        <Step5 />
        <div class="btn-wrapper">
          <NextButton @click.native="nextStep(6)">
            <template #btn-name>
              我了解了
              <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </template>
          </NextButton>
        </div>
      </div>
      <div
        v-if="step === 6"
        class="step-block"
      >
        <Step6 @drag-complete="getDragComplete" />
        <div class="btn-wrapper">
          <NextButton
            :class="{disabled : !dragComplete}"
            @click.native="nextStep(7)"
          >
            <template
              v-if="dragComplete"
              #btn-name
            >
              完成了
              <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </template>
            <template
              v-else
              #btn-name
            >
              尚未完成唷
            </template>
          </NextButton>
        </div>
      </div>
      <div
        v-if="step === 7"
        class="step-block"
      >
        <Step7
          @done-completed="getDoneCompleted"
          @better-completed="getBetterCompleted"
        />
        <div class="btn-wrapper">
          <NextButton
            :class="{disabled : !doneCompleted || !betterCompleted}"
            @click.native="nextStep(8)"
          >
            <template
              v-if="doneCompleted && betterCompleted"
              #btn-name
            >
              我想我瞭解了!
              <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </template>
            <template
              v-else
              #btn-name
            >
              尚未完成唷
            </template>
          </NextButton>
        </div>
      </div>
      <div
        v-if="step === 8"
        class="step-block"
      >
        <Step8 />
        <div class="btn-wrapper">
          <NextButton @click.native="nextStep(0)">
            <template #btn-name>
              回到首頁
              <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </template>
          </NextButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ScrumVision from '@/components/ScrumVision.vue'
import NextButton from '@/components/NextButton.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import Step1 from '@/components/Step1.vue'
import Step2 from '@/components/Step2.vue'
import Step3 from '@/components/Step3.vue'
import Step4 from '@/components/Step4.vue'
import Step5 from '@/components/Step5.vue'
import Step6 from '@/components/Step6.vue'
import Step7 from '@/components/Step7.vue'
import Step8 from '@/components/Step8.vue'

export default {
  name: 'Home',
  components: {
    ScrumVision,
    NextButton,
    ProgressBar,
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
    Step6,
    Step7,
    Step8
  },
  data() {
    return {
      step: 0,
      currentProgress: 0,
      timer: 0,
      isPrev: false,
      isNext: false,
      isCompleted: false,
      productList: [],
      sprintList: [],
      currentPoint: 0,
      pointExceed: false,
      dragComplete: false,
      doneCompleted: false,
      betterCompleted: false
    }
  },
  watch: {
    isCompleted(val) {
      if (val) {
        clearTimeout(this.timer)
        this.isCompleted = false
        this.timer = 0
      }
    },
    step(val) {
      this.currentProgress = val * 12.5
    }
  },
  mounted() {
    const loader = document.querySelector('.loader')
    loader.style.transform = 'translateX(100%)'
  },
  beforeDestroy() {
    clearTimeout(this.timer)
    this.timer = 0
  },
  methods: {
    getProductList(data) {
      this.productList = data
    },
    getSprintList(data) {
      this.sprintList = data
    },
    getCurrentPoint(data) {
      this.currentPoint = data
    },
    getPointExceed(data) {
      this.pointExceed = data
    },
    getDragComplete(data) {
      this.dragComplete = data
    },
    getDoneCompleted(data) {
      this.doneCompleted = data
    },
    getBetterCompleted(data) {
      this.betterCompleted = data
    },
    prevStep() {
      this.isPrev = true
      this.startTransition()
    },
    nextStep(number) {
      this.isNext = true
      this.startTransition(number)
      if (this.step === 8) {
        this.startTransition()
      }
    },
    async startTransition(number) {
      console.log(number)
      const loader = document.querySelector('.loader')
      loader.style.transform = 'translateX(0%)'
      const vm = this
      this.timer = await setTimeout(function () {
        loader.style.transform = 'translateX(100%)'
        document.documentElement.scrollTop = 0
        if (vm.isNext) {
          vm.step = number
          vm.isNext = false
          vm.isCompleted = true
        }
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/page/_home.scss';
</style>
