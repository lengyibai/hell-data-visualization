<template>
  <div class="Home" ref="Home">
    <HomeTop />
    <HomeCenter />
    <HomeBottom />
  </div>
</template>
<script>
//#####··········公共方法··········#####//
// { 防抖 }
import { $debounceDelay } from "@/utils/lib.js";
//#####··········子组件··········#####//
import HomeTop from "./childComps/HomeTop";
import HomeCenter from "./childComps/HomeCenter";
import HomeBottom from "./childComps/HomeBottom";
export default {
  name: "Home",
  data() {
    return {
      scale: 1,
    };
  },
  components: { HomeTop, HomeCenter, HomeBottom },
  methods: {
    getScale() {
      let ww = window.innerWidth / this.$width;
      let wh = window.innerHeight / this.$height;
      return `${ww},${wh}`;
    },
    setScale() {
      this.scale = this.getScale();
      if (this.$refs.Home) {
        this.$refs.Home.style.setProperty("--scale", this.scale);
      }
    },
  },
  mounted() {
    this.setScale();
    // 防抖
    window.addEventListener("resize", $debounceDelay(this.setScale, 250));
  },
};
</script>
<style scoped lang="less">
.Home {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 15px 25px 5px;
  background-image: linear-gradient(
    43deg,
    #0c2826 0%,
    #0f2b36 46%,
    #0d1b28 100%
  );

  transform-origin: left top;
  transform: scale(var(--scale));
}
</style>
