```jsx
<style scoped>
    .demo-badge{
        width: 42px;
        height: 42px;
        background: #eee;
        border-radius: 6px;
        display: inline-block;
    }
</style>
<template>
    <div>
        <Badge color="#2db7f5" text="#2db7f5" />
        <br>
        <Badge color="#f50" text="#f50" />
        <br>
        <Badge status="processing" text="processing"/>
        <br><br>
        <Badge :count="3">
            <a href="#" class="demo-badge"></a>
        </Badge>
        <Badge>
            <a href="#" class="demo-badge" style="margin-left: 32px"></a>
            <Icon type="md-time" slot="count" color="#ed4014" size="16" />
        </Badge>
        <Badge :count="500" type="primary" style="margin-left: 32px">
            <a href="#" class="demo-badge"></a>
        </Badge>
        <Badge :count="5000" type="success" overflow-count="999" style="margin-left: 32px">
            <a href="#" class="demo-badge"></a>
        </Badge>
        <Badge text="new" type="normal" style="margin-left: 32px">
            <a href="#" class="demo-badge"></a>
        </Badge>
        <Badge :count="5" type="info" style="margin-left: 32px">
            <a href="#" class="demo-badge"></a>
        </Badge>
        <Badge :count="5" type="warning" style="margin-left: 32px">
            <a href="#" class="demo-badge"></a>
        </Badge>
    </div>
</template>
<script>
    import { Badge,Icon } from 'view-design'
    export default {
        components:{
            Badge,
            Icon
        },
    }
</script>

```
