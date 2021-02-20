加载中基础用法：
通过设置 size 属性为 large 和 small 将 Spin 设置为大和小尺寸，不设置为默认（中）尺寸。

```jsx
<template>
  <div>
    <yz-spin size="small"></yz-spin>
    <yz-spin></yz-spin>
    <yz-spin size="large"></yz-spin>
  </div>
</template>
```

居中固定：
在容器内部垂直居中固定，需要父级有 relative 或 absolute。

```jsx
<template>
    <div class="spin-container" >
        <h3>登金陵凤凰台</h3>
        <address>李白</address>
        <article>
            <p>凤凰台上凤凰游，凤去台空江自流。</p>
            <p>吴宫花草埋幽径，晋代衣冠成古丘。</p>
            <p>三山半落青天外，二水中分白鹭洲。</p>
            <p>总为浮云能蔽日，长安不见使人愁。</p>
        </article>
        <yz-spin :fix="fix" :size="size" ></yz-spin>
    </div>

</template>
<script>
    export default {
        data(){
            return{
                fix: true,
                size:"large"
            }
        }
    }
</script>
<style>
    .spin-container{
    	display: inline-block;
        width: 400px;
        text-align: center;
        padding: 20px;
        position: relative;
        border: 1px solid #eee;
    }
</style>
```
