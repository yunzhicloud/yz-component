```jsx
<template>
    <div class="example-demo">
     <RadioGroup v-model="phone">
          <Radio label="apple">
              <Icon type="logo-apple"></Icon>
              <span>Apple</span>
          </Radio>
          <Radio label="android">
              <Icon type="logo-android"></Icon>
              <span>Android</span>
          </Radio>
          <Radio label="windows">
              <Icon type="logo-windows"></Icon>
              <span>Windows</span>
          </Radio>
      </RadioGroup>
      <RadioGroup v-model="animal">
          <Radio label="金斑蝶"></Radio>
          <Radio label="爪哇犀牛"></Radio>
          <Radio label="印度黑羚"></Radio>
      </RadioGroup>
    </div>
</template>
<script>
    import ViewUI from 'view-design'
    import Vue from 'vue'
    Vue.use(ViewUI)
    export default {
        data(){
            return {
                phone: 'apple',
                animal: '爪哇犀牛'
            }
        }
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
