<template>
  <div
    id="app"
    :style="{
      width: $width + 'px',
      height: $height + 'px',
    }"
  >
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  position: relative;
  background-image: linear-gradient(180deg, #1260a4 0%, #042351 100%);
}
</style>
