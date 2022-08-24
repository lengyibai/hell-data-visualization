<template>
  <div class="Tips" v-if="show">
    请使用手机浏览器打开此网页，并将手机设置为自动旋屏，然后横屏查看此网页
  </div>
</template>
<script>
export default {
  name: "Tips",
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    this.show = window.innerWidth < window.innerHeight;
    window.addEventListener("resize", () => {
      this.show = window.innerWidth < window.innerHeight;
    });
  },
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.Tips {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  padding: 1em;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 999;
}
</style>
