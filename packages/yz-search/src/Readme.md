多条件查询输入框

v-model中如果没有选中条件便输入，会出现default字段
```jsx
<template>
    <div>
        <yz-search
            ref="search" 
            v-model="searchParam" 
            @clear="handleClear" 
            @change="handleChange"
            :rules="searchRules"
        ></yz-search>
    </div>
</template>
<script>
     export default {
        data(){
            return {
                searchParam:{
                    name:'',
                    gender:''
                },
                searchRules:[{label:'选择项的显示最大长度是可以进行配置的',type:'input',key:'name'},
                {label:'性别',type:'select',key:'gender',option:[{label:'男',value:'male'},{label:'女',value:'female'}]}]
            }
        },
        methods: {
            handleChange(value) {
                console.log(value);
            },
            handleClear() {
                console.log('清空');
            },
            clearName(){
                this.$refs.search.clearItem('name')
            }
        }
     }
</script>
```
