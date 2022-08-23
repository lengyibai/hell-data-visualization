<template>
  <div class="CardSoulCount">
    <span>{{ name }}勾魂量</span>
    <span>{{ num }}笔</span>
  </div>
</template>
<script>
export default {
  name: "CardSoulCount",
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
.CardSoulCount {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 14px;
  background-color: rgba(118, 146, 130, 0.1);
  border: 1px solid var(--color-two);
  padding: 5px;
  span:nth-child(1) {
    margin-bottom: 0.25em;
  }
  span:nth-child(2) {
    text-align: center;
    color: #f1c40f;
    font-size: 18px;
  }
}
</style>
