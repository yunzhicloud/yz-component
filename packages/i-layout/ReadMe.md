```jsx
<template>
<div class="layout">
    <Layout style="margin-bottom:20px;">
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
    </Layout>

    <Layout style="margin-bottom:20px;">
        <Header>Header</Header>
        <Layout>
            <Sider hide-trigger>Sider</Sider>
            <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
    </Layout>

    <Layout style="margin-bottom:20px;">
        <Header>Header</Header>
        <Layout>
            <Content>Content</Content>
            <Sider hide-trigger>Sider</Sider>
        </Layout>
        <Footer>Footer</Footer>
    </Layout>

    <Layout>
        <Sider hide-trigger>Sider</Sider>
        <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
        </Layout>
    </Layout>
</div>
</template>
<script>
    import ViewUI from 'view-design'
    import Vue from 'vue'
    Vue.use(ViewUI)
    export default {
    }
</script>
<style>
    .layout{
      border: 1px solid #eee;
      border-radius: 6px;
      margin-bottom: 20px;
      position: relative;
      transition: all .2s ease-in-out;
      color: #fff !important;
    }
    .layout-content,.ivu-layout-content {
        background: #0f8de9;
        min-height: 120px;
        line-height: 120px;
    }
    
    .ivu-layout-content {
        -webkit-box-flex: 1;
        -ms-flex: auto;
        flex: auto;
    }
    
    .ivu-layout-footer, .ivu-layout-header {
        background: #7cbce9 !important;
        color: #fff;
    }
    .ivu-layout-header {
        background: #515a6e;
        padding: 0 50px;
        height: 64px;
        line-height: 64px;
    }
    
    .ivu-layout-sider {
        background: #3a9fe8 !important;
        min-height: 120px;
        line-height: 120px;
    }
    .ivu-layout-sider {
        transition: all .2s ease-in-out;
        position: relative;
        background: #515a6e;
        min-width: 0;
    }
    .ivu-layout-content,.ivu-layout-sider,.ivu-layout-footer, .ivu-layout-header{
        display:flex;
        justify-content: center;
        align-items: center;
    }
</style>
```
