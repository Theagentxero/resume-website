<template>
    <div class="flex flex-col lg:flex-row lg:justify-aroundp-2 w-full content-start">
        <Transition>
            <div v-if="showVirtualResume" class="flex flex-col flex-grow border-0 border-ht-white lg:border-r-2">
                <div class="bg-ht-dark-brown text-ht-whiter p-2 text-lg lg:text-xl w-full text-center">
                    Virtual Resume
                </div>
                <div class="w-100 bg-ht-darker text-ht-whiter text-2xl xl:text-3xl 2xl:text-4xl font-bold text-center mt-1 py-4">
                        Taylor Richards
                </div>
                <div class="w-100 text-sm lg:text-base bg-ht-dark text-ht-whiter font-bold text-center py-1">
                    Remote Opportunities are Strongly Preferred <br>
                    Contact Info Available In PDF or <a class="underline text-blue-200 hover:text-blue-500" href="#Contact">Reach Out</a>
                </div>
                <div class="w-100 bg-ht-dark-brown text-ht-whiter text-xl lg:text-xl xl:text-2xl font-bold pl-2 mt-3 py-1 mx-2">
                    Profile
                </div>
                <p class="w-100 text-sm lg:text-base bg-ht-whiter px-3 py-1 mx-2">
                    A highly motivated and self-starting software developer with 7+ years of experience ranging the full
                    breadth of SaaS development. From planning system architecture to development, provisioning,
                    deployment, operations, and maintenance. I bring a wealth of technical knowledge from the challenges
                    already overcome, and I look forward to the road ahead.
                </p>
                <div class="w-100 bg-ht-dark-brown text-ht-whiter text-xl lg:text-xl xl:text-2xl font-bold pl-2 mt-3 py-1 mx-2">
                    Skills & Proficiencies
                </div>
                <div class="text-sm lg:text-base w-100 grid items-center grid-flow-row grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-ht-whiter px-3 py-1 mx-2 gap-2">
                    <div class="text-center">Javascript</div>
                    <div class="text-center">Node.js</div>
                    <div class="text-center">REST</div>
                    <div class="text-center">PostgreSQL</div>
                    <div class="text-center">PostGIS</div>
                    <div class="text-center">SQL</div>
                    <div class="text-center">Cloud Deployment</div>
                    <div class="text-center">API Integrations</div>
                    <div class="text-center">AWS S3</div>
                    <div class="text-center">Mapbox GL</div>
                    <div class="text-center">Vue</div>
                    <div class="text-center">nginx</div>
                    <div class="text-center">SMTP Integration</div>
                    <div class="text-center">ElasticSearch</div>
                    <div class="text-center">Leaflet</div>
                    <div class="text-center">Python</div>
                    <div class="text-center">Linux / Unix</div>
                    <div class="text-center">PDFKit</div>
                    <div class="text-center">Redis</div>
                    <div class="text-center">GeoSpatial / GIS</div>
                    <div class="text-center">Svelte</div>
                    <div class="text-center">Cordova</div>
                    <div class="text-center">Bootstrap</div>
                    <div class="text-center">Cloudflare</div>
                    <div class="text-center">HTML & CSS</div>
                </div>
                <div class="w-100 bg-ht-dark-brown text-ht-whiter text-xl lg:text-xl xl:text-2xl font-bold pl-2 mt-3 py-1 mx-2">
                    Experience
                </div>
                <div class="w-100 text-base lg:text-lg bg-ht-whiter px-3 py-1 mx-2">
                    <span class="font-semibold">Valve Ai <small class="italic">2018 - Current</small></span>
                </div>
                <div class="w-100 bg-ht-whiter px-3 mx-2 text-sm lg:text-base">
                    <span class="font-semibold">Software Architect</span>
                </div>
                <div class="w-100 bg-ht-whiter px-3 mx-2 text-sm lg:text-base">
                    <ul class="list-disc ml-6">
                        <li>Responsible for ground-up development of a bespoke system.</li>
                        <li>Developed scalable multitenant software architecture, providing maximal flexibility without versioning in a single deployment instance.</li>
                        <li>Designed system to utilize horizontally scalable low-cost cloud-based hardware configurations to provide exceptionally economical ongoing hosting and deployment costs.</li>
                    </ul>
                </div>
                <div class="w-100 bg-ht-whiter px-3 mx-2 text-sm lg:text-base">
                    <span class="font-semibold">Lead Software Engineer</span>
                </div>
                <div class="w-100 bg-ht-whiter px-3 mx-2 text-sm lg:text-base">
                    <ul class="list-disc ml-6">
                        <li>Responsible for the entirety of the web front end, the REST API, and the database.</li>
                        <li>Built complete REST API using industry best practices designed for high concurrency and low resource consumption.</li>
                        <li>Built a web interface based on Vue utilizing best practices for responsive design and componentization.</li>
                        <li>Developed and integrated a web-based GIS system, utilizing webGL to provide real-time mapping performance with layers containing hundreds of thousands of features.</li>
                    </ul>
                </div>
                <div class="w-100 bg-ht-whiter px-3 mx-2 text-sm lg:text-base">
                    <span class="font-semibold">Database Administrator</span>
                </div>
                <div class="w-100 bg-ht-whiter px-3 mx-2 text-sm lg:text-base">
                    <ul class="list-disc ml-6">
                        <li>Architected, deployed, and maintained PostgreSQL database fit for purpose utilizing industry best practices for scalable relational database architectures.</li>
                    </ul>
                </div>
                <div class="w-100 bg-ht-whiter px-3 mx-2 text-sm lg:text-base">
                    <span class="font-semibold">Operations Manager</span>
                </div>
                <div class="w-100 bg-ht-whiter px-3 mx-2 pb-2 text-sm lg:text-base">
                    <ul class="list-disc ml-6">
                        <li>Deployed and managed all cloud infrastructure.</li>
                        <li>Administered multiple Linux servers on cloud-based VPS systems.</li>
                    </ul>
                </div>
                <div class="w-100 bg-ht-whiter px-3 mx-2 pb-2 text-sm lg:text-base">
                    Additional Experience & References Available By Request
                </div>
                <div class="w-100 bg-ht-dark-brown text-ht-whiter text-xl lg:text-xl xl:text-2xl font-bold pl-2 mt-3 py-1 mx-2">
                    Education
                </div>
                <div class="w-100 bg-ht-whiter px-3 py-1 mx-2 mb-3">
                    <span class="font-semibold">Bachelors of Computer Science </span> <br>
                    <span class="italic pl-5">University of Central Florida</span>
                </div>
            </div>
        </Transition>
        <Transition>
            <div v-if="!showVirtualResume" class="flex flex-col flex-grow border-0 w-100 border-ht-white lg:border-r-2">
                <div class="bg-ht-dark-brown text-ht-whiter p-2 text-lg lg:text-xl w-full text-center">
                    Add A Custom Note, I'll Write It On The Resume
                </div>
                <div class="flex flex-col sm:flex-row w-100">
                    <div class="flex flex-col items-stretch px-3 flex-grow">
                        <label :for="`resume-note`" 
                            class="text-base md:text-lg font-bold text-ht-dark pl-1"
                            :class="{
                                'underline': true
                            }"
                        >
                            Your Note:
                        </label>
                        <input 
                            :id="`resume-note`"
                            data-form-type="other"
                            ref="self"
                            v-model="note" 
                            type="text" 
                            :spellcheck="true" 
                            placeholder="This note will be written onto the resume"
                            class=" py-1 px-2 bg-ht-whiter border-2 rounded-md text-ht-darker border-ht-darker focus:border-ht-dark"
                        />
                    </div>
                    <div class="text-center w-100 sm:mr-3">
                        <button @click="generateResumeWithCustomNote" :disabled="awaitingCustomDownload"
                            class=" whitespace-pre my-2 text-base md:text-lg lg:text-xl xl:text-2xl drop-shadow-lg p-1 md:p-2 lg:p-3 bg-ht-dark hover:bg-ht-darker text-ht-white hover:text-ht-whiter">

                            <span v-if="!awaitingCustomDownload"><i class="fa-solid fa-download"></i> Let's Go</span>
                            <span v-if="awaitingCustomDownload"><i class="fa-solid fa-spinner fa-spin"></i>  Generating</span>
                        </button>
                    </div>
                </div>
               <div class="flex flex-col sm:flex-row w-100">
                    <div class="text-center w-100 mx-auto">
                        <button @click="returnToResume"
                            class=" whitespace-pre my-2 text-base md:text-lg lg:text-xl xl:text-2xl drop-shadow-lg p-1 md:p-2 lg:p-3 bg-ht-dark hover:bg-ht-darker text-ht-white hover:text-ht-whiter">

                            Return To Resume
                        </button>
                    </div>
                </div>
            </div>
        </Transition>
        <Transition>
            <div v-if="showVirtualResume" class="flex flex-col justify-center items-center self-start w-full">
                <div class="bg-ht-dark-brown text-ht-whiter p-2 text-lg lg:text-xl w-full text-center whitespace-pre">
                    Need A PDF Copy?
                </div>
                <div class="w-100 text-center">
                    <button @click="generateAndDownloadResume" :disabled="awaitingDownload"
                        class=" whitespace-pre my-2 text-base md:text-lg lg:text-xl xl:text-2xl drop-shadow-lg p-1 md:p-2 lg:p-3 bg-ht-dark hover:bg-ht-darker text-ht-white hover:text-ht-whiter">

                        <span v-if="!awaitingDownload"><i class="fa-solid fa-download"></i> Download</span>
                        <span v-if="awaitingDownload"><i class="fa-solid fa-spinner fa-spin"></i>  Generating</span>
                    </button>
                </div>
                <div>
                    <TextPopper>
                        <template v-slot:text>
                            Why Generate A PDF?
                        </template>
                        <template v-slot:content>
                            <div class="bg-ht-whiter p-3 flex flex-col justify-items-center align-middle">
                                <div class="text-lg font-bold underline underline-offset-1">
                                    Two Reasons
                                </div>
                                <div>
                                    - Bots are lazy, and I don't want my contact info and resume indexed.
                                </div>
                                <div>
                                    - It seemed like fun.
                                </div>
                            </div>
                        </template>
                    </TextPopper>
                </div>
                <div class="w-100 text-center">
                    <div class="text-lg text-center mt-2 mx-3">
                        Want me to prove the PDF is generated and not stored?
                    </div>
                    <button @click="startProveGeneration"
                        class="whitespace-pre mt-1 text-base md:text-lg lg:text-xl xl:text-2xl drop-shadow-lg p-1 md:p-2 lg:p-3 bg-ht-dark hover:bg-ht-darker text-ht-white hover:text-ht-whiter">

                        <span>Click Here</span>
                    </button>
                </div>
            </div>
        </Transition>
        
    </div>
