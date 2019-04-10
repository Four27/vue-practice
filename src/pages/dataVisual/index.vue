<template>
  <div class="data-container">
    <p>data visual</p>
    <div id="dataVisual"></div>
    <div id="pie"></div>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  name: "dataVisual",
  data() {
    return {};
  },
  mounted() {
    var myEchart = echarts.init(document.getElementById("dataVisual"));
    var myPie = echarts.init(document.getElementById("pie"));
    var data = this.genData();

    myEchart.setOption({
      title: {
        text: "ECharts 入门示例"
      },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    });

    myPie.setOption({
      title: {
        text: "同名数量统计",
        subtext: "纯属虚构",
        x: "center"
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        type: "scroll",
        orient: "vertical",
        right: 10,
        top: 20,
        bottom: 20,
        data: data.legendData,

        selected: data.selected
      },
      series: [
        {
          name: "姓名",
          type: "pie",
          radius: "55%",
          center: ["40%", "50%"],
          data: data.seriesData,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    });
  },
  methods: {
    genData() {
      var legendData = [];
      var seriesData = [];
      var selected = {};
      for (var i = 0; i < 10; i++) {
        var name =
          Math.random() > 0.65
            ? this.makeWord(4, 1) + "·" + this.makeWord(3, 0)
            : this.makeWord(2, 1);
        legendData.push(name);
        seriesData.push({
          name: name,
          value: Math.round(Math.random() * 100000)
        });
        selected[name] = i < 6;
      }

      return {
        legendData: legendData,
        seriesData: seriesData,
        selected: selected
      };
    },
    makeWord(max, min) {
      var nameList = [
        "赵",
        "钱",
        "孙",
        "李",
        "周",
        "吴",
        "郑",
        "王",
        "冯",
        "陈",
        "褚",
        "卫",
        "蒋",
        "沈",
        "韩"
      ];
      var nameLen = Math.ceil(Math.random() * max + min);
      var name = [];
      for (var i = 0; i < nameLen; i++) {
        name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
      }
      return name.join("");
    }
  }
};
</script>

<style lang="less">
.data-container {
  width: 100%;

  #dataVisual {
    width: 1000px;
    height: 300px;
    margin: 100px auto;
    //   background: wheat;
  }
  #pie {
    width: 1000px;
    height: 1000px;
    margin: 0 auto;
  }
}
</style>