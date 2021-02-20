```jsx
<template>
    <div>
        <InputNumber :max="10" :min="1" v-model="value1" disabled></InputNumber>
        <InputNumber v-model="value1" size="small"></InputNumber>
        <InputNumber v-model="value1"></InputNumber>
        <InputNumber v-model="value1" size="large"></InputNumber>
    </div>
</template>
<script>
    import { InputNumber } from 'view-design'
    export default {
        components:{
            InputNumber
        },
        data () {
            return {
                value1: 1
            }
        }
    }
</script>

```
