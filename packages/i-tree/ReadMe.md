```jsx
<template>
  <Tree :data="data1"></Tree>
</template>
<script>
    import ViewUI from 'view-design'
    import Vue from 'vue'
    Vue.use(ViewUI)
    export default {
           data () {
               return {
                   data1: [
                       {
                           title: 'parent 1',
                           expand: true,
                           children: [
                               {
                                   title: 'parent 1-1',
                                   expand: true,
                                   children: [
                                       {
                                           title: 'leaf 1-1-1'
                                       },
                                       {
                                           title: 'leaf 1-1-2'
                                       }
                                   ]
                               },
                               {
                                   title: 'parent 1-2',
                                   expand: true,
                                   children: [
                                       {
                                           title: 'leaf 1-2-1'
                                       },
                                       {
                                           title: 'leaf 1-2-1'
                                       }
                                   ]
                               }
                           ]
                       }
                   ]
               }
           }
       }
</script>

```
