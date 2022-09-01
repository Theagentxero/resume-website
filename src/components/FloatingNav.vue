<template>
    <div id="nav-cont" :class="`nav-variable-width basis-full bg-ht-darker`">
        <div :class="`p-2 flex flex-col`">
            <TransitionGroup name="tnav">
                    <NavButton id="collapse-btn" :onClick="toggleCollapsed" v-if="isSmall" :docked="true" key="Collapse">
                        <div class="m-0 p-0 flex flex-row">
                            <div :class="`m-0 px-5 md:px-0 md:pl-1 md:pr-2 fa-fw lg:fa-1x xl:fa-fw 2xl:fa-lg ${(isTop) ? 'visible' : 'invisible'}`">
                                <i class="fa-solid fa-bars"></i>
                            </div>
                            <div :class="`ml-2 p-0`">
                                Howdy Taylor
                            </div>
                        </div>
                    </NavButton>
                    <NavButton class="nav-btn" link="Home" :onClick="navigationCollapse" v-if="!collapsed" :docked="true" key="Home">
                        <div class="m-0 p-0 flex flex-row">
                            <div class="m-0 px-5 md:px-0 md:pl-1 md:pr-2 fa-fw lg:fa-1x xl:fa-fw 2xl:fa-lg">
                                <i class="fa-solid fa-house"></i>
                            </div>
                            <div :class="`ml-2 p-0`">
                                Home
                            </div>
                        </div>
                    </NavButton>
                    <NavButton class="nav-btn" link="Blog" :onClick="navigationCollapse" v-if="!collapsed" :docked="true" key="Blog">
                        <div class="m-0 p-0 flex flex-row">
                            <div class="m-0 px-5 md:px-0 md:pl-1 md:pr-2 fa-fw lg:fa-1x xl:fa-fw 2xl:fa-lg">
                                <i class="fa-solid fa-newspaper"></i> 
                            </div>
                            <div :class="`ml-2 p-0`">
                                Blog
                            </div>
                        </div>
                    </NavButton>
                    <NavButton class="nav-btn" link="About" :onClick="navigationCollapse" v-if="!collapsed" :docked="true" key="About">
                        <div class="m-0 p-0 flex flex-row">
                            <div class="m-0 px-5 md:px-0 md:pl-1 md:pr-2 fa-fw lg:fa-1x xl:fa-fw 2xl:fa-lg">
                                <i class="fa-solid fa-book" data-fa-transform="right-1"></i> 
                            </div>
                            <div :class="`ml-2 p-0`">
                                About
                            </div>
                        </div>
                    </NavButton>
                    <NavButton class="nav-btn" link="Resume" :onClick="navigationCollapse" v-if="!collapsed" :docked="true" key="Resume">
                        <div class="m-0 p-0 flex flex-row">
                            <div class="m-0 px-5 md:px-0 md:pl-1 md:pr-2 fa-fw lg:fa-1x xl:fa-fw 2xl:fa-lg">
                                <i class="fa-solid fa-file-lines" data-fa-transform="right-1"></i> 
                            </div>
                            <div :class="`ml-2 p-0`">
                                Resume
                            </div>
                        </div>
                    </NavButton>
                    <NavButton class="nav-btn" link="Projects" :onClick="navigationCollapse" v-if="!collapsed" :docked="true" key="Projects">
                        <div class="m-0 p-0 flex flex-row">
                            <div class="m-0 px-5 md:px-0 md:pl-1 md:pr-2 fa-fw lg:fa-1x xl:fa-fw 2xl:fa-lg">
                                <i class="fa-solid fa-code" data-fa-transform="left-1"></i> 
                            </div>
                            <div :class="`ml-2 p-0`">
                                Projects
                            </div>
                        </div>
                    </NavButton>
                    <NavButton class="nav-btn" link="Contact" :onClick="navigationCollapse" v-if="!collapsed" :docked="true" key="Contact">
                        <div class="m-0 p-0 flex flex-row">
                            <div class="m-0 px-5 md:px-0 md:pl-1 md:pr-2 fa-fw lg:fa-1x xl:fa-fw 2xl:fa-lg">
                                <i class="fa-solid fa-address-card"></i> 
                            </div>
                            <div :class="`ml-2 p-0`">
                                Contact
                            </div>
                        </div>
                    </NavButton>
            </TransitionGroup>
        </div>
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
            default: true
        },
        isSmall:{
            type: Boolean,
            required: true
        }
    },
    data(){
        return{
            collapsed: false,
            expandHeight: 0,
            previousCollapsedState: true
        }
    },
    methods:{
        isActive(page){
            return false;
        },
        navigationCollapse(){
            if(this.isSmall){
                this.collapsed = true;
            }else{
                this.collapsed = false;
            }
        },
        collapseAndForceNavTop(){
            if(this.isSmall){
                this.collapsed = true;
            }else{
                this.collapsed = false;
            }
        },
        toggleCollapsed(){
            if(!this.collapsed){
                this.collapseAndForceNavTop()
            }else{
                this.collapsed = false;
            }
        }
    },
    watch:{
        isSmall: function(updated, old){
            if(!updated){
                this.collapsed = false;
            }
        }
    },
    computed:{

    },
    beforeCreate(){

    },
    created(){

    },
    beforeMount (){
        this.collapsed = this.isSmall;
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