<template>
  <div class="yz-spin">
    <Spin :fix="fix">
      <Icon
        type="ios-loading"
        :size="size === 'small' ? 12 : size === 'large' ? 32 : 20"
        class="yz-spin-icon"
        color="#86919C"
      ></Icon>
    </Spin>
  </div>
</template>

<script>
import { Spin, Icon } from "view-design";
/**
 * 相关组件文档地址：https://www.iviewui.com/components/spin
 * @displayName YzSpin
 */
export default {
  name: "YzSpin",
  components: {
    Spin,
    Icon
  },

  props: {
    /**
     * 是否固定，需要父级有relative或absolute
     */
    fix: {
      type: Boolean,
      default: false
    },
    /**
     * Spin尺寸，可选值为large和small或者不设置
     */
    size: {
      type: String
    }
  }
};
</script>
