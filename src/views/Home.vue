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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel purus at nulla ornare laoreet at in ligula. Donec mattis velit ut congue auctor. Phasellus eget consectetur turpis. Nunc eu interdum metus. Nulla facilisis est quis enim lobortis, quis semper mauris pellentesque. In hac habitasse platea dictumst. Mauris sed lorem sit amet elit luctus faucibus. In eu ante vel elit facilisis pretium ut eget orci. Nulla tortor tortor, aliquam at aliquam non, lobortis ac quam.</p>
                    <p>Maecenas malesuada ante ac est tincidunt, nec vestibulum massa condimentum. Nam dolor sem, tristique vel fermentum eu, congue eu lectus. Donec eget sagittis massa, at vehicula odio. Nullam volutpat ut purus eget ullamcorper. Cras rhoncus pharetra dolor, vel rhoncus dui ullamcorper sed. Maecenas venenatis rutrum leo, eget varius sem eleifend vel. Nunc eget ante imperdiet, imperdiet metus nec, faucibus dolor. Vestibulum cursus felis sit amet sollicitudin elementum. Nullam vehicula eu augue vel rhoncus. Donec mattis, ante ac faucibus viverra, mi purus mattis est, vitae imperdiet arcu ipsum at magna. Morbi quam risus, laoreet in ipsum id, tempor vulputate orci. Proin condimentum molestie justo eu pretium. Duis nec sagittis metus, eu feugiat dolor. Aliquam eu erat porttitor, pellentesque dui a, rhoncus velit.</p>
                    <p>In vitae neque ac nunc porttitor posuere vel ut lorem. In cursus arcu sollicitudin mi dictum fermentum. In malesuada purus vitae fringilla laoreet. Mauris sit amet ante nisl. Maecenas tristique aliquet commodo. Maecenas rhoncus sapien a ante facilisis tempor. Sed mollis vestibulum mattis. Nulla scelerisque bibendum mi. Donec quis commodo ex. Sed lobortis congue nisi non tincidunt.</p>
                    <p>Nullam commodo tristique tristique. Vivamus id ex eros. Aenean venenatis ultricies pulvinar. Suspendisse aliquam in urna vitae varius. Nullam pulvinar massa elit, dictum iaculis orci gravida sit amet. Nullam tincidunt facilisis mattis. Fusce dignissim est at elementum consectetur. Duis ut vulputate mauris. Cras nulla tellus, vehicula vitae odio pretium, semper imperdiet velit. Praesent et eros eget augue molestie laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc accumsan est at eros luctus lacinia. Aliquam quis elit nisl. Duis ac risus a augue facilisis bibendum sit amet nec ex. Nunc quis risus pulvinar dui volutpat dignissim quis at turpis. Vivamus tristique convallis nisi, a condimentum orci.</p>
                    <p>Nullam vehicula gravida lectus, lobortis fermentum felis pharetra at. Donec fermentum ante id diam feugiat rhoncus. Nunc auctor lacinia mauris quis euismod. Nullam consequat ligula vitae odio dapibus rhoncus. Nulla facilisi. Duis placerat ligula faucibus lorem elementum, sed cursus sapien ornare. Sed quis nisl finibus, elementum lorem a, vestibulum nibh. Vestibulum ligula leo, imperdiet eget accumsan non, mattis laoreet leo. Sed mollis ac erat sit amet sagittis. Cras at urna quis justo feugiat blandit ac a est. Suspendisse luctus tortor rutrum convallis posuere. Pellentesque vel aliquam sapien, eu elementum dui. Mauris non ultrices neque. Vestibulum a ex vehicula, commodo leo quis, maximus nulla.</p>
                </div> -->
                <div id="Resume">
                    <div class="my-2 subpixel-antialiased text-2xl lg:text-3xl 2xl:text-4xl bg-ht-dark-brown text-ht-white font-extrabold p-2 sm:p-3 drop-shadow sm:drop-shadow-lg">
                        Resume
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel purus at nulla ornare laoreet at in ligula. Donec mattis velit ut congue auctor. Phasellus eget consectetur turpis. Nunc eu interdum metus. Nulla facilisis est quis enim lobortis, quis semper mauris pellentesque. In hac habitasse platea dictumst. Mauris sed lorem sit amet elit luctus faucibus. In eu ante vel elit facilisis pretium ut eget orci. Nulla tortor tortor, aliquam at aliquam non, lobortis ac quam.</p>
                    <p>Maecenas malesuada ante ac est tincidunt, nec vestibulum massa condimentum. Nam dolor sem, tristique vel fermentum eu, congue eu lectus. Donec eget sagittis massa, at vehicula odio. Nullam volutpat ut purus eget ullamcorper. Cras rhoncus pharetra dolor, vel rhoncus dui ullamcorper sed. Maecenas venenatis rutrum leo, eget varius sem eleifend vel. Nunc eget ante imperdiet, imperdiet metus nec, faucibus dolor. Vestibulum cursus felis sit amet sollicitudin elementum. Nullam vehicula eu augue vel rhoncus. Donec mattis, ante ac faucibus viverra, mi purus mattis est, vitae imperdiet arcu ipsum at magna. Morbi quam risus, laoreet in ipsum id, tempor vulputate orci. Proin condimentum molestie justo eu pretium. Duis nec sagittis metus, eu feugiat dolor. Aliquam eu erat porttitor, pellentesque dui a, rhoncus velit.</p>
                    <p>In vitae neque ac nunc porttitor posuere vel ut lorem. In cursus arcu sollicitudin mi dictum fermentum. In malesuada purus vitae fringilla laoreet. Mauris sit amet ante nisl. Maecenas tristique aliquet commodo. Maecenas rhoncus sapien a ante facilisis tempor. Sed mollis vestibulum mattis. Nulla scelerisque bibendum mi. Donec quis commodo ex. Sed lobortis congue nisi non tincidunt.</p>
                    <p>Nullam commodo tristique tristique. Vivamus id ex eros. Aenean venenatis ultricies pulvinar. Suspendisse aliquam in urna vitae varius. Nullam pulvinar massa elit, dictum iaculis orci gravida sit amet. Nullam tincidunt facilisis mattis. Fusce dignissim est at elementum consectetur. Duis ut vulputate mauris. Cras nulla tellus, vehicula vitae odio pretium, semper imperdiet velit. Praesent et eros eget augue molestie laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc accumsan est at eros luctus lacinia. Aliquam quis elit nisl. Duis ac risus a augue facilisis bibendum sit amet nec ex. Nunc quis risus pulvinar dui volutpat dignissim quis at turpis. Vivamus tristique convallis nisi, a condimentum orci.</p>
                    <p>Nullam vehicula gravida lectus, lobortis fermentum felis pharetra at. Donec fermentum ante id diam feugiat rhoncus. Nunc auctor lacinia mauris quis euismod. Nullam consequat ligula vitae odio dapibus rhoncus. Nulla facilisi. Duis placerat ligula faucibus lorem elementum, sed cursus sapien ornare. Sed quis nisl finibus, elementum lorem a, vestibulum nibh. Vestibulum ligula leo, imperdiet eget accumsan non, mattis laoreet leo. Sed mollis ac erat sit amet sagittis. Cras at urna quis justo feugiat blandit ac a est. Suspendisse luctus tortor rutrum convallis posuere. Pellentesque vel aliquam sapien, eu elementum dui. Mauris non ultrices neque. Vestibulum a ex vehicula, commodo leo quis, maximus nulla.</p>
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
                                View Site Source On Github
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
    import debounce from 'underscore/modules/debounce.js'

    var resizeObs = null;
    var intObs = null;
    export default {
        components: {
            Howdy,
            HeaderNav,
            FloatingNav,
            Blog,
            Contact,
            ProjectsDisplayCase
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