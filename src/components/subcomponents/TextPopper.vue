<template>
    <Popper arrow :show="showPopper" @close:popper="showPopper = false">
        <span
            @mouseenter="startHover" 
            @mouseleave="debouncedClose"
            @click="showPopper = !showPopper"
            :class="`${computedSpanClass} hover:cursor-pointer`"
        ><slot name="text"></slot></span>
        <template #content="{ close }">
            <div @mouseenter="startHover"  @mouseleave="debouncedClose">
                <slot name="content"></slot>
            </div>
        </template>
    </Popper>
</template>

<script>
import debounce from 'underscore/modules/debounce.js'

export default {
    props:{
        textColor:{
            type: String,
            required: false,
            default(){
                return "text-ht-dark-brown"
            }
        },
        textHoverColor:{
            type: String,
            required: false,
            default(){
                return "text-ht-brown"
            }
        },
        spanClass:{
            type: String,
            required: false,
            default(){
                return "underline"
            }
        }
    },
    data() {
        return {
            showPopper: false,
            debouncedClose: null
        }
    },
    methods:{
        startHover(){
            this.showPopper = true;
            this.debouncedClose.cancel();
        },
    },
    computed:{
        computedSpanClass(){
            return `${this.spanClass} ${this.textColor} hover:${this.textHoverColor}`
        }
    },
    mounted(){
        this.debouncedClose = debounce((width)=>{
            this.showPopper = false;
        }, 200);
    }
}
</script>

<style scoped>
</style>