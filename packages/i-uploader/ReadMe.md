```jsx
<template>
    <div class="example-demo">
    <Upload action="http://test.com/jsonplaceholder.typicode.com/posts/">
        <Button icon="ios-cloud-upload-outline">Upload files</Button>
    </Upload>
    </div>
</template>
<script>
    import ViewUI from 'view-design'
    import Vue from 'vue'
    Vue.use(ViewUI)
    export default {
      
    }
</script>
<style>
    .example-demo .ivu-col:nth-child(odd) {
        background: rgba(0,153,229,.7);
    }
    .example-demo .ivu-col{
        color: #fff;
        padding: 10px 0;
        text-align: center;
        background: rgba(0,153,229,.9);
    }
</style>
```
