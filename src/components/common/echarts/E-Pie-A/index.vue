<template>
  <div class="E-Pie-A" ref="radar"></div>
</template>
<script>
export default {
  name: "E-Pie-A",
  data() {
    return {
      echart: null,
    };
  },
  components: {},
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      setTimeout(() => {
        this.echart = this.$echarts.init(this.$refs.radar);
        const option = {
          legend: {
            orient: "vertical",
            left: "5%",
            bottom: 0,
            textStyle: {
              color: "#fff",
            },
          },
          series: [
            {
              name: "Nightingale Chart",
              type: "pie",
              radius: [15, 75],
              center: ["60%", "50%"],
              roseType: "area",

              label: {
                color: "#fff",
              },
              itemStyle: {
                borderRadius: 8,
              },
              data: [
                { value: 40, name: "勾魂类" },
                { value: 38, name: "轮回" },
                { value: 32, name: "调查" },
                { value: 30, name: "投诉" },
                { value: 28, name: "审讯" },
                { value: 26, name: "飞升" },
                { value: 22, name: "申辩" },
              ],
            },
          ],
        };

        this.echart.setOption(option);
      }, 200);
    },
  },
};
</script>
<style scoped lang="less">
.E-Pie-A {
  position: relative;
  width: 100%;
  height: 100%;
  color: rgba(241, 255, 52, 0.493);
}
</style>
