开关:

```jsx
<template>
    <div>
        <yz-switch v-model="open" @change="handleChange">开关1</yz-switch>
        <yz-switch v-model="close" @change="handleChange">开关2</yz-switch>
    </div>
</template>
<script>
     export default {
        data(){
            return {
                open:true,
                close:false
            }
        },
        methods: {
            handleChange(value) {
                console.log(value);
            }
        }
     }
</script>
```
