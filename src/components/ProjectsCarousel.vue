<template>
    <div id="project-carousel-wrapper" ref="carousel" >
        <div id="carousel-stage" class="relative h-96">
            <div class="relative h-96 overflow-x-scroll snap-x snap-mandatory ">
                <div 
                    class="float-left h-96 transition-all duration-200 bg-ht-whiter flex justify-center snap-center"
                    :style="{ 
                        // 'right': `${carouselStageWidth * currentPageIndex}px`,
                        'width': carouselStageWidth + 'px' }"
                >
                    <div class="my-2 mx-8 md:mx-16 grow bg-pink-300">
                        Content Valve Ai
                    </div>
                </div>
                <div 
                    class="float-left h-96 transition-all duration-200 bg-ht-whiter flex justify-center snap-center"
                    :style="{ 
                        // 'right': `${carouselStageWidth * (currentPageIndex - 1)}px`,
                        'width': carouselStageWidth + 'px'
                    }"
                >
                    <div class="my-2 mx-8 md:mx-16 grow bg-pink-300">
                        Content JDO
                    </div>
                </div>
                <div 
                    class="float-left h-96 transition-all duration-200 bg-ht-whiter flex justify-center snap-center"
                    :style="{ 
                        // 'right': `${carouselStageWidth * (currentPageIndex - 2)}px`,
                        'width': carouselStageWidth + 'px'
                    }"
                >
                    <div class="my-2 mx-8 md:mx-16 grow bg-pink-300">
                        Content This Site
                    </div>
                </div>
            </div>
            <div 
                @click="moveLeft"
                class="absolute top-32 left-0 md:left-2 h-24 w-6 md:w-12 bg-ht-brown bg-opacity-10 hover:bg-opacity-40 grid grid-cols-1 content-center text-2xl md:text-5xl text-ht-dark-brown shadow-inner"
            >
                <i class="fa-solid fa-chevron-left mx-auto"></i>
            </div>
            <div
                @click="moveRight" 
                class="absolute top-32 right-0 md:right-2 h-24 w-6 md:w-12 bg-ht-brown bg-opacity-10 hover:bg-opacity-40 grid grid-cols-1 content-center text-2xl md:text-5xl text-ht-dark-brown shadow-inner">
                <i class="fa-solid fa-chevron-right mx-auto"></i>
            </div>
        </div>
        
        <div class="flex flex-row mt-1">
            <div class="grow"></div>
            <div class="flex items-center leading-9">
                <a v-for="(project, idx) in projectNames" :key="`${project}`" @click="carouselPageSelect(project)">
                    <CarouselDot :isActive="(active == project)"></CarouselDot>
                </a>
            </div>
            <div class="grow"></div>
        </div>
    </div>
</template>

<script>
import CarouselDot from './CarouselDot.vue'
import debounce from 'underscore/modules/debounce.js'

var carObs = null;

export default {
    name: "ProjectsCarousel",
    components: {
        CarouselDot,
    },
    data() {
        return {
            projectNames: ['Valve Ai', 'JDO', 'This Site'],
            active: 'Valve Ai',
            debouncedCarouselWidthUpdate: null,
            carouselStageWidth: 100,
        }
    },
    methods: {
        carouselPageSelect(projectName){
            this.active = projectName;
        },
        pageIndex(name){
            return this.projectNames.indexOf(name)
        },
        moveLeft(){
            if(this.currentPageIndex - 1 >= 0){
                this.active = this.projectNames[this.currentPageIndex - 1];
            }
        },
        moveRight(){
            if(this.currentPageIndex + 1 < this.projectNames.length){
                this.active = this.projectNames[this.currentPageIndex +1];
            }
        }
    },
    computed:{
        currentPageIndex(){
            return this.pageIndex(this.active)
        }
    },
    watch:{
        active: function(updated, old){
        },
    },
    beforeMount () {
    },
    mounted () {
        this.debouncedCarouselWidthUpdate = debounce((width)=>{
            console.log(width)
            this.carouselStageWidth = width;
        }, 50);
        var carouselStage = document.getElementById('carousel-stage')
        carObs = new ResizeObserver((entries)=>{
            this.debouncedCarouselWidthUpdate(entries[0].contentRect.width);
        })
        carObs.observe(carouselStage);
    },
    beforeDestroy () {
        this.carObs.disconnect();
    },
}
</script>

<style scoped>

</style>