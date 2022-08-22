<template>
  <div class="E-Bar-B" ref="radar"></div>
</template>
<script>
export default {
  name: "E-Bar-B",
  data() {
    return {
      echart: null,
      titleFontSize: 0, //文字自适应大小
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
          grid: {
            left: "5%",
            right: "15%",
            top: "25%",
            bottom: "5%",
            containLabel: true, //包含坐标轴文字边距
          },
          tooltip: {
            trigger: "item",
          },
          legend: {
            itemWidth: 10,
            itemHeight: 5,
            data: ["男飘员工", "女飘员工"],
            textStyle: {
              color: "#fff",
            },
          },
          xAxis: [
            {
              type: "category",
              data: ["奈何桥", "阎王殿", "望乡台", "忘川河", "黄泉路"],

              axisTick: {
                show: false,
              },
              axisLine: {
                lineStyle: {
                  color: "#fff",
                },
              },
              axisLabel: {
                color: "#fff",
              },
            },
          ],
          yAxis: [
            {
              type: "value",
              name: "单位：飘",
              nameTextStyle: {
                color: "#fff",
              },
              axisLabel: {
                textStyle: {
                  color: "#fff",
                },
              },
            },
          ],
          series: [
            {
              barGap: "25%",
              barWidth: 10,
              name: "男飘员工",
              type: "bar",
              emphasis: {
                focus: "series",
              },
              data: [220, 182, 191, 234, 250],
            },
            {
              barGap: "25%",
              barWidth: 10,
              name: "女飘员工",
              type: "bar",
              emphasis: {
                focus: "series",
              },
              data: [150, 232, 201, 154, 190],
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
.E-Bar-B {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
