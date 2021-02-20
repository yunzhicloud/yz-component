深色主题标题区域:

```jsx
<template>
  <div>
  <yz-title-box
    theme="dark"
    title="标题"
    description="这是描述文字"
  ></yz-title-box>
  <yz-title-box
    theme="dark"
    title="标题"
    description="这是描述文字"
  >
    <div class="content" slot='bottom'>
      <yz-tabs type="radio" v-model="sctTab" @tab-click="handleClick">
        <yz-tab-pane name="test" style="padding-right:52px">
            test
          <span class="tag-radio-num">7</span>
        </yz-tab-pane>
        <yz-tab-pane name="test1" style="padding-right:52px">
            test1
          <span class="tag-radio-num">10</span>
        </yz-tab-pane>
        <yz-tab-pane name="test2222222222222222222">test2222222222222222222</yz-tab-pane>
        <yz-tab-pane name="test3">test3</yz-tab-pane>
      </yz-tabs>
    </div>
  </yz-title-box>
  </div>
</template>
<script>
  export default {
    data(){
        return {
            sctTab:'test'
        }
    },
    methods: {
        handleClick(tab) {
            console.log(tab);
        }
    }
  }
</script>
<style scoped>
.content{
  padding: 8px 20px;
  background: #fff;
}
.tag-radio-num{
    box-shadow: 0 2px 4px 0 rgba(74,141,255,.36);
    background-color: rgb(36, 53, 125);
    color:#fff;
    border-radius:1000px;
    height: 20px;
    min-width: 32px;
    text-align:center;
    line-height:20px;
    position:absolute;
    right:3px;
    top:4px;
  }
</style>
```

渐变主题标题区域:

```jsx
<template>
  <div>
    <yz-title-box
      theme="gradient"
      title="渐变标题"
      description="icon为图片的渐变描述文字"
      :isImage="false"
      icon="ios-list"
    ></yz-title-box>
    <yz-title-box
      theme="gradient"
      title="渐变标题"
      description="这是渐变描述文字"
      :isImage="true"
      icon="https://www.easyicon.net/api/resizeApi.php?id=1130584&size=48"
    ></yz-title-box>
    <yz-title-box
      theme="gradient"
      title="渐变标题"
      description="这是渐变描述文字"
    >
      <div slot="bottom">
        <yz-tabs v-model="sctTab" @tab-click="handleClick">
          <yz-tab-pane name="test">test</yz-tab-pane>
          <yz-tab-pane name="test1">test1</yz-tab-pane>
          <yz-tab-pane name="test2222222222222222222">test2222222222222222222</yz-tab-pane>
        <yz-tab-pane name="test3">test3</yz-tab-pane>
      </yz-tabs></div>
    </yz-title-box>
  </div>
</template>
<script>
  export default {
    data(){
        return {
            sctTab:'test'
        }
    },
    methods: {
        handleClick(tab) {
            console.log(tab);
        }
    }
  }
</script>
```

浅色主题标题区域:

```jsx
<template>
  <div style="backgroundColor:#f5f9fc;padding:20px">
    <yz-title-box
      theme="light"
      title="渐变标题"
      description="icon为图片的渐变描述文字"
      :isImage="false"
      icon="ios-list"
    ></yz-title-box>
    <yz-title-box
      theme="light"
      title="渐变标题"
      :isImage="true"
      icon="https://www.easyicon.net/api/resizeApi.php?id=1130584&size=48"
    ><div slot="content">这是一段内容slot</div></yz-title-box>
    <yz-title-box
      theme="light"
      title="渐变标题"
      description="这是渐变描述文字"
    >
      <div class='content' slot="bottom">
        <yz-tabs type="radio" v-model="sctTab" @tab-click="handleClick">
          <yz-tab-pane name="test">
              test
          </yz-tab-pane>
          <yz-tab-pane name="test1">
              test1
          </yz-tab-pane>
        </yz-tabs>
      </div>
    </yz-title-box>
  </div>
</template>
<script>
  export default {
    data(){
        return {
            sctTab:'test'
        }
    },
    methods: {
        handleClick(tab) {
            console.log(tab);
        }
    }
  }
</script>
<style scoped>
.content{
  padding: 6px 12px;
  background-color: #eff4f9;
}
</style>
```
