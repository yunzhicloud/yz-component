```jsx
<template>
    <div>
        <Menu :theme="theme2" :open-names="openNames">
             <Submenu name="1">
                  <template slot="title">发现</template>
                  <MenuItem name="1-1"><Icon type="ios-cart" />最新上架</MenuItem>
             </Submenu>
             <Submenu name="2">
                  <template slot="title">分类</template>
                  <MenuItem name="2-1"><Icon type="ios-cube" />全部</MenuItem>
                  <MenuItem name="2-2"><Icon type="ios-contact-outline" />物联网</MenuItem>
                  <MenuItem name="2-3"><Icon type="ios-cloud-done-outline" />未分类</MenuItem>
             </Submenu>
        </Menu>
        <p>Change theme</p>
        <RadioGroup v-model="theme2">
            <Radio label="light"></Radio>
            <Radio label="dark"></Radio>
        </RadioGroup>
    </div>
</template>
<script>
    import ViewUI from 'view-design'
    import Vue from 'vue'
    Vue.use(ViewUI)
    export default {
        data () {
            return {
                theme2: 'light',
                openNames:['1','2']
            }
        }
    }
</script>

```
