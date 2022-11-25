<template>
  <div class="step-view step-6">
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
          那你來試試看，在這經典的 Scrum 流程圖中，這些流程分別代表哪一個會議呢？
        </p>
      </div>
    </div>
    <div class="scrum-workflow">
      <div class="draggable-block">
        <div class="info daily">
          <p>每日站立會議</p>
          <span>Daily Scrum</span>
        </div>
        <draggable
          :list="dailyData"
          class="original daily"
          group="item-daily"
          @change="checkPosition"
        >
          <div
            v-for="daily in dailyData"
            :key="daily.id"
            class="item item-daily"
          >
            <font-awesome-icon icon="fa-solid fa-grip-vertical" />
            <div class="info">
              <p>{{ daily.title }}</p>
              <span>{{ daily.text }}</span>
            </div>
          </div>
        </draggable>
        <draggable
          :list="dailyList"
          class="place daily"
          group="item-daily"
          @change="checkPosition"
        >
          <div
            v-for="daily in dailyList"
            :key="daily.id"
            class="item item-daily"
          >
            <font-awesome-icon icon="fa-solid fa-grip-vertical" />
            <div class="info">
              <p>{{ daily.title }}</p>
              <span>{{ daily.text }}</span>
            </div>
          </div>
        </draggable>
      </div>
      <div class="draggable-block">
        <div class="info review">
          <p>短衝檢視會議</p>
          <span>Sprint Review</span>
        </div>
        <draggable
          :list="reviewData"
          class="original review"
          group="item-review"
          @change="checkPosition"
        >
          <div
            v-for="review in reviewData"
            :key="review.id"
            class="item item-review"
          >
            <font-awesome-icon icon="fa-solid fa-grip-vertical" />
            <div class="info">
              <p>{{ review.title }}</p>
              <span>{{ review.text }}</span>
            </div>
          </div>
        </draggable>
        <draggable
          :list="reviewList"
          class="place review"
          group="item-review"
          @change="checkPosition"
        >
          <div
            v-for="review in reviewList"
            :key="review.id"
            class="item item-review"
          >
            <font-awesome-icon icon="fa-solid fa-grip-vertical" />
            <div class="info">
              <p>{{ review.title }}</p>
              <span>{{ review.text }}</span>
            </div>
          </div>
        </draggable>
      </div>
      <div class="draggable-block">
        <div class="info retrospective">
          <p>短衝自省會議</p>
          <span>Sprint Retrospective</span>
        </div>
        <draggable
          :list="retrospectiveData"
          class="original retrospective"
          group="item-retrospective"
          @change="checkPosition"
        >
          <div
            v-for="retrospective in retrospectiveData"
            :key="retrospective.id"
            class="item item-retrospective"
          >
            <font-awesome-icon icon="fa-solid fa-grip-vertical" />
            <div class="info">
              <p>{{ retrospective.title }}</p>
              <span>{{ retrospective.text }}</span>
            </div>
          </div>
        </draggable>
        <draggable
          :list="retrospectiveList"
          class="place retrospective"
          group="item-retrospective"
          @change="checkPosition"
        >
          <div
            v-for="retrospective in retrospectiveList"
            :key="retrospective.id"
            class="item item-retrospective"
          >
            <font-awesome-icon icon="fa-solid fa-grip-vertical" />
            <div class="info">
              <p>{{ retrospective.title }}</p>
              <span>{{ retrospective.text }}</span>
            </div>
          </div>
        </draggable>
      </div>
      <div class="bg-workflow">
        <h3 class="name">
          Sprint
        </h3>
        <img
          src="@/assets/images/scrum-workflow.png"
          alt="workflow"
        >
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'Step6',
  components: {
    draggable
  },
  data() {
    return {
      dragComplete: false,
      dailyData: [
        {
          id: 1,
          title: '每日站立會議',
          text: 'Daily Scrum'
        }
      ],
      reviewData: [
        {
          id: 2,
          title: '短衝檢視會議',
          text: 'Sprint Review'
        }
      ],
      retrospectiveData: [
        {
          id: 3,
          title: '短衝自省會議',
          text: 'Sprint Retrospective'
        }
      ],
      dailyList: [],
      reviewList: [],
      retrospectiveList: []
    }
  },
  watch: {
    dragComplete(val) {
      if (!val) {
        this.$emit('drag-complete', this.dragComplete)
      }
    }
  },
  methods: {
    checkPosition() {
      if (
        this.dailyList.length > 0 &&
        this.reviewList.length > 0 &&
        this.retrospectiveList.length > 0
      ) {
        this.dragComplete = true
        this.$emit('drag-complete', this.dragComplete)
      } else {
        this.dragComplete = false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/scss/components/_roleTalk.scss';
@import '@/assets/scss/components/_step6.scss';
</style>
