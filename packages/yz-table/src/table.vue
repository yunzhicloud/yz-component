<script>
    /**
     * 表单.
     * @displayName YzTable
     */
    import {Table} from 'view-design'
    export default {
        name: "YzTable",
        components:{
            Table
        },
        render(h){
            const {$attrs,$listeners,$scopedSlots,_uid,getRowClass} = this;
            return h('div',{
                'class':{
                    'yz-table-warpper':true
                }
            },[h(Table,{
                ref:_uid+'_table',
                props:{
                    ...$attrs,
                    'row-class-name':getRowClass
                },
                on:$listeners,
                scopedSlots:$scopedSlots
            })])
        },
        methods:{
            selectAll(params){
                const {_uid} = this;
                this.$refs[_uid + '_table'].selectAll(params)
            },
            exportCsv(params){
                const {_uid} = this;
                this.$refs[_uid + '_table'].exportCsv(params)
            },
            clearCurrentRow(){
                const {_uid} = this;
                this.$refs[_uid + '_table'].clearCurrentRow()
            },
            getRowClass(row,index){
                const {_isChecked} = row
                return _isChecked?`yz-row-checked`:''
            }
        }
    }
</script>
