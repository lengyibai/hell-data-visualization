<template>
  <div class="E-Funnel-A" ref="radar"></div>
</template>
<script>
export default {
  name: "E-Funnel-A",
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
          title: {
            text: "年龄区间",
            left: "5%",
            bottom: 0,
            textStyle: {
              color: "#fff",
            },
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}({c}) : {d}%",
          },
          series: [
            {
              name: "学历",
              type: "funnel",
              left: "5%",
              right: "5%",
              top: 0,
              bottom: 0,
              sort: "descending",
              label: {
                show: true,
                position: "inside",
                color: "#fff",
              },

              itemStyle: {
                borderWidth: 0,
              },
              emphasis: {
                label: {
                  fontSize: 20,
                  textStyle: {
                    color: "#fff",
                  },
                },
              },
              data: [
                { value: 60, name: "榜眼" },
                { value: 40, name: "状元" },
                { value: 20, name: "探花" },
                { value: 80, name: "秀才" },
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
.E-Funnel-A {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
