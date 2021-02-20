<template>
  <div class="yz-tool-bar">
    <div class="yz-tool-bar-button" @click="handleClosed">
      <img src="./assets/close.svg" width="16" />
    </div>
    <div class="yz-tool-bar-button">
      <img src="./assets/check.svg" @click="handleCheckd" width="16" />
    </div>
  </div>
</template>

<script>
/**
 * 确认工具条.
 * @displayName YzToolBar
 */
export default {
  name: "YzToolBar",
  methods: {
    handleClosed() {
      /** close
       * @event:取消点击
       * @property null
       */
      this.$emit("close-click");
    },
    handleCheckd() {
      /** check
       * @event:确认点击
       * @property null
       */
      this.$emit("check-click");
    }
  }
};
</script>

