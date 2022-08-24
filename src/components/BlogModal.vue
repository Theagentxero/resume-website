<template>
    <Transition name="modal">
        <div 
            v-if="modelValue"
            @click.stop="close"
            class="fixed backdrop-blur-sm backdrop-brightness-50 top-0 left-0 z-20 w-screen h-screen overflow-y-auto"
        >
            <div
                @click.stop="()=>{}"
                class="relative bg-ht-white mx-3 my-5 sm:my-5 sm:mx-5 lg:mx-auto lg:max-w-5xl p-5"
            >
                <div @click.stop="close" class="absolute top-1 right-1 px-3 py-1 bg-red-700 z-20">
                    <i class="fa-solid fa-xmark fa-lg"></i>
                </div>
                <slot></slot>
            </div>
        </div>
    </Transition>
</template>

<script>
export default {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    methods: {
        close() {
            this.$emit('update:modelValue', false)
        }
    },
    watch:{
        modelValue: function(updated, old){
            if(updated == true){
                var html = document.getElementsByTagName('html')[0]
                html.classList.add('modal-open');
            }else{
                var html = document.getElementsByTagName('html')[0]
                html.classList.remove('modal-open')
            }
        }
    }
}
</script>


<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>