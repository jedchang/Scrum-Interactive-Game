<template>
  <div class="step-view step-2">
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
          請把需求放到產品代辦清單，並調整代辦的 <span>優先度順序</span> 。
        </p>
        <p>
          我們公司也推薦使用 <span>Jira</span> 做任務的管理呢！
        </p>
      </div>
      <a
        href="https://www.atlassian.com/software/jira"
        target="_blank"
        class="has-pic jira"
        title="Jira"
      />
    </div>
    <div class="product-list">
      <div class="title">
        <h3>Product Backlog</h3>
        <span>產品代辦清單</span>
      </div>
      <div class="product-backlog">
        <draggable
          :list="productData"
          class="list-group"
          group="list-group-item"
          @change="myProductList"
        >
          <div
            v-for="element in productData"
            :key="element.id"
            class="list-group-item"
          >
            <font-awesome-icon icon="fa-solid fa-grip-vertical" />
            <span>{{ element.content }}</span>
          </div>
        </draggable>
        <div class="priority">
          <div class="level">
            HIGH
          </div>
          <div class="name">
            優先順序
          </div>
          <div class="level">
            LOW
          </div>
        </div>
        <draggable
          :list="productList"
          class="list-group"
          group="list-group-item"
          @change="myProductList"
        >
          <div
            v-for="element in productList"
            :key="element.id"
            class="list-group-item"
          >
            <font-awesome-icon icon="fa-solid fa-grip-vertical" />
            <span>{{ element.content }}</span>
          </div>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'Step2',
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
      productList: []
    }
  },
  methods: {
    myProductList() {
      this.$emit('product-list', this.productList)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/scss/components/_roleTalk.scss';
@import '@/assets/scss/components/_step2.scss';
</style>
