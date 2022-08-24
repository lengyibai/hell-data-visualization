<template>
  <div class="BottomThree">
    <CardTitle title="阴司工单统计" />
    <div class="content">
      <div class="top">
        <div class="box1">
          <span>已办理完成飘数</span>
          <div class="num">
            <span>1280</span>
            <span>飘</span>
          </div>
        </div>
        <div class="box2">
          <div class="round">
            <span>占比</span>
            <span>0.8%</span>
          </div>
        </div>
        <div class="box3">
          <div class="list">
            <span>当前等待飘数：</span>
            <span class="green">236</span>
            <span>飘</span>
          </div>
          <div class="list">
            <span>已办飘数累计：</span>
            <span class="red">3520</span>
            <span>飘</span>
          </div>
          <div class="list">
            <span>已办业务累计：</span>
            <span class="blue">3600</span>
            <span>份</span>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="box1">
          <span>已办理完成飘数</span>
          <div class="num">
            <span>1280</span>
            <span>飘</span>
          </div>
        </div>
        <div class="box2">
          <div class="round">
            <span>占比</span>
            <span>0.8%</span>
          </div>
        </div>
        <div class="box3">
          <div class="title">满意度统计</div>
          <div class="box">
            <div class="left">
              <div class="top">满意：70%</div>
              <div class="bottom">不满意：10%</div>
            </div>
            <div class="right">
              <span>未评价</span>
              <span>20%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BottomThree",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.BottomThree {
  position: relative;
  width: 480px;
  height: 100%;
  border-right: 1px solid var(--color-two);
  .content {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    color: #fff;
    > .top,
    > .bottom {
      display: flex;
      height: 100px;
      margin-bottom: 20px;
      .box1 {
        display: flex;
        flex-direction: column;
        margin-right: 10px;
        span {
          &:nth-child(1) {
            font-size: 16px;
          }
        }
        .num {
          span {
            &:nth-child(1) {
              font-size: 20px;
              color: #6ac3ff;
            }
          }
        }
      }
      .box2 {
        .round {
          .flex();
          position: relative;
          width: 75px;
          height: 75px;
          border: 2px solid #1f5f90;
          border-radius: 50%;
          color: #95d5ff;
          display: flex;
          flex-direction: column;
          margin-right: 30px;
          &::after {
            content: "";
            position: absolute;
            width: 90%;
            height: 90%;
            border-radius: 50%;
            background-color: #1f5f90;
            z-index: -1;
          }
        }
      }
      .box3 {
        font-size: 14px;
        .title {
          margin-bottom: 5px;
        }
        .list {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 5px;
        }
        .box {
          position: relative;
          display: flex;
          width: 210px;
          height: 75px;
          .left {
            display: flex;
            flex-direction: column;
            flex: 2;
            .top {
              .flex();
              flex: 2;
              background-color: #0a638b;
            }
            .bottom {
              .flex();
              flex: 1;
              background-color: #16a860;
            }
          }
        }
        .right {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          background-color: #dfc93a;
        }
      }
    }
  }
}

.green,
.red,
.blue {
  width: 75px;
  text-align: right;
  margin-right: 10px;
  padding: 2.5px 10px;
}
.green {
  background-color: #2f9d93;
}
.red {
  background-color: #ff8282;
}
.blue {
  background-color: #2f759d;
}
</style>
