<template>
  <div class="E-Map">
    <div class="com-chart" ref="MapRef"></div>
  </div>
</template>
<script>
import geoJson from "./file/china.js";
import { geoCoordMap, geoGpsMap, d1, colors } from "./file/data.js";
export default {
  name: "E-Map",
  data() {
    return {
      chartInstance: null, //图表方法
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    //#####··········初始化图表··········#####//
    initChart() {
      setTimeout(() => {
        this.chartInstance = this.$echarts.init(this.$refs.MapRef);

        var colorIndex = 0;
        var year = ["长春"];
        var mapData = [[]];

        /*柱子Y名称*/
        var categoryData = [];
        var barData = [];

        for (var key in geoCoordMap) {
          mapData[0].push({
            year: "长春",
            name: key,
            value: d1[key] / 100,
            value1: d1[key] / 100,
          });
        }

        for (var i = 0; i < mapData.length; i++) {
          mapData[i].sort(function sortNumber(a, b) {
            return a.value - b.value;
          });
          barData.push([]);
          categoryData.push([]);
          for (var j = 0; j < mapData[i].length; j++) {
            barData[i].push(mapData[i][j].value1);
            categoryData[i].push(mapData[i][j].name);
          }
        }

        this.$echarts.registerMap("china", geoJson);
        var convertData = function (data) {
          var res = [];
          for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
              res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
              });
            }
          }
          return res;
        };

        var convertToLineData = function (data, gps) {
          var res = [];
          for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var toCoord = geoCoordMap[dataItem.name];
            debugger;
            var fromCoord = gps; //郑州
            //  var toCoord = geoGps[Math.random()*3];
            if (fromCoord && toCoord) {
              res.push([
                {
                  coord: fromCoord,
                  value: dataItem.value,
                },
                {
                  coord: toCoord,
                },
              ]);
            }
          }
          return res;
        };

        let initOptions = {
          timeline: {
            show: false,
          },
          baseOption: {
            geo: {
              show: true,
              map: "china",
              zoom: 1.2,
              center: [105, 36],
              label: {
                emphasis: {
                  show: false,
                },
              },
              itemStyle: {
                normal: {
                  borderColor: "rgb(147, 248, 181)",
                  borderWidth: 1,
                  areaColor: {
                    type: "radial",
                    x: 0.5,
                    y: 0.5,
                    r: 0.8,
                    colorStops: [
                      {
                        offset: 0,
                        color: "rgba(147, 235, 248, 0)", // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "rgba(147, 235, 248, .2)", // 100% 处的颜色
                      },
                    ],
                    globalCoord: false, // 缺省为 false
                  },
                  shadowColor: "rgb(147, 248, 181)",
                  shadowOffsetX: -2,
                  shadowOffsetY: 2,
                  shadowBlur: 10,
                },
                emphasis: {
                  areaColor: "#38b758",
                  borderWidth: 0,
                },
              },
            },
          },
          options: [],
        };

        for (var n = 0; n < year.length; n++) {
          initOptions.options.push({
            series: [
              //地图？
              {
                type: "map",
                map: "china",
                geoIndex: 0,
                aspectScale: 0.75, //长宽比
                showLegendSymbol: false, // 存在legend时显示
                label: {
                  normal: {
                    show: false,
                  },
                  emphasis: {
                    show: false,
                    textStyle: {
                      color: "#fff",
                    },
                  },
                },
                roam: true,
                itemStyle: {
                  normal: {
                    areaColor: "#031525",
                    borderColor: "#FFFFFF",
                  },
                  emphasis: {
                    areaColor: "#2B91B7",
                  },
                },
                animation: false,
                data: mapData,
              },
              //地图点的动画效果
              {
                type: "effectScatter",
                coordinateSystem: "geo",
                data: convertData(
                  mapData[n]
                    .sort(function (a, b) {
                      return b.value - a.value;
                    })
                    .slice(0, 20)
                ),
                symbolSize: function (val) {
                  return val[2] / 10;
                },
                showEffectOn: "render",
                rippleEffect: {
                  brushType: "stroke",
                },
                hoverAnimation: true,
                label: {
                  normal: {
                    formatter: "{b}",
                    position: "right",
                    show: true,
                  },
                },
                itemStyle: {
                  normal: {
                    color: colors[colorIndex][n],
                    shadowBlur: 10,
                    shadowColor: colors[colorIndex][n],
                  },
                },
                zlevel: 1,
              },
              //地图线的动画效果
              {
                type: "lines",
                zlevel: 2,
                effect: {
                  show: true,
                  period: 4, //箭头指向速度，值越小速度越快
                  trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                  symbol: "arrow", //箭头图标
                  symbolSize: 3, //图标大小
                },
                lineStyle: {
                  normal: {
                    color: colors[colorIndex][n],
                    width: 0.1, //尾迹线条宽度
                    opacity: 0.5, //尾迹线条透明度
                    curveness: 0.3, //尾迹线条曲直度
                  },
                },
                data: convertToLineData(mapData[n], geoGpsMap[n + 1]),
              },
            ],
          });
        }
        this.chartInstance.setOption(initOptions);
      }, 200);
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
