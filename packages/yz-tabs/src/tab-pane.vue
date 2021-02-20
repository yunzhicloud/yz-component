<template>
    <div :class="['yz-tab-pane',active?'yz-tab-pane-checked':'']" @click="handleClick">
        <!-- @slot 内容插槽 -->
        <slot></slot>
    </div>
</template>

<script>
    /**
     * @ignore
     */
    export default {
        name: "YzTabPane",

        props:{
            activeName:{
                type:String,
                default:''
            },
            name:{
                type:String,
                default:''
            }
        },
        computed:{
            active() {
                const active = this.$parent.currentName === (this.name || this.index);
                // if (active) {
                //     this.loaded = true;
                // }
                return active;
            },
        },
        methods:{
          handleClick(){
              this.$parent.$emit('tab-click',this.name)
          }
        },
        mounted(){
        }
    }
</script>
