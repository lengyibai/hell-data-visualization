<template>
  <div class="RightTop">
    <CardTitle title="地府客流统计" border center />
    <div class="tab"></div>
    <div class="chart">
      <E-Line-A />
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
    height: 45px;
    background-color: red;
  }
  .chart {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex: 1;
  }
}
</style>
