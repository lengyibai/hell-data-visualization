<template>
  <div class="E-Bar-A" ref="radar"></div>
</template>
<script>
export default {
  name: "E-Bar-A",
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
          grid: {
            left: "5%",
            right: "15%",
            top: "20%",
            bottom: "5%",
            containLabel: true, //包含坐标轴文字边距
          },
          tooltip: {
            trigger: "item",
          },
          legend: {
            itemWidth: 10,
            itemHeight: 5,
            data: ["得道成仙", "阴司待审", "六道轮回"],
            textStyle: {
              color: "#fff",
            },
          },
          xAxis: [
            {
              type: "category",
              data: ["Q1", "Q2", "Q3", "Q4"],

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
              barGap: "50%",
              barWidth: 10,
              name: "得道成仙",
              type: "bar",
              emphasis: {
                focus: "series",
              },
              /* 平均值  */
              markLine: {
                label: {
                  color: "#fff",
                },
                data: [
                  {
                    type: "average",
                  },
                ],
              },
              data: [320, 332, 301, 334],
            },
            {
              barGap: "50%",
              barWidth: 10,
              name: "阴司待审",
              type: "bar",
              emphasis: {
                focus: "series",
              },
              /* 平均值  */
              markLine: {
                label: {
                  color: "#fff",
                },
                data: [
                  {
                    type: "average",
                  },
                ],
              },
              data: [220, 182, 191, 234],
            },
            {
              barGap: "50%",
              barWidth: 10,
              name: "六道轮回",
              type: "bar",
              emphasis: {
                focus: "series",
              },
              /* 平均值  */
              markLine: {
                label: {
                  color: "#fff",
                },
                data: [
                  {
                    type: "average",
                  },
                ],
              },
              data: [150, 232, 201, 154],
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
.E-Bar-A {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
