<template>
    <div id="Home" class="scroll-smooth">
        <Howdy></Howdy>
        <HeaderNav ref="headerNav" v-show="!isMediumOrLarge"
            class=" mb-6 z-10 overflow-hidden"
            :isSmall="isSmall"
            :onNavReact="cancelDebounce"
            :showBack="true"
        ></HeaderNav>
        <Transition name="floatingnav">
            <FloatingNav v-if="isSmall && navTop"
                class="fixed top-0 left-0 z-10 w-full"
                :isSmall="isSmall"
            ></FloatingNav>
        </Transition>
        <div class="flex flex-row">
            <div class="basis-0 md:basis-2/12 xl:basis-1/12">
                <Transition name="floatingnavside">
                    <FloatingNav v-if="!isSmall && navTop"
                        class="sticky top-0 left-0 z-10 w-full"
                        :isSmall="isSmall"
                    ></FloatingNav>
                </Transition>
            </div>
        
            <div class="px-2 basis-full md:basis-5/6 xl:basis-5/6 flex-grow">
                <div id="Blog">
                    <div class=" drop-shadow sm:drop-shadow-lg flex flex-row items-center justify-between bg-ht-dark-brown">
                        <div class=" subpixel-antialiased text-2xl lg:text-3xl 2xl:text-4xl  text-ht-white font-extrabold p-2 sm:p-3">
                            Blog
                        </div>
                        <button
                            class="text-base lg:text-lg xl:text-xl drop-shadow-lg p-1 lg:p-2 mr-2 bg-ht-dark hover:bg-ht-darker text-ht-white hover:text-ht-whiter"
                            @click="goToBlogSite"
                        >
                            View Blog Site
                        </button>
                    </div>
                    <Blog></Blog>
                </div>
                <!-- <div id="About">
                    <div class="my-2 subpixel-antialiased text-2xl lg:text-3xl 2xl:text-4xl bg-ht-dark-brown text-ht-white font-extrabold p-2 sm:p-3 drop-shadow sm:drop-shadow-lg">
                        About
                    </div>
                </div> -->
                <div id="Resume">
                    <div class="my-2 subpixel-antialiased text-2xl lg:text-3xl 2xl:text-4xl bg-ht-dark-brown text-ht-white font-extrabold p-2 sm:p-3 drop-shadow sm:drop-shadow-lg">
                        Resume
                    </div>
                    <Resume></Resume>
                </div>
                <div id="Projects">
                    <div class="my-2 subpixel-antialiased text-2xl lg:text-3xl 2xl:text-4xl bg-ht-dark-brown text-ht-white font-extrabold p-2 sm:p-3 drop-shadow sm:drop-shadow-lg">
                        Featured Projects
                    </div>
                    <ProjectsDisplayCase></ProjectsDisplayCase>
                </div>
                <div id="Contact">
                    <div class="mt-2 subpixel-antialiased text-2xl lg:text-3xl 2xl:text-4xl bg-ht-dark-brown text-ht-white font-extrabold p-2 sm:p-3 drop-shadow sm:drop-shadow-lg">
                        Contact
                    </div>
                    <Contact></Contact>
                </div>
                <div id="Footer">
                    <div class="mt-2 subpixel-antialiased bg-ht-dark-brown text-ht-white pb-5 px-2 pt-2 sm:px-3 sm:pt-3 drop-shadow sm:drop-shadow-lg flex flex-col sm:flex-row gap-2 justify-between">
                        <div>
                            made with ❤ by Taylor Richards in {{new Date().getFullYear()}} 
                        </div>
                        <div class="underline text-ht-whiter hover:text-ht-white">
                            <a href="https://github.com/Theagentxero/resume-website" target="_blank">
                                View Site Source On GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="basis-0 lg:basis-1/12"></div>
        </div>
    </div>
</template>

<script>

import Howdy from '../components/Howdy.vue'
import HeaderNav from '../components/HeaderNav.vue'
import FloatingNav from '../components/FloatingNav.vue'
import ProjectsDisplayCase from '../components/ProjectsDisplayCase.vue'
import Blog from '../components/Blog.vue'
import Contact from '../components/Contact.vue'

import Resume from '../components/Resume.vue'

var resizeObs = null;
var intObs = null;
export default {
    components: {
        Howdy,
        HeaderNav,
        FloatingNav,
        Blog,
        Contact,
        ProjectsDisplayCase,
        Resume
    },
    data() {
        return {
            navTop: false,
            isSmall: false,
            isMediumOrLarge: false,
            debouncedNavTop: null,
        }
    },
    methods: {
        goToBlogSite(){
            this.$router.push('/blog');
        },
        cancelDebounce(){
            this.debouncedNavTop.cancel();
        }
    },
    beforeMount () {
        var bodyElm = document.getElementsByTagName('body')[0];
        resizeObs = new ResizeObserver((entries)=>{
            for (const entry of entries) {
                if(entry.contentRect.width < 768){
                    this.isSmall = true;
                    this.isMediumOrLarge = false;
                }else{
                    this.isSmall = false;
                    if(entry.contentRect.width < 1280){
                        this.isMediumOrLarge = true;
                    }else{
                        this.isMediumOrLarge = false;
                    }
                }
            }
        })
        resizeObs.observe(bodyElm);
    },
    mounted(){
        var headerNavElm = this.$refs.headerNav.$el
        let options = {
            threshold: 0.1
        }
        intObs = new IntersectionObserver((entries)=>{
            if(entries[0].isIntersecting){
                this.navTop = false;
            }else{
                this.navTop = true;
            }
            // this.debouncedNavTop(entries[0].isIntersecting)
        }, options);

        intObs.observe(headerNavElm)

    }, 
    beforeDestroy () {
        resizeObs.disconnect()
        intObs.disconnect();
    },
};
</script>

<style scoped>
.floatingnav-enter-active,
.floatingnav-leave-active {
    transition: all 0.25s ease-in-out;
}
.floatingnav-enter-from,
.floatingnav-leave-to {
     transform: translateY(-200px);
}

.floatingnavside-enter-active,
.floatingnavside-leave-active {
    transition: all 0.3s ease-in-out;
}
.floatingnavside-enter-from,
.floatingnavside-leave-to {
    transform: translatex(-350px);
}

</style>