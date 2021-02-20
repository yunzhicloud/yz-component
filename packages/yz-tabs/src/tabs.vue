<template>
    <div class="yz-tabs" :class="['yz-tabs-'+type]">
        <!-- @slot 内容插槽 -->
        <slot></slot>
    </div>
</template>

<script>
    /**
     * 标签页组件.
     * @displayName YzTabs
     */
    export default {
        name: "YzTabs",
        props:{
            /**
             * 类型：default、radio、card、underline
             */
            type:{
                type:String,
                default:'default'
            },
            /**
             * 选中标签
             */
            activeName:{
                type:String,
                default:''
            },
            /**
             * 选中标签
             */
            value:{
                type:String,
                default:''
            }
        },
        data(){
          return {
              currentName: this.value || this.activeName,
          }
        },
        methods:{
            setCurrentName(value) {
                const changeCurrentName = () => {
                    this.currentName = value;
                    /** v-model
                     * @property {data} v-model
                     */
                    this.$emit('input', value);
                };
                if (this.currentName !== value){
                    changeCurrentName()
                }
            }
        },
        watch:{
            activeName(value) {
                this.setCurrentName(value);
            },
            value(value) {
                this.setCurrentName(value);
            }
        },
        created(){
            this.$on('tab-click',(data) =>{
                this.setCurrentName(data)
                /** 标签点击事件
                 * @event:标签点击
                 * @property {data} 标签name字段
                 */
                this.$emit('tab-clcik',data)
            })
        }
    }
</script>
