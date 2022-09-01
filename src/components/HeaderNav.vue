<template>
    <div class="flex flex-row" >
        <div :class="`nav-variable-width basis-1/12`"></div>
        <div :class="`nav-variable-width basis-5/6`">
            <div :class="`p-0 grid grid-flow-col grid-rows-5 gap-2 md:grid-rows-1`">
                <TransitionGroup name="tnav">
                        <NavButton class="nav-btn" link="Blog" :docked="false" key="Blog">
                            <div class="m-0 p-0 flex flex-row">
                                <div :class="`m-0 ml-1 p-0 basis-full`">
                                    Blog
                                </div>
                            </div>
                        </NavButton>
                        <NavButton class="nav-btn" link="About" :docked="false" key="About">
                            <div class="m-0 p-0 flex flex-row">
                                <div :class="`m-0 ml-1 p-0 basis-full`">
                                    About
                                </div>
                            </div>
                        </NavButton>
                        <NavButton class="nav-btn" link="Resume" :docked="false" key="Resume">
                            <div class="m-0 p-0 flex flex-row">
                                <div :class="`m-0 ml-1 p-0 basis-full`">
                                    Resume
                                </div>
                            </div>
                        </NavButton>
                        <NavButton class="nav-btn" link="Projects" :docked="false" key="Projects">
                            <div class="m-0 p-0 flex flex-row">
                                <div :class="`m-0 ml-1 p-0 basis-full`">
                                    Projects
                                </div>
                            </div>
                        </NavButton>
                        <NavButton class="nav-btn" link="Contact" :docked="false" key="Contact">
                            <div class="m-0 p-0 flex flex-row">
                                <div :class="`m-0 ml-1 p-0 basis-full`">
                                    Contact
                                </div>
                            </div>
                        </NavButton>
                </TransitionGroup>
            </div>
        </div>
        <div :class="`nav-variable-width basis-1/12`"></div>
    </div>
</template>

<script>
import NavButton from './NavButton.vue';

export default {
    name: 'NavBar',
    components: {
        NavButton
    },
    props:{
        isTop: {
            type: Boolean,
            default: false
        },
        isSmall:{
            type: Boolean,
            required: true
        }
    },
    data(){
        return{
        }
    },
    methods:{
    },
    watch:{
    },
    computed:{

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

<style scoped>
    #nav-parent .nav-variable-width {
        transition: all 0.125s;
    }

    .tnav-enter-active,
    .tnav-leave-active {
        transition: all 0.125s ease-in-out;
    }
    .tnav-enter-from,
    .tnav-leave-to {
        opacity: 0;
    }
</style>