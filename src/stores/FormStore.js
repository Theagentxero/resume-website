import { hasOwn } from '@vue/shared';
import { defineStore } from 'pinia';

export const useFormStore = defineStore('form', {
    // a function that returns a fresh state
    state: () => ({
        usedIDSet: new Set(),
        form:{
            active: null,
            showValidation: false,
            fields:{},
            validation: {}
        }
    }),
    // optional getters
    getters: {
        // getters receive the state as first parameter
        checkActiveFormValid: (state) => {
            for (const property in state.form.fields) {
                let validation = state.form.validation[property]
                if(validation != undefined && validation != null){
                    if(!validation){
                        return false;
                    }
                }
            }
            return true;
        },
        getActiveFormValues: (state)=>{
            return state.form.fields;
        }
    },
    // optional actions
    actions: {
        setForm(formName){
            this.form.active = formName;
        },
        toggleValidation(){
            this.form.showValidation = !this.form.showValidation;
        },
        showValidation(){
            this.form.showValidation = true;
        },
        hideValidation(){
            this.form.showValidation = false;
        },
        addField(dataName, initVal = null, initValidation = true){
            if(this.usedIDSet.has(dataName)){
                throw new Error(`Data Name: ${dataName} already exists`)
            }else{
                this.form.fields[dataName] = initVal;
                this.form.validation[dataName] = initValidation;
            }
        },
        removeField(dataName){
            if(Object.hasOwn(this.form.fields, dataName)){
                delete this.form.fields[dataName]
            }
            if(Object.hasOwn(this.form.validation, dataName)){
                delete this.form.validation[dataName]
            }
        },
        reset() {
            this.usedIDSet = new Set();
            // `this` is the store instance
            this.form = {
                active: null,
                showValidation: false,
                fields: {},
                validation: {}
            }
        },
    },
})