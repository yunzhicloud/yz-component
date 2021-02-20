<template>
  <div class="yz-title-box">
    <div v-if="theme === 'dark'" class="yz-title-box-dark">
      <div class="yz-title-box-dark-content">
        <img class="yz-title-box-dark-leftIcon" src="./assets/noicon.svg" alt />
        <img class="yz-title-box-dark-rightIcon" src="./assets/banner-icon-2.svg" alt />
        <div class="yz-title-box-dark-content-title">{{ title }}</div>
        <p>{{ description }}</p>
        <!-- @slot 自定义内容 -->
        <slot name="content" />
      </div>
      <!-- @slot 底部自定义内容 -->
      <slot name="bottom" />
    </div>
    <div v-else :class="['yz-title-box-' + theme]">
      <div :class="['yz-title-box-' + theme + '-box']">
        <img :class="['yz-title-box-' + theme + '-rightIcon']" src="./assets/banner-icon-1.svg" alt />
        <div v-if="icon" :class="['yz-title-box-' + theme + '-icon']">
          <img v-if="isImage" :src="icon" alt />
          <Icon v-else :type="icon" :color="theme === 'light' ? '#b3bfcb' : '#fff'" size="36" />
        </div>
        <div :class="['yz-title-box-' + theme + '-content']">
          <div :class="['yz-title-box-' + theme + '-content-title']">{{ title }}</div>
          <p>{{ description }}</p>
          <!-- @slot 自定义内容 -->
          <slot name="content" />
        </div>
      </div>
      <!-- @slot 底部自定义内容 -->
      <slot name="bottom" />
    </div>
  </div>
</template>

<script>
import { Icon } from "view-design";
/**
 * 标题区域容器。
 * @displayName YzTitleBox
 */
export default {
  name: "YzTitleBox",
  components: {
    Icon
  },
  props: {
    /**
     * 主题（dark 深色、gradient 渐变、light 浅色）
     */
    theme: {
      type: String,
      default: "dark"
    },
    /**
     * 标题
     */
    title: {
      type: String,
      default: ""
    },
    /**
     * 描述
     */
    description: {
      type: String,
      default: ""
    },
    /**
     * 是否是图片
     */
    isImage: {
      type: Boolean,
      default: false
    },
    /**
     * icon链接（若无则不显示icon区域，可用图片或者icon）
     */
    icon: {
      type: String,
      default: ""
    }
  }
};
</script>
