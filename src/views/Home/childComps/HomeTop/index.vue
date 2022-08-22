<template>
  <div class="HomeTop">
    <div class="home">
      <img src="@/assets/svg/header/home.svg" alt="主页" />
      <span>主页</span>
    </div>
    <div class="menu">
      <img src="@/assets/svg/header/safe.svg" alt="safe" />
      <span>地府安全平台</span>
    </div>
    <div class="menu">
      <img src="@/assets/svg/header/business.svg" alt="business" />
      <span>地府业务平台</span>
    </div>
    <div class="title">智慧地府可视化平台</div>
    <div class="menu">
      <img src="@/assets/svg/header/data.svg" alt="data" />
      <span>地府数据平台</span>
    </div>
    <div class="menu">
      <img src="@/assets/svg/header/iot.svg" alt="iot" />
      <span>地府IOT平台</span>
    </div>
    <div class="time">{{ time }}</div>
  </div>
</template>
<script>
import { $fmtTime } from "@/utils/lib.js";
export default {
  name: "HomeTop",
  data() {
    return {
      time: $fmtTime(new Date(), "YYYY/MM/DD hh:mm"),
      timer: null,
    };
  },
  created() {
    this.timer = setInterval(() => {
      this.time = $fmtTime(new Date().getTime(), "YYYY/MM/DD hh:mm");
    }, 1000);
  },
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.HomeTop {
  display: flex;
  position: relative;
  justify-content: center;
  height: 60px;
  margin-bottom: 20px;
  // border: 1px solid var(--color-two);
  .home {
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    font-size: var(--font-s-20);
    // bottom: 0;
    color: var(--color-one);
    transform: translateY(-25%);
    img {
      margin-right: 10px;
    }
  }
  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: var(--font-s-18);
    color: var(--color-one);
    img {
      width: 30px;
    }
    &:nth-child(2),
    &:nth-of-type(3) {
      margin-right: 110px;
    }
    &:nth-child(5),
    &:nth-of-type(6) {
      margin-left: 110px;
    }
  }
  .title {
    font-size: var(--font-s-40);
    color: var(--color-one);
    // transform: translateY(10%);
  }
  .time {
    position: absolute;
    transform: translateY(50%);
    color: var(--color-one);
    right: 0;
    font-size: var(--font-s-32);
    font-family: "科技";
  }
}
</style>
