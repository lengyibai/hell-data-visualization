<template>
  <div class="CenterLeft">
    <LeftTop />
    <LeftBottom />
  </div>
</template>
<script>
import LeftTop from "./childComps/LeftTop";
import LeftBottom from "./childComps/LeftBottom";
export default {
  name: "CenterLeft",
  data() {
    return {};
  },
  components: { LeftTop, LeftBottom },
  methods: {},
};
</script>
<style scoped lang="less">
.CenterLeft {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 430px;
  height: 100%;
}
</style>
