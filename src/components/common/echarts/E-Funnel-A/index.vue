<template>
  <div class="E-Funnel-A" ref="radar"></div>
</template>
<script>
export default {
  name: "E-Funnel-A",
  data() {
    return {
      echart: null,
      titleFontSize: 0, //文字自适应大小
    };
  },
  components: {},
  mounted() {
    this.initChart();
    window.addEventListener("resize", () => {
      this.screenAdapter();
    });
  },
  methods: {
    initChart() {
      setTimeout(() => {
        this.echart = this.$echarts.init(this.$refs.radar);
        const option = {
          title: {
            text: "年龄区间",
            bottom: 0,
            textStyle: {
              color: "#fff",
            },
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c}%",
          },
          series: [
            {
              name: "学历",
              type: "funnel",
              left: 0,
              top: 0,
              bottom: 0,
              width: "100%",
              sort: "descending",
              label: {
                show: true,
                position: "inside",
                color: "#fff",
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
        this.screenAdapter();
      }, 200);
    },
    //#####··········屏幕适配··········#####//
    screenAdapter() {
      this.titleFontSize = (this.$refs.radar?.offsetWidth / 100) * 4;
      const adapterOptions = {};
      this.echart.setOption(adapterOptions);
      this.echart.resize();
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
