<script>
    /**
     * 下拉.
     * @displayName YzDropDown
     */
    import {Dropdown} from 'view-design'
    export default {
        name: "YzDropDown",
        render(h){
            const {$attrs,$listeners,$scopedSlots} = this;
            return h(Dropdown,{
                'class':{
                    'yz-drop-light':$attrs.theme !== 'dark',
                    'yz-drop-dark':$attrs.theme === 'dark'
                },
                props:{
                    ...$attrs,
                    'transfer-class-name':$attrs.theme !== 'dark'?'yz-drop-light':'yz-drop-dark'
                },
                on:$listeners,
                scopedSlots:$scopedSlots
            })
        }
    }
</script>
