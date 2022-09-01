<template>
    <div class="flex flex-row justify-center">
        <div id="HireForm"
            class="mt-3 mb-2 p-3 bg-ht-whiter shadow-lg flex flex-col max-w-4xl flex-grow">
            <div class="w-100 text-center text-xl marker:sm:text-3xl lg:text-2xl 2xl:text-4xl p-2 self-center bg-ht-dark text-ht-white sm:px-8 shadow-lg">
                Interested In Hiring Me?
            </div>
            <div class="text-center text-lg sm:text-xl lg:text-xl 2xl:text-2xl p-1 self-center bg-ht-dark-brown text-ht-white px-8 shadow-lg" >
                I'm Flattered, Let's Talk Details
            </div>
            <form data-lpignore="true" @submit="(evt)=>{ evt.preventDefault(); }" ref="hireform" action="" autocomplete="off" name="Hire Taylor Form"
            class="mt-3 flex flex-row">
                <div class="basis-1/12"></div>
                <div class="basis-5/6 flex flex-col justify-center shadow-lg bg-ht-white px-3 pb-3">
                    <div class="text-center underline text-base sm:text-lg 2xl:text-xl p-1 self-center bg-ht-dark text-ht-white px-8 shadow-lg" >
                        Underlined Fields Are Required
                    </div>
                    <FormTextInput
                        label="Name"
                        dataName="name"
                        placeholder="Your name, or the name of the person whom I'll be speaking with." 
                        :spellcheck="false"
                        :required="true"
                        :getFocusOnMount="true"
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
                    <FormTextInput
                        label="Company Name"
                        dataName="companyName"
                        :required="true"
                        :minLength="3"
                        :spellCheck="false"
                    ></FormTextInput>
                    <FormTextInput
                        label="Position"
                        dataName="position"
                        :required="false"
                    ></FormTextInput>
                    <FormTextArea
                        label="Notes"
                        dataName="notes"
                        placeholder="Any other information I should know" 
                        :spellcheck="true"
                        :required="false"
                    ></FormTextArea>
                    <div class="self-stretch flex flex-row items-stretch justify-between p-2 mx-3">
                        <button
                            @click="closeForm"
                            class="justify-self-end py-2 px-4 text-lg 
                            bg-yellow-500 hover:bg-yellow-700 text-ht-darker hover:text-ht-whiter 
                            cursor-pointer shadow-lg" 
                        >
                            Cancel
                        </button>
                        <button
                            @click="checkValidationAndSubmit"
                            class="justify-self-end py-2 px-4 text-lg 
                            bg-green-800 hover:bg-green-600 text-ht-white hover:text-ht-whiter 
                            cursor-pointer shadow-lg" 
                        >
                            Submit
                        </button>
                       
                    </div>
                </div>
                <div class="basis-1/12"></div>
            </form>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios';

import { useFormStore } from '../../stores/FormStore.js'
import { useSessionStore } from '../../stores/SessionStore.js'

import PhoneNumber from '../../assets/lib/PhoneNumber.js';
import FormTextInput from './components/FormTextInput.vue';
import FormSelectInput from './components/FormSelectInput.vue';
import FormEmailInput from './components/FormEmailInput.vue';
import FormPhoneInput from './components/FormPhoneInput.vue';
import FormTextArea from './components/FormTextArea.vue';

export default {
    setup(){
        const formStore = useFormStore();
        const sessionStore = useSessionStore();
        return {formStore, sessionStore};
    },
    components:{
        PhoneNumber,
        FormTextInput,
        FormSelectInput,
        FormEmailInput,
        FormPhoneInput,
        FormTextArea,
    },
    data() {
        return {
            contactMethodOptions:[
                { value: null, text: '-- Please Select A Method --', disabled: true},
                { value:"email", text:"E-mail" },
                { value:"text", text:"Text" },
                { value:"call", text:"Call" },
            ]
        }
    },
    methods:{
        closeForm(){
            this.formStore.closeAndStashActiveForm();
        },
        checkValidationAndSubmit(){
            if(this.formStore.activeFormValidity){
                var formJSON = {
                    sessionID: this.sessionStore.sessionID,
                    ...this.formStore.activeFormValues
                };
                axios.post(`${import.meta.env.VITE_FORM_API_URL}/hire`, formJSON, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then((response)=>{
                    this.formStore.setFormActive('submitted')
                })
                .catch((err)=>{
                    console.log(err);
                    this.formStore.stashActiveForm();
                    this.formStore.setFormActive('error')
                })
            }else{
                this.formStore.form.showValidation = true;
            }
        }
    },
    mounted(){
        // Scroll Self Into View. After Animation
        setTimeout(()=>{
            document.getElementById("HireForm").scrollIntoView();
        }, 500)
    }
}
</script>

<style scoped>
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