<template>
  <div class="BottomFour">
    <CardTitle title="阴司业务中心" />
    <div class="chart">
      <E-Pie-A />
    </div>
  </div>
</template>
<script>
export default {
  name: "BottomFour",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.BottomFour {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;
  height: 100%;
  .chart {
    flex: 1;
  }
}
</style>
