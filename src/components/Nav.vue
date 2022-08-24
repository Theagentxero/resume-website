<template>
    <div id="nav-parent" ref="mnav" :class="`flex flex-row ${(isSmall) ? '' : 'self-start'}`">
        <div :class="`nav-variable-width ${(isTop) ? 'basis-0' : 'basis-1/12'}`"></div>
        <div id="nav-cont" :class="`nav-variable-width ${(isTop) ? 'basis-full bg-ht-darker' : 'basis-5/6'}`">
            <div :class="`${(isTop) ? 'pb-2 pt-4 px-2 flex flex-col' : 'p-0 grid grid-flow-col grid-rows-5 gap-2 md:grid-rows-1'}`">
                <TransitionGroup name="tnav">
                        <NavButton id="collapse-btn" :onClick="toggleCollapsed" v-if="isTop && isSmall" :docked="isTop" key="Collapse">
                            <div class="m-0 p-0 flex flex-row">
                                <div :class="`m-0 p-0 basis-1/4 ${(isTop) ? 'visible' : 'invisible'}`">
                                    <i class="fa-solid fa-bars"></i>
                                </div>
                            </div>
                        </NavButton>
                        <NavButton class="nav-btn" link="Home" v-if="isTop && !collapsed" :docked="isTop" key="Home">
                            <div class="m-0 p-0 flex flex-row">
                                <div v-if="isTop" :class="`m-0 p-0 basis-1/4`">
                                    <i class="fa-solid fa-house"></i>
                                </div>
                                <div :class="`m-0 p-0 basis-1/4 ${(isTop) ? 'ml-1 basis-3/4' : 'basis-full'}`">
                                    Home
                                </div>
                            </div>
                        </NavButton>
                        <NavButton class="nav-btn" link="Blog" :onClick="navigationCollapse" v-if="!collapsed" :docked="isTop" key="Blog">
                            <div class="m-0 p-0 flex flex-row">
                                <div v-if="isTop" :class="`m-0 p-0 basis-1/4`">
                                    <i class="fa-solid fa-newspaper"></i> 
                                </div>
                                <div :class="`m-0 ml-1 p-0 ${(isTop) ? 'basis-3/4' : 'basis-full'}`">
                                    Blog
                                </div>
                            </div>
                        </NavButton>
                        <NavButton class="nav-btn" link="About" :onClick="navigationCollapse" v-if="!collapsed" :docked="isTop" key="About">
                            <div class="m-0 p-0 flex flex-row">
                                <div v-if="isTop" :class="`m-0 p-0 basis-1/4`">
                                    <i class="fa-solid fa-book"></i> 
                                </div>
                                <div :class="`m-0 p-0 ${(isTop) ? 'ml-1 basis-3/4' : 'basis-full'}`">
                                    About
                                </div>
                            </div>
                        </NavButton>
                        <NavButton class="nav-btn" link="Resume" :onClick="navigationCollapse" v-if="!collapsed" :docked="isTop" key="Resume">
                            <div class="m-0 p-0 flex flex-row">
                                <div v-if="isTop" :class="`m-0 p-0 basis-1/4`">
                                    <i class="fa-solid fa-file-lines"></i> 
                                </div>
                                <div :class="`m-0 ml-1 p-0 ${(isTop) ? 'basis-3/4' : 'basis-full'}`">
                                    Resume
                                </div>
                            </div>
                        </NavButton>
                        <NavButton class="nav-btn" link="Projects" :onClick="navigationCollapse" v-if="!collapsed" :docked="isTop" key="Projects">
                            <div class="m-0 p-0 flex flex-row">
                                <div v-if="isTop" :class="`m-0 p-0 basis-1/4`">
                                    <i class="fa-solid fa-code"></i> 
                                </div>
                                <div :class="`m-0 ml-1 p-0 ${(isTop) ? 'basis-3/4' : 'basis-full'}`">
                                    Projects
                                </div>
                            </div>
                        </NavButton>
                        <NavButton class="nav-btn" link="Contact" :onClick="navigationCollapse" v-if="!collapsed" :docked="isTop" key="Contact">
                            <div class="m-0 p-0 flex flex-row">
                                <div v-if="isTop" :class="`m-0 p-0 basis-1/4`">
                                    <i class="fa-solid fa-address-card"></i> 
                                </div>
                                <div :class="`m-0 ml-1 p-0 ${(isTop) ? 'basis-3/4' : 'basis-full'}`">
                                    Contact
                                </div>
                            </div>
                        </NavButton>
                </TransitionGroup>
            </div>
        </div>
        <div :class="`nav-variable-width ${(isTop) ? 'basis-0' : 'basis-1/12'}`"></div>
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
        showHome: {
            type: Boolean,
            required: true
        },
        showBack:{
            type: Boolean,
            required: true
        },
        isSmall:{
            type: Boolean,
            required: true
        },
        onNavReact:{
            type: Function,
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
            setTimeout(()=>{
                window.scrollBy(0, this.$refs.mnav.getBoundingClientRect().top)
                this.onNavReact();
            }, 250)
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
        isTop: function(updated, old){
            if(updated == false){
                this.previousCollapsedState = !!this.collapsed;
                this.collapsed = false;
            }
            if(updated != old && updated){
                if(this.previousCollapsedState){
                    this.collapseAndForceNavTop()
                }else{
                    this.collapsed = !!this.previousCollapsedState
                }
                
            }
        },
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