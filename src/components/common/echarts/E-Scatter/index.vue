<template>
  <div class="E-Scatter" ref="scatter"></div>
</template>
<script>
export default {
  name: "E-Scatter",
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
        var data = [
          {
            name: "孙悟空",
            value: "5000",
          },
          {
            name: "生死簿",
            value: "4000",
          },
          {
            name: "弼马温",
            value: "3000",
          },
          {
            name: "花果山",
            value: "2000",
          },
          {
            name: "彼岸花",
            value: "1000",
          },
        ];
        //偏移量
        var offsetData = [
          [50, 50],
          [50, 80],
          [10, 50],
          [80, 20],
          [90, 80],
        ];
        //symbolSize 散点气泡大小
        var symbolSizeData = [150, 90, 80, 70, 60];
        //
        //循环定义series的data值
        var datas = [];
        for (var i = 0; i < data.length; i++) {
          var item = data[i];

          datas.push({
            name: item.name + "\n" + item.value,
            value: offsetData[i],
            symbolSize: symbolSizeData[i],
            label: {
              normal: {
                textStyle: {
                  fontSize: 14,
                },
              },
            },
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.RadialGradient(0.3, 0.5, 0.7, [
                  {
                    offset: 0,
                    color: "rgba(31,102,162,0)",
                  },
                  {
                    offset: 1,
                    color: "rgba(31,102,192,0.6)",
                  },
                ]),
                opacity: 0.8,
                shadowColor: "#2e78eca8",
                shadowBlur: 10,
                shadowOffsetX: 1,
                shadowOffsetY: 1,
              },
            },
          });
        }
        this.echart = this.$echarts.init(this.$refs.scatter);
        const option = {
          grid: {
            show: false,
            top: 10,
            bottom: 10,
          },
          xAxis: {
            type: "value",
            show: false,
            min: 0,
            max: 100,
            nameLocation: "middle",
            nameGap: 5,
          },
          yAxis: {
            min: 0,
            show: false,
            max: 100,
            nameLocation: "middle",
            nameGap: 30,
          },

          series: [
            {
              type: "scatter",
              symbol: "circle",
              symbolSize: 120,
              label: {
                normal: {
                  show: true,
                  formatter: "{b}",
                  color: "#fff",
                  textStyle: {
                    fontSize: "20",
                  },
                },
              },
              itemStyle: {
                normal: {
                  color: "#00acea",
                },
              },
              data: datas,
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
.E-Scatter {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
