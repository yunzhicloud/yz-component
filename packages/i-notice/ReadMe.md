Reset Css:

```jsx
<template>
    <div>
    <Button type="primary" @click="open(false)" >Open notice</Button>
    <Button @click="open(true)" >Open notice(only title)</Button>
    <Button type="info" @click="info(false)" >Info</Button>
    <Button type="success" @click="success(false)" >Success</Button>
    <Button type="warning" @click="warning(false)" >Warning</Button>
    <Button type="error" @click="error(false)" >Error</Button>
    <p style="paddingTop:20px;paddingBottom:10px">Only title</p>
    <Button type="info" @click="info(true)" >Info</Button>
    <Button type="success" @click="success(true)" >Success</Button>
    <Button type="warning" @click="warning(true)" >Warning</Button>
    <Button type="error" @click="error(true)" >Error</Button>
    </div>
</template>

<script>
import { Button } from 'view-design'
    export default {
        components:{
            Button,
        },
        data () {
            return {
                modal1: false
            }
        },
        methods: {
            open (nodesc) {
                this.$Notice.open({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. ',
                });
            },
            info (nodesc) {
                this.$Notice.info({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. ',
                });
            },
            success (nodesc) {
                this.$Notice.success({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. ',
                });
            },
            warning (nodesc) {
                this.$Notice.warning({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. ',
                });
            },
            error (nodesc) {
                this.$Notice.error({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. ',
                });
            }
        }
    }
</script>
```
