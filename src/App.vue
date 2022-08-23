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
}
</style>
