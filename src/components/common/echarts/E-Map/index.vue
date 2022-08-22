<template>
  <div class="E-Map">
    <div class="com-chart" ref="MapRef"></div>
  </div>
</template>
<script>
import china from "./file/china.json";
import data from "./file/map.js";
export default {
  name: "E-Map",
  data() {
    this.allData = data; //图表数据
    return {
      chartInstance: null, //图表方法
    };
  },
  mounted() {
    this.initChart();
    /* 自适应 */
  },
  methods: {
    //#####··········初始化图表··········#####//
    initChart() {
      setTimeout(() => {
        console.log(this);
        this.chartInstance = this.$echarts.init(this.$refs.MapRef, "black");

        // 获取中国地图的矢量数据
        this.$echarts.registerMap("china", china);
        const initOptions = {
          title: {
            text: "商家分布",
            left: 20,
            top: 20,
          },
          geo: {
            type: "map",
            map: "china",
            itemStyle: {
              areaColor: "rgba(10, 43, 121, 0.35)",
              borderColor: "#bcf7ff",
            },
          },
          legend: {
            left: "5%",
            bottom: "5%",
            orient: "vertical", //垂直摆放
          },
        };
        this.chartInstance.setOption(initOptions);
        this.updateChart();
      }, 200);
    },
    //#####··········更新图表··········#####//
    updateChart() {
      //图例数据
      const legendArr = this.allData.map((item) => {
        return item.name;
      });
      //处理图标需要的数据
      const seriesArr = this.allData.map((item) => {
        // 一个类别下的所有散点数据
        return {
          type: "effectScatter",
          rippleEffect: {
            scale: 5,
            brushType: "stroke",
          },
          name: item.name,
          data: item.children,
          coordinateSystem: "geo",
        };
      });
      const dataOption = {
        legend: { data: legendArr },
        series: seriesArr,
      };

      this.chartInstance.setOption(dataOption);
    },
  },
};
</script>
<style scoped lang="less">
.E-Map {
  width: 100%;
  height: 100%;
  .title {
    position: absolute;
    left: 25px;
    top: 25px;
    z-index: 1;
    font-size: 20px;
    color: #fff;
    cursor: pointer;
    .title-icon {
      margin-left: 10px;
    }
    .select-con {
      cursor: pointer;
    }
  }
  .com-chart {
    width: 100%;
    height: 100%;
  }
}
</style>
