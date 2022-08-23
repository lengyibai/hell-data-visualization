<template>
  <div class="RightBottom">
    <CardTitle title="地府舆情监控系统" border center />
    <div class="box">
      <div class="hotList">
        <div class="title">热门话题榜</div>
        <div class="list">
          <div class="item" v-for="(item, index) in data" :key="index">
            <span>{{ index + 1 }}.{{ item.title }}</span>
            <span :class="[item.status ? 'red' : 'blue']">{{ item.num }}</span>
            <span :class="[item.status ? 'red' : 'blue']">{{
              item.status ? "↑" : "↓"
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RightBottom",
  data() {
    this.data = [
      {
        title: "孙悟空",
        num: 5000,
        status: 1,
      },
      {
        title: "生死簿",
        num: 4000,
        status: 1,
      },
      {
        title: "弼马温",
        num: 3000,
        status: 0,
      },
      {
        title: "花果山",
        num: 2000,
        status: 0,
      },
      {
        title: "彼岸花",
        num: 1000,
        status: 0,
      },
    ];
    return {};
  },
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.RightBottom {
  position: relative;
  width: 100%;
  height: calc(50% - 5px);
  border: 1px solid var(--color-two);
  .box {
    padding: 25px 30px;
    .hotList {
      .title {
        color: var(--color-one);
        font-size: 18px;
        margin-bottom: 1em;
      }
      .list {
        .item {
          margin-bottom: 1em;
          color: #fff;
          span {
            &:nth-child(1) {
              margin-right: 1em;
            }
            &:nth-child(2) {
              margin-right: 0.5em;
            }
          }
        }
      }
    }
  }
}

.red {
  color: #ff422d;
}
.blue {
  color: #2e72cc94;
}
</style>
