<template>
  <div class="CenterRight">
    <RightTop />
    <RightBottom />
  </div>
</template>
<script>
import RightTop from "./childComps/RightTop";
import RightBottom from "./childComps/RightBottom";
export default {
  name: "CenterRight",
  data() {
    return {};
  },
  components: { RightTop, RightBottom },
  methods: {},
};
</script>
<style scoped lang="less">
.CenterRight {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 430px;
  height: 100%;
}
</style>
