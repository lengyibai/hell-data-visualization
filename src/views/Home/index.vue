<template>
  <div class="Home">
    <HomeTop />
    <HomeCenter />
    <HomeBottom />
  </div>
</template>
<script>
//#####··········子组件··········#####//
import HomeTop from "./childComps/HomeTop";
import HomeCenter from "./childComps/HomeCenter";
import HomeBottom from "./childComps/HomeBottom";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: { HomeTop, HomeCenter, HomeBottom },
  methods: {},
};
</script>
<style scoped lang="less">
.Home {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 15px 25px 5px;
  background-image: linear-gradient(180deg, #1260a4 0%, #042351 100%);
}
</style>
