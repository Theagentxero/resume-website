<template>
    <div class="w-100">
        <div class="p-2 flex flex-col lg:flex-row items-stretch lg:">
            <div 
                class="cursor-pointer brightness-100 hover:brightness-125 max-h-96 relative aspect-square border-ht-dark-brown border-4 flex flex-col lg:basis-1/2 bg-cover shrink-0 drop-shadow-lg mr-0 lg:mr-4"
                :style="{
                    'background-image': 'url(\'/blog_bearing.webp\')'
                }"
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
                    @click="openTestModal"
                >
                    <div class="self-end lg:self-stretch xl:self-end p-2 border-t-0 border-r-0 grow sm:grow-0 sm:shrink lg:grow xl:grow-0 xl:shrink sm:border-t-0 sm:border-r-4 lg:border-r-0 xl:border-r-4 xl:border-t-4 border-ht-dark-brown backdrop-blur backdrop-contrast-100 backdrop-brightness-50">
                        <div class="text-lg font-semibold underline underline-offset-1">
                            Entropy Based Cropping Strategies
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
            v-model="testModal"
        >
            <div 
                class="bg-right-top bg-cover flex flex-col sm:flex-row justify-end sm:justify-start"
                :style="{
                    'background-image': 'url(\'/blog_sharp.webp\')'
                }"
            >
                <div 
                    class="flex flex-col
                    text-ht-whiter
                    sm:mt-16 sm:basis-2/3 self-end p-2 
                    border-4 border-ht-dark-brown 
                    backdrop-blur backdrop-contrast-100 backdrop-brightness-50"
                >
                    <div class="text-2xl sm:text-3xl font-semibold ">
                        Entropy Based Cropping Strategies
                    </div>
                    <div class="text-lg sm:text-xl">
                        An interactive exploration of entropy based cropping stategies for thumbnail generation
                    </div>
                </div>
            </div>
            <div class="bg-ht-whiter mt-2">
                
                <div class="text-lg font-bold p-2 bg-ht-dark-brown text-ht-white shadow-lg">
                    Cropping The Old Fashioned Way, Like Mamma Used To Do
                </div>
                <div class="p-2">
                    <div class="text-lg italic text-center
                        bg-ht-blue p-2 mb-2 sm:mb-0 sm:m-2 sm:w-64 sm:float-right
                        shadow-lg">
                        <i class="fa-solid fa-quote-left"></i>
                        Traditional cropping methods aren't difficult, but they are difficult to get consistently right.
                        <i class="fa-solid fa-quote-right"></i>
                    </div>
                    <p class="my-2 leading-relaxed">
                        Cropping images to produce thumbnails via traditional methods typically means using one of the following approaches:
                        <ul class="ml-5">
                            <li class="py-1">
                                <span class="font-semibold">Just Scale It</span> - Scale the image up or down to a fixed width or height.
                            </li>
                            <li class="py-1">
                                <span class="font-semibold">Scale & Square</span> - Scale the image down (or up) to the desired height,
                                then crop to a square width in some manner.
                            </li>
                            <li class="py-1">
                                <span class="font-semibold">Rule of Thirds</span> - Guess a bottom corner, 
                                then using a combination of scaling and cropping generate the thumbnail using your guessed corner.
                            </li>
                        </ul>
                        These methods aren't difficult, but they are difficult to get right. 
                        You can probably imagine the issues that each of these would create.
                        If you're having trouble figuring out what those issues might be, just try one of the methods on a selection of images.
                        The issues should manifest within just a few images.
                    </p>
                </div>
                <div class="text-lg font-bold p-2 bg-ht-dark-brown text-ht-white shadow-lg">
                    What Makes A Good Thumbnail?
                </div>
                <div class="p-2">
                    <div class="text-lg italic text-center
                        bg-ht-blue p-2 mb-2 sm:mb-0 sm:m-2 sm:w-64 sm:float-left
                        shadow-lg">
                        <i class="fa-solid fa-quote-left"></i>
                        The key is understanding that a good thumbnail is cropped from the part of the image with the most information.
                        <i class="fa-solid fa-quote-right"></i>
                    </div>
                    <p class="my-2 leading-relaxed">
                        That the million dollar question isn't it. Answering this is the key to why entropy based cropping works.
                    </p>
                    <p class="my-2 leading-relaxed">
                        Notice that the question can be rephrased as: <span class="italic">"If I had to get rid of part of this image, what part would it be?"</span>
                    </p>
                    <p class="my-2 leading-relaxed">
                        If you answered <span class="italic">"Well obviously, I'd get rid of the least important part."&nbsp;</span> 
                        You're both a smart aleck and on the right path. You've arrived at the key understanding, 
                        the thumbnail should cropped from the part of the image with the most information.
                    </p>
                    <p class="my-2 leading-relaxed">
                        All we have to do now is identify the part of the image with the most information.
                    </p>
                </div>
                <div class="text-lg font-bold p-2 bg-ht-dark-brown text-ht-white shadow-lg">
                    What is Entropy?
                </div>
                <div class="p-2">
                    <p class="my-2 leading-relaxed">
                        A concept introduced by 
                        <Popper arrow :show="shannonPopper">
                            <span
                                @mouseenter="shannonPopper = true" 
                                @mouseleave="shannonPopper = false"
                                @click="shannonPopper = !shannonPopper"
                                class="underline text-ht-dark-brown hover:text-ht-brown hover:cursor-pointer"
                            >Claude Shannon</span>
                            <template #content="{ close }">
                                <div class="bg-ht-whiter p-3 flex flex-col">
                                    <img
                                        class=" max-w-xs"
                                        src="../assets/ce_shannon.jpg"
                                        alt="Portrait Photo of Claude Shannon"
                                    />
                                    <div class="text-lg font-bold">
                                        Claude E. Shannon
                                    </div>
                                    <div>
                                        Widely consdered to be the father of Information Theory
                                    </div>
                                </div>
                            </template>
                        </Popper>
                        in his seminal 1948 paper "A Mathemetical Theory of Communication", which spawned an entire field of study called "Information Theory". 
                        <br>
                        It's a fascinating read, if a little dense. With it's importance as a foundation for an entire field of study, if you wanted to read it, 
                        <a class="underline text-blue-800 hover:text-blue-500" target="_blank" href="http://web.mit.edu/6.976/www/handout/shannon.pdf">I'm</a> <a class="underline text-blue-800 hover:text-blue-500" target="_blank" href="https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf">sure</a> <a class="underline text-blue-800 hover:text-blue-500" target="_blank" href="https://www.cs.ucf.edu/~dcm/Teaching/COP5611-Spring2012/Shannon48-MathTheoryComm.pdf">you</a> <a class="underline text-blue-800 hover:text-blue-500" target="_blank" href="https://web.stanford.edu/class/ee276/files/lec/lecture9_shannon.pdf">can</a> <a class="underline text-blue-800 hover:text-blue-500" target="_blank" href="https://ia803209.us.archive.org/27/items/bstj27-3-379/bstj27-3-379_text.pdf">find</a> <a class="underline text-blue-800 hover:text-blue-500" target="_blank" href="https://ieeexplore.ieee.org/document/6773024">a</a> <a class="underline text-blue-800 hover:text-blue-500" target="_blank" href="https://ia803209.us.archive.org/27/items/bstj27-3-379/bstj27-3-379_text.pdf">copy</a> <a class="underline text-blue-800 hover:text-blue-500" target="_blank" href="https://www.essrl.wustl.edu/~jao/itrg/shannon.pdf">somewhere</a>.
                    </p>
                    <div class="text-lg italic text-center
                        bg-ht-blue p-2 mb-2 sm:mb-0 sm:m-2 sm:w-64 sm:float-right
                        shadow-lg">
                        <i class="fa-solid fa-quote-left"></i>
                        Entropy can be described simply as how suprising the average result of a particular random event would be.
                        <i class="fa-solid fa-quote-right"></i>
                    </div>
                    <p class="my-2 leading-relaxed">
                        Entropy can be described simply as how suprising the average result of a particular random event would be. 
                        The level of suprise is equivalent to the ammount of information that was revealed.
                        When you flick on a light switch in your home, the fact that the lights come on isn't very suprising.
                        This is an example of a low information random result, nothing has changed since the last time you turned on that light.
                        The bulb still works, the electicity is on, and the switch still functions; thus, no new information has been revealed. 
                        However, consider how you react when you flick on a switch and nothing happens. 
                        You're probably suprised, but probably in an annoyed way. 
                        The key here is that this is a suprising, low probability, high information event.
                        Overall however, flicking on a lightswitch is a low entropy event, because the average result isn't very suprising.
                    </p>
                </div>
                <div class="text-lg font-bold p-2 bg-ht-dark-brown text-ht-white shadow-lg">
                    Application of Entropy for Cropping
                </div>
                <div class="p-2">
                    <p class="my-2 leading-relaxed">
                        Suprising results in random distributions are high information.
                        This feels handy as we recently came to the realization that we wanted to crop out 
                        unimportant portions of the image to create a thumbnail. Lets check to see if this assertion holds for images.
                    </p>
                    <p class="my-2 leading-relaxed">
                        To do this, I've written some code that maps the entropy of the color distribution to a color gradient. 
                        In the output bright green pixels would be an unsuprising color to receive if picking a pixel at random, 
                        and red colored pixels would be an exceptionally suprising color to receive if picking a pixel at random.
                    </p>
                </div>
                
                <div class="flex flex-col md:justify-center lg:flex-row px-2">
                    <div class=" lg:mr-1">
                        <div class="text-base font-bold p-2 bg-ht-dark text-ht-white shadow-lg my-1">
                            Source Image
                        </div>
                        <img class="mx-auto" src="../assets/blog_entropy_ralph.png" alt="Ralph Wiggum On The Bus Saying I'm In Danger"/>
                    </div>
                    <div>
                        <div class="text-base font-bold p-2 bg-ht-dark text-ht-white shadow-lg my-1">
                            Entropy Mapped Output
                        </div>
                        <img  class="mx-auto" src="../assets/blog_entropy_ralph_result.png" alt="Entropy Map of Ralph Wiggum On The Bus Saying I'm In Danger"/>
                    </div>
                </div>
                <div class="p-2">
                    <p class="my-2 leading-relaxed">
                        This reveals an interesting result, the most interesting part of this image is also the area of highest entropy.
                    </p>
                    <p class="my-2 leading-relaxed">
                        At this point, it's probably self-evident how entropy can be used to crop images quickly, accurately, and inexpensively.
                        A typical implimentation would be to use some sort of gradient descent alogrithmn to scale and crop the input image until the
                        contained entropy is as high as as possible.
                    </p>
                </div>
                <div class="text-lg font-bold p-2 bg-ht-dark-brown text-ht-white shadow-lg">
                    Create An Entropy Map For Your Image
                </div>
                <div class="flex flex-row text-ht-white shadow-lg bg-ht-dark my-1 p-2">
                    <button
                        class="bg-red-700 text-ht-whiter px-2 mr-2 rounded-md hover:cursor-pointer hover:bg-red-500"
                        @click="clearEntropyMapFileUpload"
                    >
                        Clear Upload
                    </button>
                    <div class="my-auto">
                        <input ref="eMapUpload" @input="handleEntropyMapFileUpload" type="file" id="entropy-map-upload" name="emap" accept="image/jpeg,image/webp"/>
                    </div>
                </div>
                <div class="flex flex-col md:justify-center lg:flex-row px-2">
                    <div class="lg:basis-1/2 lg:mr-1">
                        <div class="text-lg font-bold p-2 bg-ht-dark text-ht-white shadow-lg my-1">
                            Your Input File
                        </div>
                        <img v-if="eMapFile != null" class=" max-h-64 lg:max-h-fit mx-auto" :src="eMapFile"/>
                    </div>
                    <div class="lg:basis-1/2 flex flex-col">
                        <div class="text-lg font-bold p-2 bg-ht-dark text-ht-white shadow-lg my-1">
                            Entropy Mapped Output
                        </div>
                        <div v-if="eMapWaiting" class="mx-auto mt-16">
                            <i class="fa-solid fa-cog fa-spin fa-5x"></i>
                        </div>
                        <div v-if="eMapError" class="mx-auto my-8 flex flex-col">
                            <i class="fa-solid fa-triangle-exclamation fa-5x text-red-700"></i>
                            <div>
                                {{eMapErrorData}}
                            </div>
                        </div>
                        <img v-if="eMapRes != null" class="max-h-64 lg:max-h-fit mx-auto" :src="eMapRes"/>
                    </div>
                </div>
            </div>
        </BlogModal>
    </div>
