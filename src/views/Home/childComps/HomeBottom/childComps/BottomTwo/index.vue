<template>
  <div class="BottomTwo">
    <CardTitle title="阴司飘员变化" />
    <div class="chart">
      <E-Bar-B />
    </div>
  </div>
</template>
<script>
export default {
  name: "BottomTwo",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.BottomTwo {
  display: flex;
  flex-direction: column;
  position: relative;
  // width: 445px;
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
  }
}
</style>
