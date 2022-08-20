<template>
  <div class="HomeBottom">
    <BottomOne />
    <BottomTwo />
    <BottomThree />
    <BottomFour />
  </div>
</template>
<script>
//#####··········子组件··········#####//
import BottomOne from "./childComps/BottomOne";
import BottomTwo from "./childComps/BottomTwo";
import BottomThree from "./childComps/BottomThree";
import BottomFour from "./childComps/BottomFour";
export default {
  name: "HomeBottom",
  data() {
    return {};
  },
  components: { BottomOne, BottomTwo, BottomThree, BottomFour },
  methods: {},
};
</script>
<style scoped lang="less">
.HomeBottom {
  display: flex;
  height: 1.5885rem;
  border: 0.0052rem solid #73baf8;
  padding: 0.1042rem;
}
</style>
