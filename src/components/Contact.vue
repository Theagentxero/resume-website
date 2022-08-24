<template>
    <div class="flex flex-col">
        <div class="text-xl sm:text-3xl mx-5 p-3 font-bold self-stretch sm:self-start bg-ht-dark text-ht-white">
            How Can I Help?
        </div>
        <div class="flex flex-col lg:flex-row gap-5 justify-evenly p-5 mx-5">
            <!-- <Transition>
                <div v-if="hasFormOpen"
                    @click="closeForm()"
                    class="flex flex-row justify-around self-start  align-middle p-3 sm:p-5 md:p-3 bg-ht-dark hover:bg-ht-darker text-ht-white hover:text-ht-whiter cursor-pointer shadow-lg"
                >
                    <div class="text-3xl sm:text-5xl lg:text-4xl self-center">
                        <i class="fa-solid fa-arrow-left-long drop-shadow-lg"></i>
                    </div>
                    <div class="text-center text-xl ml-5 sm:text-2xl lg:text-2xl 2xl:text-3xl p-1 self-center">
                        Back
                    </div>
                </div>
            </Transition> -->
            <Transition>
                <div v-if="!hasFormOpen"
                    @click="openForm('integrations')"
                    class="flex flex-row lg:flex-col justify-around lg:justify-center align-middle p-3 sm:p-5 md:p-3 bg-ht-dark hover:bg-ht-darker text-ht-white hover:text-ht-whiter cursor-pointer shadow-lg"
                >
                    <div class="text-4xl sm:text-7xl xl:text-9xl self-center">
                        <i class="fa-solid fa-screwdriver-wrench drop-shadow-lg"></i>
                    </div>
                    <div class="text-center lg:mt-5 text-xl sm:text-3xl lg:text-2xl 2xl:text-4xl p-1 self-center">
                        Integrations Work
                    </div>
                </div>
            </Transition>
            <Transition>
                <div v-if="!hasFormOpen"
                    @click="openForm('hire')"
                    class="flex flex-row lg:flex-col justify-around lg:justify-center align-middle p-3 sm:p-5 md:p-3 bg-ht-dark hover:bg-ht-darker text-ht-white hover:text-ht-whiter cursor-pointer shadow-lg"
                >
                    <div class="text-4xl sm:text-7xl xl:text-9xl self-center">
                        <i class="fa-solid fa-user-tie drop-shadow-lg"></i>
                    </div>
                    <div class="text-center lg:mt-5 text-xl sm:text-3xl lg:text-2xl 2xl:text-4xl p-1 self-center">
                        Hiring & Employment
                    </div>
                </div>
            </Transition>
            <Transition>
                <div v-if="!hasFormOpen"
                    @click="openForm('comment')"
                    class="flex flex-row lg:flex-col justify-around lg:justify-center align-middle p-3 sm:p-5 md:p-3 bg-ht-dark hover:bg-ht-darker text-ht-white hover:text-ht-whiter cursor-pointer shadow-lg">
                    <div class="text-4xl sm:text-7xl xl:text-9xl self-center">
                        <i class="fa-solid fa-comments drop-shadow-lg"></i>
                    </div>
                    <div class="text-center lg:mt-5 text-xl sm:text-3xl  lg:text-2xl 2xl:text-4xl p-1 self-center">
                        Question or Comment
                    </div>
                </div>
            </Transition>
            <Transition
                @after-enter="formAnimationCompleted"
            >
                <div id="ContactForm" v-if="currentForm == 'hire'"
                    class="p-3 bg-ht-whiter shadow-lg flex flex-col grow"
                >
                    <div class="text-center text-xl marker:sm:text-3xl lg:text-2xl 2xl:text-4xl p-2 self-center bg-ht-dark text-ht-white sm:px-8 shadow-lg">
                        Interested In Hiring Me?
                    </div>
                    <div class="text-center text-lg sm:text-xl lg:text-xl 2xl:text-2xl p-1 self-center bg-ht-dark-brown text-ht-white px-8 shadow-lg" >
                        I'm Flattered, Let's Talk Details
                    </div>
                    <form data-lpignore="true" @submit="checkValidationAndSubmit" ref="hireform" action="" autocomplete="off" name="Hire Taylor Form" class="mt-3 flex flex-row">
                        <div class="basis-1/12"></div>
                        <div class="basis-5/6 flex flex-col justify-center shadow-lg bg-ht-white">
                            <div class="text-center underline text-base sm:text-lg 2xl:text-xl p-1 self-center bg-ht-dark text-ht-white px-8 shadow-lg" >
                                Underlined Fields Are Required
                            </div>
                            <FormTextInput
                                label="Company Name"
                                dataName="companyName"
                                :required="true"
                                :minLength="3"
                                :spellCheck="false"
                                :getFocusOnMount="true"
                            ></FormTextInput>
                            <FormTextInput
                                label="Position"
                                dataName="position"
                                :required="false"
                            ></FormTextInput>
                            <FormTextInput
                                label="Name"
                                dataName="name"
                                placeholder="Your name, or the name of the person whom I'll be speaking with." 
                                :spellcheck="false"
                                :required="true"
                            ></FormTextInput>
                            <FormSelectInput
                                label="Preferred Contact Method"
                                dataName="contactMethod"
                                :required="true"
                                :options="contactMethodOptions"
                            ></FormSelectInput>
                            
                            <Transition name="form-field">
                                <FormEmailInput v-if="(formStore.form.fields['contactMethod'] || null) == 'email'"
                                    label="E-mail"
                                    dataName="email"
                                    :required="true"
                                    placeholder="contact@company.com or gmail, I don't judge" 
                                    :getFocusOnMount="true"
                                ></FormEmailInput>
                            </Transition>
                            <Transition name="form-field">
                                <FormPhoneInput v-if="(formStore.form.fields['contactMethod'] || null) == 'call' || (formStore.form.fields['contactMethod'] || null) == 'text'"
                                    label="Phone"
                                    dataName="phone"
                                    :required="true"
                                    spellcheck="false"
                                    placeholder="(234) 567-8901" 
                                    :getFocusOnMount="true"
                                ></FormPhoneInput>
                            </Transition>

                            <div class="text-center text-sm sm:text-base 2xl:text-lg p-1 pb-0 self-center bg-ht-dark-brown text-ht-white px-8 shadow-lg" >
                                Let's get it on the calendar.
                            </div>
                            <div class="text-center text-sm sm:text-base 2xl:text-lg p-1 pt-0 self-center bg-ht-dark-brown text-ht-white px-8 shadow-lg" >
                                I'll do my best to get your preferrred day and time, but lets put down two, just in case.
                            </div>
                            
                            
                            <FormDateTimePicker
                                label="Best"
                                dataName="bestDateTime"
                                :required="true"
                            ></FormDateTimePicker>
                            <FormDateTimePicker
                                label="Alt"
                                dataName="altDateTime"
                                :required="true"
                            ></FormDateTimePicker>
                            <div class="text-center text-sm sm:text-base 2xl:text-lg p-1 self-center bg-ht-dark mt-1 text-ht-white px-8 shadow-lg" >
                                Don't worry, I'll always reach out to confirm our meeting day and time via your preferred contact method.
                            </div>
                            <div class="self-stretch flex flex-row items-stretch justify-between p-2 mx-3">
                                <button
                                    @click="closeForm"
                                    class="justify-self-end p-2 text-lg 
                                    bg-yellow-500 hover:bg-yellow-700 text-ht-darker hover:text-ht-whiter 
                                    cursor-pointer shadow-lg mr-8" 
                                >
                                    Cancel
                                </button>
                                <input 
                                    type="submit" 
                                    class="justify-self-end p-2 text-lg 
                                    bg-green-800 hover:bg-green-600 text-ht-white hover:text-ht-whiter 
                                    cursor-pointer shadow-lg" 
                                    value="Submit"
                                />
                                
                            </div>
                        </div>
                        <div class="basis-1/12"></div>
                    </form>
                </div>
            </Transition>
        </div>
    </div>
