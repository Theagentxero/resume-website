<template>
    <div id="Home" class="scroll-smooth relative">
        <Howdy ref="howdy"></Howdy>
        <div class="flex flex-row">
            <div class="basis-0 lg:basis-1/12 md:mr-3"></div>
            <div class="px-5 basis-full lg:basis-10/12">
                <div class="mb-1 drop-shadow sm:drop-shadow-lg flex flex-row items-center justify-between bg-ht-dark-brown">
                    <div class="my-2 subpixel-antialiased text-2xl lg:text-3xl 2xl:text-4xl  text-ht-white font-extrabold p-2 sm:p-3">
                        My Blog
                    </div>
                    <button
                        class="text-base lg:text-lg xl:text-xl drop-shadow-lg p-1 lg:p-2 mr-2 bg-ht-dark hover:bg-ht-darker text-ht-white hover:text-ht-whiter disabled:text-ht-darker disabled:hover:bg-ht-dark"
                        @click="goToMainSite"
                    >
                        Main Site
                    </button>
                </div>
                <div class="my-2 drop-shadow sm:drop-shadow-lg flex flex-row items-center justify-between bg-ht-dark-brown p-2">
                    <button
                        class="text-base lg:text-lg xl:text-xl drop-shadow-lg p-1 lg:p-2 mr-2 bg-ht-dark hover:bg-ht-darker text-ht-white hover:text-ht-whiter disabled:text-ht-darker disabled:hover:bg-ht-dark"
                        :disabled="postNumber == 0"
                        @click="goToPrevious"
                    >
                        Previous Post
                    </button>
                    <button
                        class="text-base lg:text-lg xl:text-xl drop-shadow-lg p-1 lg:p-2 bg-ht-dark hover:bg-ht-darker text-ht-white hover:text-ht-whiter disabled:text-ht-darker disabled:hover:bg-ht-dark"
                        :disabled="$router.hasRoute(`post${postNumber+1}`) == false"
                        @click="goToNext"
                    >
                        Next Post
                    </button>
                </div>
                <router-view></router-view>
                <div class="mt-3 drop-shadow sm:drop-shadow-lg flex flex-row items-center justify-between bg-ht-dark-brown p-2">
                    <button
                        class="text-base lg:text-lg xl:text-xl drop-shadow-lg p-1 lg:p-2 mr-2 bg-ht-dark hover:bg-ht-darker text-ht-white hover:text-ht-whiter disabled:text-ht-darker disabled:hover:bg-ht-dark"
                        :disabled="postNumber == 0"
                        @click="goToPrevious"
                    >
                        Previous Post
                    </button>
                    <button
                        class="text-base lg:text-lg xl:text-xl drop-shadow-lg p-1 lg:p-2 bg-ht-dark hover:bg-ht-darker text-ht-white hover:text-ht-whiter disabled:text-ht-darker disabled:hover:bg-ht-dark"
                        :disabled="$router.hasRoute(`post${postNumber+1}`) == false"
                        @click="goToNext"
                    >
                        Next Post
                    </button>
                </div>
            </div>
            <div class="basis-0 lg:basis-1/12 md:mr-3"></div>
        </div>
        
    </div>
</template>

<script>
import Howdy from '../components/Howdy.vue'

export default {
    components: {
        Howdy
    },
    data() {
        return {
            postNumber: 0
        }
    },
    methods: {
        goToMainSite(){
            this.$router.push('/#Home')
        },
        goToNext(){
            if(this.$router.hasRoute(`post${this.postNumber+1}`)){
                this.postNumber++;
                this.$router.push({ name: `post${this.postNumber}` })
            }
        },
        goToPrevious(){
            if(this.postNumber > 0){
                this.postNumber--;
                console.log("Attempting Push")
                this.$router.push({
                    name: `post${this.postNumber}`
                })
            }
        }
    },
    beforeMount () {
        
    },
    mounted(){
        var postNum = parseInt(this.$router.currentRoute.value.name.split('post')[1], 10);;
        if(Number.isNaN(postNum)){
            
            var target = this.$router.getRoutes().find((route)=>{ return route.meta.isMostRecentPost; })
            this.$router.replace(target.path)
            this.postNumber = parseInt(target.name.split('post')[1], 10);
        }else{
            this.postNumber = postNum;
        }
         
    }, 
    beforeDestroy () {
        
    },
};
</script>

<style lang="scss" scoped>

</style>