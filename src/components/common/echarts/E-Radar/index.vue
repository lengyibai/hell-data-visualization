<template>
  <div class="E-Radar" ref="radar"></div>
</template>
<script>
export default {
  name: "E-Radar",
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
          color: "rgba(255, 228, 52)",
          radar: {
            radius: "60%",
            center: ["50%", "57%"],
            indicator: [
              {
                name: "暴殒轻生",
                axisLabel: {
                  show: true,
                  fontSize: 12,
                  color: "#fff",
                },
              },
              { name: "沉疴难反" },
              { name: "死于非命" },
              { name: "寿终正寝" },
              { name: "惨遭屠戮" },
            ],
            splitNumber: 4,
            shape: "polygon",
            axisName: {
              color: "#fff",
              fontSize: 16,
            },
            splitArea: {
              areaStyle: {
                shadowColor: "rgba(0, 0, 0, 0.2)",
                shadowBlur: 10,
              },
            },
            axisLine: {
              lineStyle: {
                color: "rgba(211, 253, 250, 0.8)",
              },
            },
            splitLine: {
              lineStyle: {
                color: "rgba(211, 253, 250, 0.8)",
              },
            },
          },
          tooltip: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            borderColor: "transparent",
            textStyle: {
              color: "#fff",
            },
          },
          series: {
            type: "radar",
            data: [
              {
                symbolSize: 5, // 拐点的大小
                name: "死因",
                value: [60, 5, 0.3, -100, 1500],
                areaStyle: {
                  color: "rgba(241, 255, 52, 0.25)",
                },
              },
            ],
          },
        };

        this.echart.setOption(option);
      }, 200);
    },
  },
};
</script>
<style scoped lang="less">
.E-Radar {
  position: relative;
  width: 100%;
  height: 100%;
  color: rgba(241, 255, 52, 0.493);
}
</style>
