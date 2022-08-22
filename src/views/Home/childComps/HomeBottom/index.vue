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
  position: relative;
  display: flex;
  height: 305px;
  border: 1px solid var(--color-two);
  padding: 20px 0;
}
</style>
