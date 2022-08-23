<template>
  <div class="E-table">
    <div class="top">
      <span>货币种类</span>
      <span>烧入金额</span>
      <span>冥界金额</span>
      <span>汇率</span>
    </div>
    <div class="list" v-for="(item, index) in data" :key="index">
      <span>{{ item.type }}</span>
      <span class="intoMoney">1000万</span>
      <span class="nowMoney">{{ item.now }}万</span>
      <span :class="[item.status ? 'green' : 'red']"
        >{{ item.status === 1 ? "↑" : "↓" }}{{ item.rate }}%</span
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "E-table",
  data() {
    this.data = [
      {
        type: "冥钞",
        now: 900,
        rate: 30,
        status: 1,
      },
      {
        type: "元宝",
        now: 800,
        rate: 20,
        status: 1,
      },
      {
        type: "剪钱",
        now: 600,
        rate: 10,
        status: 0,
      },
      {
        type: "五畜",
        now: 700,
        rate: 15,
        status: 1,
      },
      {
        type: "香火",
        now: 500,
        rate: 5,
        status: 0,
      },
    ];
    return {};
  },
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.E-table {
  position: relative;
  width: 100%;
  height: 100%;
  .top,
  .list {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--color-two);
    padding: 0 5px;
    padding-bottom: 7.5px;
    margin-bottom: 7.5px;
    color: var(--color-one);
    span {
      width: 75px;
      min-width: fit-content;
    }
  }
  .top {
    font-size: 16px;
  }
  .list {
    font-size: 14px;
    .intoMoney {
      color: #f1c40f;
    }
    .nowMoney {
      color: #3498db;
    }
  }
}
.red {
  color: #e74c3c;
}
.green {
  color: #2ecc71;
}
</style>
