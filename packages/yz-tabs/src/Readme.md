基础风格的标签页

```jsx
<template>
    <yz-tabs v-model="sctTab" @tab-click="handleClick">
        <yz-tab-pane name="test">test</yz-tab-pane>
        <yz-tab-pane name="test1">test1</yz-tab-pane>
        <yz-tab-pane name="test2222222222222222222">test2222222222222222222</yz-tab-pane>
        <yz-tab-pane name="test3">test3</yz-tab-pane>
    </yz-tabs>
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

Radio风格的标签页

```jsx
<template>
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
<style>
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

Card风格的标签页

```jsx
<template>
    <yz-tabs type="card" v-model="sctTab" @tab-click="handleClick">
        <yz-tab-pane name="test">test</yz-tab-pane>
        <yz-tab-pane name="test1">test1</yz-tab-pane>
        <yz-tab-pane name="test2222222222222222222">test2222222222222222222</yz-tab-pane>
        <yz-tab-pane name="test3">test3</yz-tab-pane>
    </yz-tabs>
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

下划线风格的标签页

```jsx
<template>
    <yz-tabs type="underline" v-model="sctTab" @tab-click="handleClick">
        <yz-tab-pane name="test">test</yz-tab-pane>
        <yz-tab-pane name="test1">test1</yz-tab-pane>
        <yz-tab-pane name="test2222222222222222222">test2222222222222222222</yz-tab-pane>
        <yz-tab-pane name="test3">test3</yz-tab-pane>
    </yz-tabs>
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
