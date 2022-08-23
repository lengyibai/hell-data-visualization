<template>
  <div class="LeftBottom">
    <CardTitle title="阴司勾魂系统" border center />
    <div class="chart">
      <E-Radar class="E-Radar" />
    </div>
    <div class="count">
      <CardSoulCount class="card" name="今日" :num="1444" />
      <CardSoulCount class="card" name="本周" :num="3444" />
      <CardSoulCount class="card" name="本月" :num="444333" />
    </div>
  </div>
</template>
<script>
export default {
  name: "LeftBottom",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.LeftBottom {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: calc(50% - 5px);
  border: 1px solid var(--color-two);
  .chart {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 190px;
  }
  .count {
    display: flex;
    padding: 10px;
    .card {
      flex: 1;
      &:nth-child(2) {
        margin: 0 10px;
      }
    }
  }
}
</style>
