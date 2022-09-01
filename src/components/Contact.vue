<template>
    <div class="flex flex-col">
        <div class="flex flex-col lg:flex-row gap-5 justify-evenly mx-5">
            <Transition name="contact-btn">
                <div v-if="formStore.form.active == null"
                    @click="openForm('integrations')"
                    class="flex flex-row lg:flex-col lg:flex-grow mt-4 lg:mt-3 lg:mb-1 justify-around lg:justify-center align-middle p-3 sm:p-5 md:p-3 bg-ht-dark hover:bg-ht-darker text-ht-white hover:text-ht-whiter cursor-pointer shadow-lg"
                >
                    <div class="text-4xl sm:text-7xl xl:text-9xl self-center">
                        <i class="fa-solid fa-screwdriver-wrench drop-shadow-lg"></i>
                    </div>
                    <div class="text-center lg:mt-5 text-xl sm:text-3xl lg:text-2xl 2xl:text-4xl p-1 self-center">
                        Integrations Work
                    </div>
                </div>
            </Transition>
            <Transition name="contact-btn">
                <div v-if="formStore.form.active == null"
                    @click="openForm('hire')"
                    class="flex flex-row lg:flex-col lg:flex-grow lg:mt-3 lg:mb-1 justify-around lg:justify-center align-middle p-3 sm:p-5 md:p-3 bg-ht-dark hover:bg-ht-darker text-ht-white hover:text-ht-whiter cursor-pointer shadow-lg"
                >
                    <div class="text-4xl sm:text-7xl xl:text-9xl self-center">
                        <i class="fa-solid fa-user-tie drop-shadow-lg"></i>
                    </div>
                    <div class="text-center lg:mt-5 text-xl sm:text-3xl lg:text-2xl 2xl:text-4xl p-1 self-center">
                        Hiring & Employment
                    </div>
                </div>
            </Transition>
            <Transition name="contact-btn">
                <div v-if="formStore.form.active == null"
                    @click="openForm('comment')"
                    class="flex flex-row lg:flex-col lg:flex-grow mb-2 lg:mt-3 lg:mb-1 justify-around lg:justify-center align-middle p-3 sm:p-5 md:p-3 bg-ht-dark hover:bg-ht-darker text-ht-white hover:text-ht-whiter cursor-pointer shadow-lg">
                    <div class="text-4xl sm:text-7xl xl:text-9xl self-center">
                        <i class="fa-solid fa-comments drop-shadow-lg"></i>
                    </div>
                    <div class="text-center lg:mt-5 text-xl sm:text-3xl  lg:text-2xl 2xl:text-4xl p-1 self-center">
                        Question or Comment
                    </div>
                </div>
            </Transition>
        </div>
        <Transition
            @after-leave="rescrollToContact"
        >
            <Integration v-if="formStore.form.active == 'integrations'"></Integration>
        </Transition>
        <Transition
            @after-leave="rescrollToContact"
        >
            <Hire v-if="formStore.form.active == 'hire'"></Hire>
        </Transition>
        <Transition
            @after-leave="rescrollToContact"
        >
            <Comment v-if="formStore.form.active == 'comment'"></Comment>
        </Transition>
        <Transition
            @after-leave="rescrollToContact"
        >
            <div v-if="formStore.form.active == 'submitted'" @click="formStore.closeActiveForm"
                class="mx-5 my-2 p-2 shadow-lg bg-ht-whiter text-ht-light-green"
            >
                <div class="basis-full text-center text-xl marker:sm:text-3xl lg:text-2xl 2xl:text-4xl p-2 self-center bg-ht-dark text-ht-white shadow-lg">
                    Thanks For Reaching Out
                </div>
                <div class="text-center text-base sm:text-lg lg:text-xl 2xl:text-2xl p-1 self-center bg-ht-dark-brown text-ht-white shadow-lg">
                    You Should Hear Back Via Your Preffered Contact Method Soon
                </div>
                
                <div class="w-100 m-3 text-center">
                    <i class="fa-solid fa-circle-check fa-6x"></i>
                </div>
                <div class="basis-full text-center text-xl marker:sm:text-3xl lg:text-2xl 2xl:text-4xl p-2 self-center bg-ht-dark text-ht-white shadow-lg">
                    Successfuly Submitted<br>
                    <small>Click Anywhere To Continue</small>
                </div>
            </div>
        </Transition>
        <Transition
            @after-leave="rescrollToContact"
        >
            <div v-if="formStore.form.active == 'error'" @click="formStore.setFormActive(null)"
                class="mx-5 my-2 p-2 shadow-lg bg-ht-whiter text-red-500"
            >
                <div class="basis-full text-center text-xl marker:sm:text-3xl lg:text-2xl 2xl:text-4xl p-2 self-center bg-ht-dark text-ht-white shadow-lg">
                    Something Went Wrong On The Backend
                </div>
                <div class="text-center text-base sm:text-lg lg:text-xl 2xl:text-2xl p-1 self-center bg-ht-dark-brown text-ht-white shadow-lg">
                    I'll Look At The Error Log and Frown Later.
                </div>
                
                <div class="w-100 m-3 text-center">
                    <i class="fa-solid fa-circle-exclamation fa-6x"></i>
                </div>
                <div class="basis-full text-center text-xl marker:sm:text-3xl lg:text-2xl 2xl:text-4xl p-2 self-center bg-ht-dark text-ht-white shadow-lg">
                    The Form Should Have Your Values Saved <br>
                    <small>Click Anywhere To Try Again</small>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script>
import { useFormStore } from '../stores/FormStore.js'

import Hire from './forms/Hire.vue';
import Comment from './forms/Comment.vue';
import Integration from './forms/Integration.vue';

export default {
    setup(){
        const formStore = useFormStore();
        return {formStore}
    },
    components: {
        Hire,
        Comment,
        Integration
    },
    data() {
        return {
        }
    },
    methods: {
        openForm(name) {
            let tmpname = '' + name;
            this.formStore.setFormActive(tmpname);
        },
        rescrollToContact(){
            document.getElementById("Contact").scrollIntoView();
        }
    },
    watch:{
    },
    computed: {
    },
    mounted () {
    },
}
</script>

<style scoped>
.contact-btn-enter-active{
    transition: all 0.25s ease-in-out 0.25s;
}
.contact-btn-leave-active{
    transition: all 0.25s ease-in-out;
}
.contact-btn-enter-from{
    transform: scale(0.0);
}
.contact-btn-leave-to {
    transform: scale(0, 0);
}
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