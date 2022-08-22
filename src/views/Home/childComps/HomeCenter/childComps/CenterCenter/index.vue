<template>
  <div class="CenterCenter">
    <div class="bg"></div>
    <E-Map />
  </div>
</template>
<script>
export default {
  name: "CenterCenter",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.CenterCenter {
  position: relative;
  flex: 1;
  height: 100%;
  margin: 0 0.0521rem;
  border: 0.0052rem solid var(--color-two);
  .bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: url("./img/bg.png") no-repeat center center;
    background-size: cover;
    z-index: 1;
    pointer-events: none;
    mask: radial-gradient(#fff -20%, transparent 75%);
    opacity: 0.1;
  }
}
</style>
