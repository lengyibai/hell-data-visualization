<template>
  <div class="RightTop">
    <CardTitle title="地府客流统计" border center />
    <div class="tab">
      <div class="item">今日</div>
      <div class="item active">本周</div>
      <div class="item">本月</div>
    </div>
    <div class="chart">
      <E-Bar-A />
    </div>
  </div>
</template>
<script>
export default {
  name: "RightTop",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.RightTop {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: calc(50% - 5px);
  border: 1px solid var(--color-two);
  .tab {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 45px;
    padding: 10px;
    .item {
      width: 50px;
      height: 100%;
      font-size: 14px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid var(--color-two);
    }
  }
  .chart {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex: 1;
  }
}

.active {
  background-color: var(--color-two);
}
</style>
