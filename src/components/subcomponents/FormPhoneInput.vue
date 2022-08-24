<template>
    <div class="flex flex-col self-stretch p-2">
        <div class="flex flex-row items-stretch ">
            <div 
                class="basis-1/4 text-right text-lg self-center font-bold text-ht-dark pl-2"
                :class="{
                    'underline': required,
                    'text-red-800': showSelfInvalid,
                    'text-ht-dark': !showSelfInvalid
                }"
            >
                {{label}}
            </div>
            <div class="basis-3/4 mr-2 ml-3 flex flex-col">
                <input 
                    ref="self"
                    :value="value"
                    @input="updated"
                    :name="dataName" 
                    type="tel" 
                    :spellcheck="spellCheck"
                    :placeholder="placeholder"
                    :data-position="position"
                    autocomplete="on"
                    class=" py-1 px-2 bg-ht-whiter border-2 rounded-md text-ht-darker"
                    :class="{
                        'border-ht-darker focus:border-ht-dark ': !showSelfInvalid,
                        'border-red-700 focus:border-red-900 bg-red-50': showSelfInvalid,
                    }"
                />
                
            </div>
        </div>
        <Transition name="field-notify">
            <div class="flex flex-row items-stretch"
                v-if="showSelfInvalid"
            >
                <div class="basis-1/4"></div>
                <div class=" basis-3/4 pl-2 text-red-800">
                    {{label}} is required
                </div>
            </div>
        </Transition>
    </div>
</template>

<script>
import { useFormStore } from '../../stores/FormStore.js'
import PhoneNumber from '../../assets/lib/PhoneNumber.js';

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
            default: 10
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
            value: null,
            position: 0
        }
    },
    methods:{
        updated(evt){
            var cursorPos = this.$refs.self.selectionEnd;
            var initLength = evt.target.value.length;
            this.value = PhoneNumber.format(evt.target.value)
            var finLength = this.value.length;
            var moveQuota = finLength - initLength;
            if(moveQuota > 0){
                cursorPos = Number(cursorPos) + moveQuota;
            }else{
                cursorPos = Number(cursorPos);
            }
            this.formStore.form.fields[this.dataName] = PhoneNumber.numbersOnly(this.value).join('');
            this.formStore.form.validation[this.dataName] = this.valid;
            this.$nextTick(()=>{
                this.$refs.self.setSelectionRange(cursorPos, cursorPos);
            })
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
            if(this.minLength != 0 && this.value.length < this.minLength){
                return false;
            }
            if(this.required){
                return PhoneNumber.isValid(this.value);
            }else{
                return true;
            }
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
    beforeDestroy () {
        this.formStore.removeField(this.dataName);
    },
}
</script>

<style scoped>

</style>