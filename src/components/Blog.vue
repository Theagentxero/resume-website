<template>
    <div class="w-100">
        <div class="p-2 flex flex-col lg:flex-row items-stretch lg:">
            <div 
                class="cursor-pointer brightness-100 hover:brightness-125 max-h-96 relative aspect-square border-ht-dark-brown border-4 flex flex-col lg:basis-1/2 bg-cover shrink-0 drop-shadow-lg mr-0 lg:mr-4"
                :style="{
                    'background-image': 'url(\'/blog_bearing.webp\')'
                }"
                @click="clarityModal = true"
            >
                <div class="basis-1/2"></div>
                <div class="basis-0 sm:basis-auto lg:basis-1/2 xl:basis-auto border-t-4 border-b-4 lg:border-b-0 xl:border-b-4 backdrop-blur-lg 
                 border-ht-dark-brown p-2 backdrop-contrast-50  backdrop-brightness-200 flex flex-col">
                    <div class="text-xl font-semibold underline underline-offset-1">
                        The Practical Approach To Code Clarity
                    </div>
                    <div class="text-sm  xl:text-base font-semibold stretch">
                        Why you shouldn't beat a bearing into a blind hole, numbers side down.
                    </div>
                </div>
            </div>
            <div class="max-h-fit lg:max-h-96 mt-4 lg:mt-0 grid grid-rows-3 gap-1 grow self-stretch">
                <div class="cursor-pointer brightness-100 hover:brightness-125 border-ht-dark-brown border-4 drop-shadow-lg flex flex-row content-end bg-right-top bg-cover"
                    :style="{
                        'background-image': 'url(\'/blog_birds_wide.webp\')'
                    }"
                    @click="cargoModal = true"
                >
                    <div class="self-end lg:self-stretch xl:self-end p-2 border-t-0 border-r-0 grow sm:grow-0 sm:shrink lg:grow xl:grow-0 xl:shrink sm:border-t-0 sm:border-r-4 lg:border-r-0 xl:border-r-4 xl:border-t-4 border-ht-dark-brown backdrop-blur-lg backdrop-brightness-200">
                        <div class="text-lg font-semibold underline underline-offset-1">
                            The New Face of Cargo Cult Programming
                        </div>
                        <div class="text-sm xl:text-base font-semibold">
                            Can we talk for a moment? Just you and me... <br class="block lg:hidden xl:block">
                            I think you have a package manager problem.
                            
                        </div>
                    </div>
                </div>
                <div class="cursor-pointer brightness-100 hover:brightness-125 border-ht-dark-brown border-4 drop-shadow-lg flex flex-row content-end bg-right-top bg-cover"
                    :style="{
                        'background-image': 'url(\'/blog_lock.webp\')'
                    }"
                    @click="jwtModal = true"
                >
                    <div class="self-end lg:self-stretch xl:self-end p-2 border-t-0 border-r-0 grow sm:grow-0 sm:shrink lg:grow xl:grow-0 xl:shrink sm:border-t-0 sm:border-r-4 lg:border-r-0 xl:border-r-4 xl:border-t-4 border-ht-dark-brown backdrop-blur-lg backdrop-brightness-200">
                        <div class="text-lg font-semibold underline underline-offset-1">
                            A Practical Guide To JWTs
                        </div>
                        <div class="text-sm xl:text-base font-semibold">
                            Everything I wish someone had explained  <br class="hidden sm:block md:block lg:hidden xl:block">
                            when I was first considering authentication.
                            
                        </div>
                    </div>
                </div>
                <div class="cursor-pointer brightness-100 hover:brightness-125 border-ht-dark-brown border-4 drop-shadow-lg flex flex-row content-end bg-right-top bg-cover xl:bg-repeat text-ht-whiter"
                    :style="{
                        'background-image': 'url(\'/blog_sharp.webp\')'
                    }"
                    @click="thumbModal = true"
                >
                    <div class="self-end lg:self-stretch xl:self-end p-2 border-t-0 border-r-0 grow sm:grow-0 sm:shrink lg:grow xl:grow-0 xl:shrink sm:border-t-0 sm:border-r-4 lg:border-r-0 xl:border-r-4 xl:border-t-4 border-ht-dark-brown backdrop-blur backdrop-contrast-100 backdrop-brightness-50">
                        <div class="text-lg font-semibold underline underline-offset-1">
                            Entropy Based Thumbnail Generation
                        </div>
                        <div class="text-sm xl:text-base font-semibold">
                            Automated thumbnail generation is magic. <br class="block lg:hidden xl:block">
                            Explore the magic, code provided, batteries included
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <BlogModal
            v-model="thumbModal"
        >
            <ThumbnailPost></ThumbnailPost>
        </BlogModal>
        <BlogModal
            v-model="clarityModal"
        >
            <CodeClarity></CodeClarity>
        </BlogModal>
        <BlogModal
            v-model="jwtModal"
        >
            <JWTs></JWTs>
        </BlogModal>
        <BlogModal
            v-model="cargoModal"
        >
            <CargoCult></CargoCult>
        </BlogModal>
    </div>
</template>

<script>
import BlogModal from './BlogModal.vue';
import ThumbnailPost from '../articles/EntropyBasedCropping.vue'
import CodeClarity from '../articles/CodeClarity.vue'
import CargoCult from '../articles/CargoCult.vue';
import JWTs from '../articles/JWTs.vue';

export default {
    name: "BlogContainer",
    components: {
        BlogModal,
        ThumbnailPost,
        CodeClarity,
        CargoCult,
        JWTs
    },
    data() {
        return {
            thumbModal: false,
            clarityModal: false,
            jwtModal: false,
            cargoModal: false
        }
    },
    methods: {
    },
    computed:{
    },
    watch:{
    },
    beforeMount () {
    },
    mounted () {
    },
    beforeDestroy () {
    },
}
</script>

<style scoped>

</style>