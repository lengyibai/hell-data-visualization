<template>
  <div class="LeftTop">
    <CardTitle title="天地银行今日汇率" border center />
    <div class="chart">
      <E-table />
    </div>
  </div>
</template>
<script>
export default {
  name: "LeftTop",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.LeftTop {
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
    height: 200px;
    padding: 30px;
  }
}
</style>
