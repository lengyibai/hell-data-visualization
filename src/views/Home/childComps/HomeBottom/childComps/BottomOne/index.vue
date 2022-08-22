<template>
  <div class="BottomOne">
    <CardTitle title="阴司飘员构成" />
    <div class="info"></div>
    <div class="chart">
      <E-Funnel-A />
    </div>
  </div>
</template>
<script>
export default {
  name: "BottomOne",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.BottomOne {
  display: flex;
  flex-direction: column;
  position: relative;
  // width: 485px;
  flex: 1;
  height: 100%;
  border-right: 1px solid var(--color-two);
  .info {
    height: 45px;
  }
  .chart {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex: 1;
    background-color: #000;
  }
}
</style>
