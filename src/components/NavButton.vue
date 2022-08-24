<template>
    <button 
        :class="`${dockedClass} font-bold`"
        @click="handleClick"
        @middleClick=""
    >
        <slot/>
    </button>
</template>

<script>

export default {
    name: 'NavButton',
    components: {
    },
    props:{
        link:{
            type: String,
            required: false,
            default: null
        },
        onClick:{
            type: Function,
            required: false,
            default: null
        },
        size: {
            type: String,
            validator: function (value) {
                return ['sm', 'md', 'lg'].indexOf(value) !== -1;
            }
        },
        docked:{
            type: Boolean,
            default: false
        },
    },
    data(){
        return{

        }
    },
    methods:{
        handleClick(){
            if(this.onClick != null){
                this.onClick();
            }
            if(this.link != null){
                this.$router.push({ hash: `#${this.link}`})
            }
        }
    },
    watch:{

    },
    computed:{
        sizeClass(){
            if(this.size == 'sm'){
                return ``
            }else if(this.size == 'lg'){
                return ``
            }else{
                return ``
            }
        },
        dockedClass(){
            if(this.docked){
                return `text-sm lg:text-base xl:text-sm 2xl:text-lg drop-shadow p-1 lg:p-2 bg-ht-dark hover:bg-ht-darker text-ht-white hover:text-ht-whiter text-left mb-1`
            }else{
                return `text-lg lg:text-xl xl:text-2xl drop-shadow-lg p-2 lg:p-3 bg-ht-dark hover:bg-ht-darker text-ht-white hover:text-ht-whiter`
            }
        }
    },
    beforeCreate(){

    },
    created(){

    },
    beforeMount (){

    },
    mounted(){

    },
    beforeUpdate(){

    },
    updated(){

    },
    beforeDestroy(){

    },
    destroyed(){

    }
}
</script>

<style lang="scss" scoped>

</style>