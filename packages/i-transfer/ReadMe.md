```jsx
<template>
    <div class="example-demo">
       <Transfer
           :data="data1"
           :target-keys="targetKeys1"
           :render-format="render1"
           @on-change="handleChange1"></Transfer>
    </div>
</template>
<script>
    import ViewUI from 'view-design'
    import Vue from 'vue'
    Vue.use(ViewUI)
    export default {
         data () {
                    return {
                        data1: this.getMockData(),
                        targetKeys1: this.getTargetKeys()
                    }
                },
                methods: {
                    getMockData () {
                        let mockData = [];
                        for (let i = 1; i <= 20; i++) {
                            mockData.push({
                                key: i.toString(),
                                label: 'Content ' + i,
                                description: 'The desc of content  ' + i,
                                disabled: Math.random() * 3 < 1
                            });
                        }
                        return mockData;
                    },
                    getTargetKeys () {
                        return this.getMockData()
                                .filter(() => Math.random() * 2 > 1)
                                .map(item => item.key);
                    },
                    render1 (item) {
                        return item.label;
                    },
                    handleChange1 (newTargetKeys, direction, moveKeys) {
                        console.log(newTargetKeys);
                        console.log(direction);
                        console.log(moveKeys);
                        this.targetKeys1 = newTargetKeys;
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
