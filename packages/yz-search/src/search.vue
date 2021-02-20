<template>
    <div :class="['yz-search',(isFocus||hasValue)?'yz-search-foucs':'']">
        <img class="yz-search-icon" src="./assets/search.svg" alt="">
        <div v-if="hasValue" class="tags-area">
            <div class="fill-tags" v-for="r in sortRules" :key="r.key" v-if="value[r.key]">
                <span>{{getShowStr(r,value[r.key])}}</span>
                <img src="./assets/close.svg" alt="" @click="clearItem(r.key)">
            </div>
            <div class="fill-tags" v-if="value['default']">
                <span>{{value['default']}}</span>
                <img src="./assets/close.svg" alt="" @click="clearItem('default')">
            </div>
        </div>
        <template v-if="(editTarget.key && editTarget.key !== '' ) && (!value[editTarget.key] || value[editTarget.key] === '') ">
            <div class="edit-tags">
                <span>{{editTarget.label}}：</span>
            </div>
        </template>
        <div class="drop">
            <Dropdown trigger="custom"
                      transfer
                      :visible="dropShow"
                      class="drop-menu">
                <DropdownMenu slot="list">
                    <DropdownItem v-for="r in rules"
                                  :name="r.key"
                                  :key="r.key"
                                  v-if="!value[r.key]"
                                  @click.native="clickRuleItem(r)"
                    >{{r.label}}</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
        <div class="drop">
            <Dropdown transfer theme="dark" transfer-class-name="yz-drop-dark" trigger="custom" :visible="selectShow" class="drop-menu yz-drop-dark" @click="clickSelectDropItem">
                <DropdownMenu slot="list">
                    <DropdownItem v-for="r in selectOptions"
                                  :key="r.value"
                                  :name="r.value"
                                  @click.native="clickSelectDropItem(r)"
                    >{{r.label}}</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
        <div class="search-input-area">
            <input type="text"
                   v-model.trim="inputValue"
                   ref="input"
                   @focus="handleInputFocus"
                   @blur="handleInputBlur"
                   :placeholder="(isFocus||hasValue||editTarget.key) ?'':placeholder"
                   @keyup.enter="handleInputEnter"
                   @keyup.8="handleBackSpace"
            >
        </div>
        <div class="search-clear" v-if="hasValue" @click="clearValue">
            <img src="./assets/close.svg" alt="">
        </div>
    </div>
</template>