</template>

<script>
import axios from 'axios';
import TextPopper from './subcomponents/TextPopper.vue';
import { useSessionStore } from '../stores/SessionStore.js'
import FormTextInput from './forms/components/FormTextInput.vue';

export default {
    setup(){
        const sessionStore = useSessionStore();
        return {sessionStore};
    },
    data() {
        return {
            awaitingDownload: false,
            awaitingCustomDownload: false,
            showVirtualResume: true,
            note: null
        };
    },
    methods: {
        returnToResume(){
            this.showVirtualResume = true;
        },
        startProveGeneration(){
            this.showVirtualResume = false;
        },
        generateResumeWithCustomNote(){
            this.awaitingCustomDownload = true;
            axios.post(`${import.meta.env.VITE_FORM_API_URL}/resume/${this.sessionStore.sessionID}`, { note: this.note }, {
                headers: {
                    'Content-Type': 'application/json',
                },
                responseType: 'blob'
            })
            .then((response)=>{
                this.awaitingCustomDownload = false;
                this.startFileDownload(response.data, "Taylor Richards - Resume - With Custom Note.pdf");
            })
            .catch((err)=>{
                this.awaitingCustomDownload = false;
                console.log(err);
               
            })
        },
        generateAndDownloadResume() {
            this.awaitingDownload = true;
            axios.get(`${import.meta.env.VITE_FORM_API_URL}/resume/${this.sessionStore.sessionID}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
                responseType: 'blob'
            })
            .then((response)=>{
                this.awaitingDownload = false;
                console.log(response)
                this.startFileDownload(response.data, "Taylor Richards - Resume.pdf");
            })
            .catch((err)=>{
                this.awaitingDownload = false;
                console.log(err);
               
            })
        },
        startFileDownload(data, fileName){
            var element = document.createElement('a');
            element.setAttribute('href', window.URL.createObjectURL(data));
            element.setAttribute('download', fileName);
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        }
    },
    watch:{
        showVirtualResume: function(updated, old){
            if(updated == false){
                setTimeout(()=>{
                    document.getElementById("Resume").scrollIntoView();
                },275)
            }
        }
    },
    components: { TextPopper, FormTextInput }
}
</script>

<style scoped>
.v-enter-active{
    transition: all 0.25s ease-in-out 0.25s;
}
.v-leave-active {
    transition: all 0.25s ease-in-out;
}

.v-enter-from{
    opacity: 0;
}
.v-leave-to {
    opacity: 0;
}
</style>