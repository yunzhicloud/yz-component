Reset Css:

```jsx
<template>
    <div>
        <Breadcrumb>
            <BreadcrumbItem to="/">
                <Icon type="ios-home-outline"></Icon> Home
            </BreadcrumbItem>
            <BreadcrumbItem to="/#breadcrumb">
                <Icon type="logo-buffer"></Icon> Components
            </BreadcrumbItem>
            <BreadcrumbItem>
                <Icon type="ios-cafe"></Icon> Breadcrumb
            </BreadcrumbItem>
        </Breadcrumb>
        <br>
        <Breadcrumb>
            <BreadcrumbItem to="/">Home</BreadcrumbItem>
            <BreadcrumbItem to="/#breadcrumb">Components</BreadcrumbItem>
            <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
        <br>
        <Breadcrumb separator=">">
        <BreadcrumbItem to="/">Home</BreadcrumbItem>
        <BreadcrumbItem to="/#breadcrumb">Components</BreadcrumbItem>
            <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
        <br>
        <Breadcrumb separator="<b style='color:#ff5500'>=></b>">
            <BreadcrumbItem to="/">Home</BreadcrumbItem>
            <BreadcrumbItem to="/#breadcrumb">Components</BreadcrumbItem>
            <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
    </div>
</template>
<script>
    import { Breadcrumb,BreadcrumbItem,Icon } from 'view-design'
    export default {
        components:{
            Breadcrumb,
            BreadcrumbItem,
            Icon
        },
    }
</script>
```
