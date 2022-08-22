<template>
  <div class="CardTitle" :class="{ border: border, center: center }">
    {{ title }}
  </div>
</template>
<script>
export default {
  name: "CardTitle",
  props: {
    title: {
      type: String,
      default: "",
    },
    border: {
      type: Boolean,
      default: false,
    },
    center: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.CardTitle {
  display: flex;
  height: 40px;
  font-size: 22px;
  color: var(--color-one);
  padding-left: 1em;
}
.border {
  border-bottom: 1px solid var(--color-two);
}
.center {
  align-items: center;
}
</style>
