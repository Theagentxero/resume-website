<template>
    <div class="flex flex-col self-stretch p-2">
        <div class="flex flex-row items-stretch">
            <div class="basis-1/2 flex flex-row items-stretch">
                <div 
                    class="hidden xl:block basis-1/4 text-right text-base md:text-lg self-start xl:self-center font-bold text-ht-dark pl-2"
                    :class="{
                        'underline': required,
                        'text-red-800': showSelfInvalid,
                        'text-ht-dark': !showSelfInvalid
                    }"
                >
                    {{label}} Date
                </div>
                <div class="basis-3/4 mr-2 ml-3 flex flex-col">
                    <input 
                        ref="self"
                        v-model="date" 
                        @input="updated"
                        :name="dataName" 
                        type="date" 
                        :spellcheck="spellCheck" 
                        :placeholder="placeholder"
                        :min="minDate"
                        class=" py-1 px-2 bg-ht-whiter border-2 rounded-md text-ht-darker"
                        :class="{
                            'border-ht-darker focus:border-ht-dark ': !showSelfInvalid,
                            'border-red-700 focus:border-red-900 bg-red-50': showSelfInvalid,
                        }"
                    />
                </div>
            </div>
           <div class="basis-1/2 flex flex-row items-stretch">
                <div 
                    class="basis-1/4 text-right text-base md:text-lg self-center font-bold text-ht-dark pl-2"
                    :class="{
                        'underline': required,
                        'text-red-800': showSelfInvalid,
                        'text-ht-dark': !showSelfInvalid
                    }"
                >
                    {{label}} Time
                </div>
                <div class="basis-3/4 mr-2 ml-3 flex flex-col">
                    <input 
                        ref="self"
                        v-model="time" 
                        @input="updatedTime"
                        :name="dataName" 
                        type="time" 
                        :spellcheck="spellCheck" 
                        :placeholder="placeholder"
                        min="09:00"
                        max="17:00"
                        class=" py-1 px-2 bg-ht-whiter border-2 rounded-md text-ht-darker"
                        :class="{
                            'border-ht-darker focus:border-ht-dark ': !showSelfInvalid,
                            'border-red-700 focus:border-red-900 bg-red-50': showSelfInvalid,
                        }"
                    />
                </div>
            </div>
        </div>
        <Transition name="field-notify">
            <div class="flex flex-row items-stretch"
                v-if="showDateInvalid"
            >
                <div class="basis-1/4"></div>
                <div class=" basis-3/4 pl-2 text-red-800">
                    Date is required, appointments should be made at least 4 days out.
                </div>
            </div>
        </Transition>
        <Transition name="field-notify">
            <div class="flex flex-row items-stretch"
                v-if="showTimeInvalid"
            >
                <div class="basis-1/4"></div>
                <div class=" basis-3/4 pl-2 text-red-800">
                    Time is required, must be between 9:00 AM and 5:00 PM
                </div>
            </div>
        </Transition>
    </div>
</template>

<script>
import { useFormStore } from '../../../stores/FormStore.js'
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat);

export default {
    setup(){
        const formStore = useFormStore();
        return {formStore}
    },
    props:{
        label: {
            type: String,
            required: true
        },
        dataName: {
            type:String,
            required: true
        },
        placeholder: {
            type: String,
            default: null
        },
        default:{
            type:String,
            required: false,
            default: null
        },
        required: {
            type: Boolean,
            default: false
        },
        minLength: {
            type: Number,
            default: 0
        },
        spellCheck:{
            type: Boolean,
            default: true
        },
        getFocusOnMount:{
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            date: null,
            time: null,
            timestamp: null,
        }
    },
    methods:{
        updated(evt){
            this.timestamp = dayjs(`${this.date} ${this.time}`, 'YYYY-MM-DD HH:mm', true)
            this.formStore.form.fields[this.dataName] = this.timestamp.unix();
            this.formStore.form.validation[this.dataName] = this.valid;
        },
        updatedTime(evt){
            this.timestamp = dayjs(`${this.date} ${this.time}`, 'YYYY-MM-DD HH:mm', true)
            this.formStore.form.fields[this.dataName] = this.timestamp.unix();
            this.formStore.form.validation[this.dataName] = this.valid;
        }
    },
    computed:{
        showSelfInvalid(){
            if(this.formStore.form.showValidation){
                return !this.valid;
            }else{
                return false;
            }
        },
        showDateInvalid(){
            if(this.formStore.form.showValidation){
                return !this.dateValid;
            }else{
                return false;
            }
        },
        showTimeInvalid(){
            if(this.formStore.form.showValidation){
                return !this.timeValid;
            }else{
                return false;
            }
        },
        valid(){
            if(this.required && (this.date == null || this.time == null)){
                return false;
            }
            if(this.required){
                if(this.dateValid && this.timeValid){
                    return this.timestamp.isValid()
                }else{
                    return false;
                }
            }
            return true;
        },
        dateValid(){
            if(this.required && this.time == null){
                return false;
            }
            if(this.required){
                var date = dayjs(`${this.date}`, 'YYYY-MM-DD', true)
                if(date.isValid()){
                    if(date > dayjs().add(3, 'day')){
                        return true;
                    }else{
                        return false;
                    }
                }else{
                    return false;
                }
            }
            return true;
        },
        timeValid(){
            if(this.required && this.time == null){
                return false;
            }
            if(this.required){
                var hour =  this.timestamp.hour();
                return hour >= 9 && hour <= 17;
            }
            return true;
        },
        minDate(){
            return dayjs().add(4, 'day').format("YYYY-MM-DD");
        }
    },
    beforeMount () {
        this.value = this.default;
        this.formStore.addField(this.dataName, this.value, this.valid)
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        this.formStore.addField(`${this.dataName}TimeZone`, timezone, true);
    },
    mounted(){
        if(this.getFocusOnMount){
            this.$refs.self.focus();
        }
    },
    beforeDestroy () {
        this.formStore.removeField(this.dataName);
        this.formStore.removeField(`${this.dataName}TimeZone`);
    },
}
</script>

<style scoped>

</style>