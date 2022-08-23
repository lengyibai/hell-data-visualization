<template>
  <div class="E-Funnel-A" ref="Funnel"></div>
</template>
<script>
export default {
  name: "E-Funnel-A",
  data() {
    return {
      echart: null,
      timer: null,
      allData: [],
      totalPage: 2, //总页数
      currentPage: 1, //当前显示的页数
    };
  },
  components: {},
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      setTimeout(() => {
        this.echart = this.$echarts.init(this.$refs.Funnel);
        const option = {
          grid: {
            left: "5%",
            right: "0%",
            top: "0%",
            bottom: "0%",
            containLabel: true, //包含坐标轴文字边距
          },
          xAxis: {
            type: "value",
            show: false,
          },
          yAxis: {
            type: "category",
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#fff",
              },
            },
            axisLabel: {
              textStyle: {
                fontSize: 15,
              },
            },
          },
          /* 悬浮显示背景色 */
          tooltip: {
            trigger: "axis",
            /* 悬浮柱状时的背景阴影 */
            axisPointer: {
              type: "shadow",
              z: 0, //层级
            },
          },
          series: [
            {
              type: "bar",
              barWidth: 15, //厚度
              /* 是否在柱状图内显示文字 */
              label: {
                show: true,
                position: "right",
                textStyle: {
                  color: "#ccc",
                  fontSize: 16,
                },
              },
              itemStyle: {
                barBorderRadius: [0, 33, 33, 0],
                /* 内置渐变器，0，0代表左上，0,1代表右上，1，0代表左下，1,1代表右下，0,0,1,0则代表从左到右 */
                color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 1, [
                  {
                    offset: 0,
                    color: "#4693EC",
                  },
                  {
                    offset: 1,
                    color: "#00FFE3",
                  },
                ]),
              },
            },
          ],
        };

        this.echart.setOption(option);
        this.updateChart();
        this.startInterval();
        // 鼠标移入移出控制自动切换
        this.echart.on("mouseover", () => {
          clearInterval(this.timer);
        });
        this.echart.on("mouseout", () => {
          this.startInterval();
        });
      }, 200);
    },
    //#####··········通过页数更新图表··········#####//
    updateChart() {
      //对数据进行从小到大排序
      const person = [
        {
          name: "探花",
          value: 23,
        },
        {
          name: "秀才",
          value: 87,
        },
        {
          name: "榜眼",
          value: 223,
        },
        {
          name: "状元",
          value: 145,
        },
      ];
      const year = [
        {
          name: "十万岁以上",
          value: 99,
        },
        {
          name: "十万岁以下",
          value: 102,
        },
        {
          name: "五万岁以下",
          value: 83,
        },
        {
          name: "一万岁以下",
          value: 49,
        },
      ];
      const data = [person, year];
      this.allData = data[this.currentPage - 1].sort((a, b) => {
        return a.value - b.value;
      });
      //用于显示Y轴名称
      const sellerNames = this.allData.map((item) => {
        return item.name;
      });

      // 用于显示X轴数据
      const sellerValues = this.allData.map((item) => {
        return item.value;
      });

      // 将样式拆分到初始化方法，只保留数据更新在更新方法处
      const dataPption = {
        yAxis: {
          data: sellerNames,
        },
        series: [
          {
            data: sellerValues,
          },
        ],
      };

      this.echart.setOption(dataPption);
    },
    //#####··········计时器切换页··········#####//
    startInterval() {
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.timer = setInterval(() => {
        this.currentPage++;
        if (this.currentPage > this.totalPage) {
          this.currentPage = 1;
        }
        console.log(this.currentPage);
        this.updateChart();
      }, 3000);
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
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
