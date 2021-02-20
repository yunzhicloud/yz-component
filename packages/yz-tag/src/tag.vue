<template>
  <div class="yz-tag">
    <p class="yz-tag-name">{{ label }}</p>
    {{ name }}
  </div>
</template>

<script>
/**
 * 标签（用于标记和选择）
 * @displayName YzTag
 */
export default {
  name: "YzTag",
  props: {
    /**
     * 标签
     */
    label: {
      type: String,
      required: true
    },
    /**
     * 名字
     */
    name: {
      type: String,
      default: ""
    }
  }
};
</script>
