```jsx
<template>
    <div>
    <Button @click="value1 = true" type="primary">Open</Button>
       <Drawer title="Basic Drawer" :closable="false" v-model="value1">
           <p>Some contents...</p>
           <p>Some contents...</p>
           <p>Some contents...</p>
       </Drawer>
    </div>
</template>
<script>
    import ViewUI from 'view-design'
    import Vue from 'vue'
    Vue.use(ViewUI)
    export default {
      data () {
                return {
                    value1: false
                }
            }
    }
</script>

```
