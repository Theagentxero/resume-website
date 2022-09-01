<template>
    <div class="flex flex-col self-stretch p-2">
        <div class="flex flex-col items-stretch ">
            <label :for="`ff-${dataName}`" 
                class="text-base md:text-lg font-bold text-ht-dark pl-2"
                :class="{
                    'underline': required,
                    'text-red-800': showSelfInvalid,
                    'text-ht-dark': !showSelfInvalid
                }"
            >
                {{label}}
            </label>
            <select 
                :id="`ff-${dataName}`"
                ref="self"
                v-model="value" 
                @change="updated"
                :name="dataName" 
                class=" py-1 px-2 bg-ht-whiter border-2 rounded-md text-ht-darker"
                :class="{
                    'border-ht-darker focus:border-ht-dark ': !showSelfInvalid,
                    'border-red-700 focus:border-red-900 bg-red-50': showSelfInvalid,
                }"
            >
                <option v-for="option in options" :key="option.value"
                    :value="option.value"   
                    :disabled="option.disabled || false"
                >
                    {{option.text}}
                </option>
            </select>
        </div>
        <Transition name="field-notify">
            <div class=" pl-2 text-red-800" v-if="showSelfInvalid">
                {{label}} is required
            </div>
        </Transition>
    </div>
</template>

<script>
import { useFormStore } from '../../../stores/FormStore.js'

export default {
    setup(){
        const formStore = useFormStore();
        return {formStore}
    },
    props:{
        dataName: {
            type:String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        options:{
            type: Array,
            required: true
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
        getFocusOnMount:{
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            value: null 
        }
    },
    methods:{
        updated(evt){
            this.formStore.form.fields[this.dataName] = evt.target.value;
            this.formStore.form.validation[this.dataName] = this.valid;
        },
    },
    computed:{
        showSelfInvalid(){
            if(this.formStore.form.showValidation){
                return !this.valid;
            }else{
                return false;
            }
        },
        valid(){
            if(this.required && this.value == null){
                return false;
            }
            return true;
        }
    },
    beforeMount () {
        this.value = this.default;
        this.formStore.addField(this.dataName, this.value, this.valid)
    },
    mounted(){
        if(this.getFocusOnMount){
            this.$refs.self.focus();
        }
    },
    beforeUnmount() {
        this.formStore.removeField(this.dataName);
    },
}
</script>

<style scoped>

</style>