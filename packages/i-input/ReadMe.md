```jsx
<template>
  <div>
    <Input v-model="value" placeholder="Enter something..." style="width: 800px;margin-bottom:10px" />
    <br>
    <Input v-model="value1" size="large" placeholder="large size" style="width: 800px;margin-bottom:10px"/>
    <br>
    <Input v-model="value2" placeholder="default size" style="width: 800px;margin-bottom:10px"/>
    <br>
    <Input v-model="value3" size="small" placeholder="small size" style="width: 800px;margin-bottom:10px"/>
    <br>
    <Input search placeholder="Enter something..." style="width: 800px;margin-bottom:10px"/>
    <br>
    <Input size="large" search placeholder="Enter something..." style="width: 800px;margin-bottom:10px"/>
    <br>
    <Input size="small" search placeholder="Enter something..." style="width: 800px;margin-bottom:10px"/>
    <br>
    <Input search enter-button placeholder="Enter something..." style="width: 800px;margin-bottom:10px"/>
    <br>
    <Input search enter-button="Search" placeholder="Enter something..."  style="width: 800px;margin-bottom:10px"/>
    <br>
    <Input style="width: 800px;margin-bottom:10px">
         <span slot="prepend">http://</span>
         <span slot="append">.com</span>
    </Input>
    <br>
    <Input style="width: 800px;margin-bottom:10px">
       <Select slot="prepend" style="width: 120px">
         <Option value="http">http://</Option>
         <Option value="https">https://</Option>
       </Select>
       <Select slot="append" style="width: 120px">
         <Option value="com">.com</Option>
         <Option value="org">.org</Option>
         <Option value="io">.io</Option>
       </Select>
    </Input>
    <br>
    <Poptip trigger="focus">
       <Input prefix="logo-usd" placeholder="Enter number" style="width: 800px;margin-bottom:10px" />
       <div slot="content">请输入数字</div>
    </Poptip>
  </div>
</template>
<script>
    import ViewUI from 'view-design'
    import Vue from 'vue'
    Vue.use(ViewUI)
    export default {
           data () {
               return {
                  value: '',
                  value1: '',
                  value2: '',
                  value3: ''
               }
           }
       }
</script>

```
