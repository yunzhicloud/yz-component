```jsx
<template>
    <div class="example-demo">
      <Row>
             <Col span="12">col-12</Col>
             <Col span="12">col-12</Col>
         </Row>
         <br>
         <Row>
             <Col span="8">col-8</Col>
             <Col span="8">col-8</Col>
             <Col span="8">col-8</Col>
         </Row>
         <br>
         <Row>
             <Col span="6">col-6</Col>
             <Col span="6">col-6</Col>
             <Col span="6">col-6</Col>
             <Col span="6">col-6</Col>
         </Row>
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
