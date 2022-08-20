<template>
  <div class="HomeCenter">
    <CenterLeft />
    <CenterCenter />
    <CenterRight />
  </div>
</template>
<script>
//#####··········子组件··········#####//
import CenterLeft from "./childComps/CenterLeft";
import CenterCenter from "./childComps/CenterCenter";
import CenterRight from "./childComps/CenterRight";
export default {
  name: "HomeCenter",
  data() {
    return {};
  },
  components: { CenterLeft, CenterCenter, CenterRight },
  methods: {},
};
</script>
<style scoped lang="less">
.HomeCenter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 650px;
  margin-bottom: 20px;
}
</style>