</template>

<script>
import { useFormStore } from '../stores/FormStore.js'

import PhoneNumber from '../assets/lib/PhoneNumber.js';

import FormTextInput from './subcomponents/FormTextInput.vue';
import FormSelectInput from './subcomponents/FormSelectInput.vue';
import FormEmailInput from './subcomponents/FormEmailInput.vue';
import FormPhoneInput from './subcomponents/FormPhoneInput.vue';
import FormDateTimePicker from './subcomponents/FormDateTimePicker.vue';

export default {
    setup(){
        const formStore = useFormStore();
        return {formStore}
    },
    components: {
        FormTextInput,
        FormSelectInput,
        FormEmailInput,
        FormPhoneInput,
        FormDateTimePicker
    },
    data() {
        return {
            hasFormOpen: false,
            currentForm: null,
            contactMethodOptions:[
                { value: null, text: '-- Please Select A Method --', disabled: true},
                { value:"email", text:"E-mail" },
                { value:"text", text:"Text" },
                { value:"call", text:"Call" },
            ]
        }
    },
    methods: {
        openForm(name) {
            this.hasFormOpen = true;
            this.currentForm = name;
            this.formStore.setForm(this.currentForm);
        },
        closeForm(){
            this.hasFormOpen = false;
            this.currentForm = null;
            this.formStore.reset();
        },
        formAnimationCompleted(){
            document.getElementById("ContactForm").scrollIntoView();
        },
        checkValidationAndSubmit(evt){
            evt.preventDefault();
            if(this.formStore.checkActiveFormValid){

            }else{
                this.formStore.form.showValidation = true;
            }
        }
    },
    watch:{
        contactPhone: function(updated, old){
            if(updated != null && old != null){
                if(updated.length >= old.length){
                    this.contactPhone = PhoneNumber.format(updated)
                }
            }
        }
    },
    computed: {
        
    },
    mounted () {
    },
}
</script>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active{
    transition: all 0.25s ease-in-out;
}
.v-leave-active {
    transition: all 0.25s ease-in-out 0.25;
}

.v-enter-from{
    transform: scale(0.25);
    opacity: 0;
}
.v-leave-to {
    transform: scale(0);
    opacity: 0;
}
</style>

<style>
.form-field-enter-active,
.form-field-leave-active {
  transition: all 0.25s ease-in-out;
}

.form-field-enter-from,
.form-field-leave-to {
    transform: translateY(-25px);
    opacity: 0;
}
</style>