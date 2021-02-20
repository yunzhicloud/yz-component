```jsx
<template>
    <div>
        <Page :total="100" />
        <div style="paddingTop:20px">
            <Page :total="40" size="small" show-elevator show-sizer show-total/>
        </div>
    </div>
</template>
<script>
    import { Page } from 'view-design'
    export default {
    components:{
            Page,
        },
    }
</script>
```
