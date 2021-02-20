Reset Css:

```jsx
<template>
    <div>
         <Select v-model="model1" style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value" >{{ item.label }}</Option>
        </Select>
        <br>
        <br>
        <h3>尺寸：</h3>
        <Select v-model="model1" size="small" style="width:100px" disabled>
            <Option v-for="item in cityList" :value="item.value" :key="item.value" >{{ item.label }}</Option>
        </Select>
        <Select v-model="model1" style="width:100px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value" :disabled="item.value==='London'" >{{ item.label }}</Option>
        </Select>
        <Select v-model="model1" size="large" style="width:100px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value" >{{ item.label }}</Option>
        </Select>
    </div>
</template>

<script>
import { Select,Option } from 'view-design'
    export default {
        components:{
            Select,
            Option
        },
        data () {
            return {
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model1: ''
            }
        },
    }
</script>
```
