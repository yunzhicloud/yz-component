```jsx
<template>
<div>
    <Steps :current="1">
        <Step title="已完成" content="这里是该步骤的描述信息"></Step>
        <Step title="进行中" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
    </Steps>
    <br>
    <h3>迷你版：</h3>
    <br>
    <Steps :current="2" size="small">
        <Step title="已完成"></Step>
        <Step title="进行中"></Step>
        <Step title="待进行"></Step>
        <Step title="待进行"></Step>
    </Steps>
    <br>
    <h3>带图标的步骤条：</h3>
    <br>
    <Steps :current="1">
        <Step title="注册" icon="ios-person"></Step>
        <Step title="上传头像" icon="ios-camera"></Step>
        <Step title="验证邮箱" icon="ios-mail"></Step>
    </Steps>
</div>

</template>
<script>
    export default {

    }
</script>

```
