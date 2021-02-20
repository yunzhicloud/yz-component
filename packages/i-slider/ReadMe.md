```jsx
<template>
    <div>
        <Slider v-model="value11" range :marks="marks" style="paddingBottom:10px"></Slider>
        <Slider v-model="value1" style="paddingBottom:10px" show-input></Slider>
        <Slider v-model="value2" :step="10" show-stops range style="paddingBottom:10px"></Slider>
        <Slider v-model="value3" range disabled style="paddingBottom:10px"></Slider>
    </div>
</template>
<script>
    import { Slider } from 'view-design'
    export default {
        components:{
            Slider,
        },
        data () {
            return {
                value11: [25, 65],
                marks: {
                    0: '0°C',
                    12: '12°C',
                    32: '32°C',
                    55: {
                        style: {
                            color: '#ff0000'
                        },
                        label: this.$createElement('strong', '55°C')
                    }
                },
                value1: 25,
                value2: [20, 50],
                value3: [20, 50]
            }
        }
    }
</script>
```
