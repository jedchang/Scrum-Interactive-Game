<template>
  <div class="step-view step-4">
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
          換你來試試看吧！ 將 <span>產品待辦清單</span> 項目放進 <span>短衝待辦清單</span> 內吧 ！ <span>點數總和不能超過團隊負擔上限 20 點唷！</span>
        </p>
      </div>
    </div>

    <div class="product-list">
      <div class="product-backlog backlog">
        <div class="title">
          <h3>Product Backlog</h3>
          <span>產品代辦清單</span>
        </div>
        <draggable
          :list="productData"
          class="list-group"
          group="list-group-item"
          @change="checkPoint"
        >
          <div
            v-for="element in productData"
            :key="element.id"
            class="list-group-item"
          >
            <font-awesome-icon icon="fa-solid fa-grip-vertical" />
            <span>{{ element.content }}</span>
            <span class="point">{{ element.point }}</span>
          </div>
        </draggable>
      </div>

      <div class="sprint-backlog backlog">
        <div class="title">
          <h3>Sprint Backlog</h3>
          <span>短衝代辦清單</span>
        </div>
        <draggable
          :list="sprintList"
          class="list-group"
          group="list-group-item"
          @change="checkPoint"
        >
          <div
            v-for="element in sprintList"
            :key="element.id"
            class="list-group-item"
          >
            <font-awesome-icon icon="fa-solid fa-grip-vertical" />
            <span>{{ element.content }}</span>
            <span class="point">{{ element.point }}</span>
          </div>
        </draggable>
        <div class="calc">
          <p
            v-if="pointExceed"
            class="exceeding"
          >
            已超過團隊負擔點數!
          </p>
          <p class="point">
            <span
              v-if="pointExceed"
              class="count warn"
            > {{ currentPoint }}</span>
            <span
              v-else
              class="count"
            > {{ currentPoint }}</span>
            點
          </p>
          /
          <p class="people">
            <span class="count">5</span>
            人
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'Step4',
  components: {
    draggable
  },
  data() {
    return {
      productData: [
        {
          id: 1,
          content: '後台職缺管理功能 (資訊上架、下架、顯示應徵者資料)',
          point: 8
        },
        {
          id: 2,
          content: '應徵者的線上履歷編輯器',
          point: 13
        },
        {
          id: 3,
          content: '前台職缺列表 (職缺詳細內容、點選可發送應徵意願)',
          point: 5
        },
        {
          id: 4,
          content: '會員系統 (登入、註冊、權限管理)',
          point: 8
        }
      ],
      sprintList: [],
      limitPoint: 20,
      currentPoint: 0,
      pointExceed: false
    }
  },
  methods: {
    getCurrentPoint() {
      return [...this.sprintList].map(item => ({
        id: item.id,
        content: item.content,
        point: item.point
      }))
    },
    calcPoint(list) {
      return list.reduce((pre, cur) => pre + cur.point, 0)
    },
    checkPoint() {
      this.currentPoint = this.calcPoint(this.getCurrentPoint())
      this.pointExceed = this.currentPoint >= this.limitPoint
      this.$emit('sprint-list', this.sprintList)
      this.$emit('current-point', this.currentPoint)
      this.$emit('point-exceed', this.pointExceed)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/scss/components/_roleTalk.scss';
@import '@/assets/scss/components/_step4.scss';
</style>
