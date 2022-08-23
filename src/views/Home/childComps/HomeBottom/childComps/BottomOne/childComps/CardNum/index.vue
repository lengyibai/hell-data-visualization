<template>
  <div class="CardNum">
    <img src="./img/total.svg" alt="total" />
    <span class="name">{{ name }}：</span>
    <span class="num">{{ num }}</span>
    <span>飘</span>
  </div>
</template>
<script>
export default {
  name: "CardNum",
  props: {
    name: {
      type: String,
      default: "",
    },
    num: {
      type: Number,
      default: 0,
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
.CardNum {
  position: relative;
  width: fit-content;
  padding: 0 10px;
  height: 100%;
  border: 1px solid var(--color-one);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 14px;
  img {
    width: 30px;
  }
  .name {
    font-size: 16px;
  }
  .num {
    font-size: 18px;
    margin-right: 0.25em;
    color: #3498db;
  }
}
</style>
