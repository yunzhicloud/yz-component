用 IView Table 二次封装，API 参考https://www.iviewui.com/components/table

```jsx
<template>
    <div>
      <yz-table :columns="columns1" :data="data1" ref="testTable" stripe border :highlight-row="true">
         <template slot-scope="{ row }" slot="name">
               {{ row.name }}
          </template>
      </yz-table>
       <br>
          <Button type="primary" size="large" @click="exportData"><Icon type="ios-download-outline"></Icon> 导出数据</Button>
          <Button type="primary" size="large" @click="clearHighLight"><Icon type="ios-download-outline"></Icon> 清除高亮</Button>
    </div>
</template>
<script>
    import ViewUI from 'view-design'
    import Vue from 'vue'
    Vue.use(ViewUI)
    export default {
        methods:{
            exportData(){
                this.$refs.testTable.exportCsv({
                     filename: 'The original data'
                });
            },
            clearHighLight(){
                this.$refs.testTable.clearCurrentRow()
            }
        },
        data () {
            return {
                columns1: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center',
                        fixed: 'left'
                    },
                    {
                        title: 'Name',
                        slot    : 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        }
    }
</script>

```