<script>
    /**
     * 多条件搜索输入框.
     * @displayName YzSearch
     */
    import {
        DropdownMenu,DropdownItem,Message
    } from 'view-design'
    export default {
        name: "YzSearch",
        components:{
            DropdownMenu,
            DropdownItem
        },
        props:{
            /**
             * v-model，内容eg:
             * {
             *     name:'',
             *     type:''
             * }
             */
            value:{
                type:Object,
                default(){
                    return {}
                }
            },
            /**
             * 需要支持的查询条件：
             * 支持类型：input、select;
             * eg:
             * [{
             *     label:'名称',
             *     type:'input',
             *     key:'name'
             * },{
             *    label:'性别',
             *    type:'select',
             *    key:'gender',
             *    option:[{label:'男',value:'male'},{label:'女',value:'female'}]
             * }]
             *
             */
            rules:{
                type:Array,
                default(){
                    return []
                }
            },
            placeholder:{
                type:String,
                default:'输入查询条件进行过滤'
            }
        },
        computed:{
            hasValue(){
                let flag = false;
                for (let k in this.value){
                    if (this.value[k] !== '' && this.value[k] !== undefined && this.value[k] !== null){
                        flag = true
                    }
                }
                return flag
            },
            sortRules(){
                const {rules,indexArray} = this
                return rules.sort(function (a,b) {
                    return indexArray.indexOf(a.key) - indexArray.indexOf(b.key)
                })
            }
        },
        data(){
            return {
                // 聚焦
                isFocus:false,
                // 编辑对象
                editTarget:{},
                // 输入框值
                inputValue:"",
                // 展开
                dropShow:false,
                // 选择框
                selectShow:false,
                selectOptions:[],
                clearHandle:undefined,
                // 记录顺序
                indexArray:[]
            }
        },
        methods:{
            clickSelectDropItem(r){
                const {inputValue,value,editTarget,clearHandle} = this;
                clearTimeout(clearHandle)
                let newValue = Object.assign({},value,{[editTarget.key]:r.value})
                this.indexArray.push(editTarget.key)
                this.$emit('input',newValue)
                this.changeValue(newValue)
                this.selectShow = false
                this.selectOptions = []
                this.editTarget = {}
                this.$refs.input.blur()
            },
            handleBackSpace(){
                const {inputValue} = this;
                if (inputValue === ''){
                    this.editTarget = {}
                    this.dropShow = true
                    this.selectShow = false
                    this.selectOptions = []
                }
            },
            handleInputEnter(){
                const {inputValue,value,editTarget} = this;
                if (inputValue === '' || editTarget.type === 'select'){
                    if (editTarget.type === 'select'){
                        Message.error('该搜索条件不支持自己输入内容哦！')
                        this.inputValue = ''
                    }
                    return;
                }
                let key = editTarget.key || 'default'
                const noop = ()=> true
                const checkFn = this.editTarget.rule || noop
                if (checkFn(inputValue)){
                    let newValue = Object.assign({},value,{[key]:inputValue})
                    this.indexArray.push(key)
                    this.$emit('input',newValue)
                    this.changeValue(newValue)
                    this.editTarget = {}
                    this.inputValue = ''
                    this.selectShow = false
                    this.$refs.input.blur()
                }else {

                }
            },
            handleInputFocus(){
                this.isFocus = true
                if ( !this.editTarget.key){
                    this.dropShow = true
                }else {
                    this.dropShow = false
                }
            },
            handleInputBlur(){
                this.isFocus  = false
                this.dropShow = false;
                let type = this.editTarget.type;
                if (!this.dropShow){
                    if (type === 'input'){
                        if (this.inputValue === ''){
                            this.editTarget = {}
                        }
                    }else if(type === 'select'){
                        this.clearHandle = setTimeout(()=>{
                            this.editTarget = {}
                            this.selectShow = false
                            this.$nextTick(()=>{
                                this.selectOptions = []
                            })
                        },500)
                    }
                }
            },
            clickRuleItem(r){
                this.editTarget = r
                if (this.editTarget.type === 'select'){
                    this.selectShow = true
                    this.selectOptions = this.editTarget.option || []
                }
                this.$nextTick(() => {
                    if (this.editTarget.type !== 'select') {
                        this.$refs.input.focus()
                    }
                })
            },
            changeValue(value){
                /**
                 * change
                 * @event:数据变化
                 * @property 修改后的数据
                 */
                this.$emit('change',JSON.parse(JSON.stringify(value)))
            },
            clearItem(key){
                let newValue = Object.assign({},this.value,{[key]:''})
                this.indexArray.splice(this.indexArray.indexOf(key),1)
                this.$emit('input',newValue)
                this.changeValue(newValue)
            },
            clearValue(){
                let newValue = {}
                for (let k in this.value){
                    if (this.value[k] !== '' && this.value[k] !== undefined && this.value[k] !== null){
                        newValue[k] = ''
                    }
                }
                this.inputValue = ''
                this.$emit('input',newValue)
                /**
                 * clear
                 * @event:清空数据
                 * @property null
                 */
                this.$emit('clear')
                this.indexArray = []
                this.changeValue(JSON.parse(JSON.stringify(newValue)))
            },
            getShowStr(rule,value){
                let _value = ''
                if (rule.type === 'input'){
                    _value = value
                }else if (rule.type === 'select'){
                    let [item] = rule.option.filter(o=>o.value === value)
                    _value = item ? item.label: value
                }
                return `${rule.label}：${_value}`
            }
        }
    }
</script>
