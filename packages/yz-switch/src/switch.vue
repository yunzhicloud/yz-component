<template>
    <button :class="['yz-switch',value?'yz-switch-active':'yz-switch-inactive']" @click="handleClick">
        <div class="content">
            <label :class="['switch',value?'switch-on':'']">
                <span>
                    <!-- @slot 文字插槽 -->
                    <slot></slot>
                </span>
            </label>
        </div>
    </button>
</template>

<script>
    /**
     * 开关
     * @displayName YzSwitch
     */
    export default {
        name: "YzSwitch",
        props:{
            /**
             * 状态
             */
            value:{
                type:Boolean,
                default:false
            },
        },
        watch:{
            value(value) {
                this.setCurrentValue(value);
            }
        },
        methods:{
            setCurrentValue(value){
                this.$emit('input',value)
            },
            handleClick(){
                this.setCurrentValue(!this.value)
                this.$emit('change',!this.value)
            }
        }
    }
</script>
