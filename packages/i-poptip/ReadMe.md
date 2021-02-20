```jsx
<template>
    <div class="example-demo">
    <div style="text-align: center;">
        <Poptip trigger="hover" title="Title" content="content">
                <Button>Hover</Button>
            </Poptip>
            <Poptip title="Title" content="content">
                <Button>Click</Button>
            </Poptip>
            <Poptip trigger="focus" title="Title" content="content">
                <Button>Focus</Button>
            </Poptip>
            <Poptip trigger="focus" title="Title" content="content">
                <Input placeholder="Input focus" />
            </Poptip>
    </div>
    <br>
    <div style="margin-top:20px">
          <div class="top">
                    <Poptip title="Title" content="content" placement="top-start">
                        <Button>Top Left</Button>
                    </Poptip>
                    <Poptip title="Title" content="content" placement="top">
                        <Button>Top Center</Button>
                    </Poptip>
                    <Poptip title="Title" content="content" placement="top-end">
                        <Button>Top Right</Button>
                    </Poptip>
                </div>
                <div class="center">
                    <div class="center-left">
                        <Poptip title="Title" content="content" placement="left-start">
                            <Button>Left Top</Button>
                        </Poptip><br><br>
                        <Poptip title="Title" content="content" placement="left">
                            <Button>Left Center</Button>
                        </Poptip><br><br>
                        <Poptip title="Title" content="content" placement="left-end">
                            <Button>Left Bottom</Button>
                        </Poptip>
                    </div>
                    <div class="center-right">
                        <Poptip title="Title" content="content" placement="right-start">
                            <Button>Right Top</Button>
                        </Poptip><br><br>
                        <Poptip title="Title" content="content" placement="right">
                            <Button>Right Center</Button>
                        </Poptip><br><br>
                        <Poptip title="Title" content="content" placement="right-end">
                            <Button>Right Bottom</Button>
                        </Poptip>
                    </div>
                </div>
                <div class="bottom">
                    <Poptip title="Title" content="content" placement="bottom-start">
                        <Button>Bottom Left</Button>
                    </Poptip>
                    <Poptip title="Title" content="content" placement="bottom">
                        <Button>Bottom Center</Button>
                    </Poptip>
                    <Poptip title="Title" content="content" placement="bottom-end">
                        <Button>Bottom Right</Button>
                    </Poptip>
                </div>
    </div>
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
   .top,.bottom{
        text-align: center;
    }
    .center{
        width: 300px;
        margin: 10px auto;
        overflow: hidden;
    }
    .center-left{
        float: left;
    }
    .center-right{
        float: right;
    }
</style>
```
