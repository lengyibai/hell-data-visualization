<template>
  <div class="LeftBottom">
    <CardTitle title="阴司勾魂系统" border center />
    <div class="chart">
      <E-Radar class="E-Radar" />
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
    height: 1.0417rem;
    background-color: #000;
  }
}
</style>
