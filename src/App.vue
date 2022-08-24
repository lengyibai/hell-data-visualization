<template>
  <div
    id="app"
    :style="{
      width: $width + 'px',
      height: $height + 'px',
    }"
  >
    <Home />
    <Tips />
  </div>
</template>
<script>
import Home from "@/views/Home";
import Tips from "@/views/Tips";
export default {
  components: { Home, Tips },
};
</script>

<style lang="less">
#app {
  position: relative;
}
</style>
