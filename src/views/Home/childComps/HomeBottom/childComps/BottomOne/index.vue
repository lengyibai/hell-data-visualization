<template>
  <div class="BottomOne">
    <CardTitle title="阴司飘员构成" />
    <div class="info">
      <CardNum name="总数" :num="3200" />
      <CardNum name="男职员" :num="2000" />
      <CardNum name="女职员" :num="1200" />
    </div>
    <div class="chart">
      <E-Funnel-A />
    </div>
  </div>
</template>
<script>
//#####··········子组件··········#####//
import CardNum from "./childComps/CardNum";
export default {
  name: "BottomOne",
  data() {
    return {};
  },
  components: { CardNum },
  methods: {},
};
</script>
<style scoped lang="less">
.BottomOne {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 550px;
  height: 100%;
  border-right: 1px solid var(--color-two);
  .info {
    display: flex;
    align-items: center;
    padding-left: 20px;
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