</template>

<script>
import BlogModal from './BlogModal.vue';
import axios from 'axios';

export default {
    name: "BlogContainer",
    components: {
        BlogModal
    },
    data() {
        return {
            testModal: false,
            shannonPopper: false,
            eMapFile: null,
            eMapError: false,
            eMapErrorData: null,
            eMapWaiting: false,
            eMapRes: null
        }
    },
    methods: {
        openTestModal(){
            this.testModal = true;
        },
        handleEntropyMapFileUpload(evt){
            let file = evt.srcElement.files[0];
            this.eMapRes = null;
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                // convert image file to base64 string
                this.eMapFile = reader.result;
                this.requestEntropyMap(file);
            }, false);
            if (file) {
                reader.readAsDataURL(file);
            }
        },
        requestEntropyMap(file){
            this.eMapWaiting = true;
            this.eMapError = false;
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d')
            createImageBitmap(file)
            .then((bitmapData)=>{
                canvas.width = bitmapData.width;
                canvas.height = bitmapData.height;
                ctx.drawImage(bitmapData, 0, 0);
                var iData = ctx.getImageData(0, 0, bitmapData.width, bitmapData.height)
                axios.post('http://0.0.0.0:8787/', iData.data, {
                    responseType: 'arraybuffer'
                })
                .then((response)=>{
                    this.eMapWaiting = false;
                    var mappedImg = new Uint8ClampedArray(response.data);
                    var mappedImgData = new ImageData(mappedImg, bitmapData.width, bitmapData.height);
                    ctx.putImageData(mappedImgData, 0, 0)
                    this.eMapRes = canvas.toDataURL();
                })
                .catch((err)=>{
                    console.log(err)
                    this.eMapWaiting = false;
                    this.eMapError = true;
                    this.eMapErrorData = "A server side error occured, potentially, the file was unprocessable."
                })
            })
            .catch((err)=>{
                console.log(err);
                this.eMapError = true;
                this.eMapErrorData = "Something Went Wrong While Attempting To Load The File"
            })
        },
        clearEntropyMapFileUpload(){
            this.eMapFile = null;
            this.eMapRes = null;
            this.eMapError = false;
            this.eMapErrorData = null;
        }
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