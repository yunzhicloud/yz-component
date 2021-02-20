<template>
  <div
    class="yz-card"
    :class="['yz-card-' + size, animation && 'yz-card-animation']"
  >
    <div class="yz-card-title" v-if="title && title !== ''">{{title}}</div>
    <!-- @slot 内容插槽 -->
    <slot></slot>
  </div>
</template>
yz-card
<script>
/**
 * 页面区域容器.
 * @displayName YzCard
 */
export default {
  name: "YzCard",
  props: {
    /**
     * 区域类型：big、active、disabled
     */
    size: {
      type: String,
      default: "big"
    },
    /**
     * 是否带动画效果
     */
    animation: {
      type: Boolean,
      default: false
    },
    /**
     *  Card标题
     */
    title:{
      type: String,
      default: ""
    }
  }
};
</script>
