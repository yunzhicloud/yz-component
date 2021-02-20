```jsx
<template>
    <div class="example-demo">
         <Cascader :data="data" v-model="value1"></Cascader>
    </div>
</template>
<script>
    import ViewUI from 'view-design'
    import Vue from 'vue'
    Vue.use(ViewUI)
    export default {
         data () {
                    return {
                        value1: [],
                        data: [{
                            value: 'beijing',
                            label: '北京',
                            children: [
                                {
                                    value: 'gugong',
                                    label: '故宫'
                                },
                                {
                                    value: 'tiantan',
                                    label: '天坛'
                                },
                                {
                                    value: 'wangfujing',
                                    label: '王府井'
                                }
                            ]
                        }, {
                            value: 'jiangsu',
                            label: '江苏',
                            children: [
                                {
                                    value: 'nanjing',
                                    label: '南京',
                                    children: [
                                        {
                                            value: 'fuzimiao',
                                            label: '夫子庙',
                                        }
                                    ]
                                },
                                {
                                    value: 'suzhou',
                                    label: '苏州',
                                    children: [
                                        {
                                            value: 'zhuozhengyuan',
                                            label: '拙政园',
                                        },
                                        {
                                            value: 'shizilin',
                                            label: '狮子林',
                                        }
                                    ]
                                }
                            ],
                        }]
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
