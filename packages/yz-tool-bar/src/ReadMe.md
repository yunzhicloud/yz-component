确认工具条:

```jsx
<template>
  <yz-tool-bar @close-click="handleClick('close')" @check-click="handleClick('check')" ></yz-tool-bar>
</template>
<script>
     export default {
        methods: {
            handleClick(type) {
              if(type==='close'){
                this.$Notice.error({
                  title: '点击了关闭按钮！'
                });
              }else{
                this.$Notice.info({
                  title: '点击了确认按钮！'
                });
              }
            }
        }
     }
</script>
```
