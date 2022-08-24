<template>
    <div class="flex flex-col xl:flex-row">
        <div :class="`text-center p-1 px-3 bg-ht-dark text-ht-whiter drop-shadow-lg ${titleSize}`">
            {{title}}
        </div>
        <div class="text-lg xl:text-2xl text-center p-1 px-2 mt-1 ml-0 xl:mt-0 xl:ml-2 bg-ht-dark text-ht-whiter xl:self-end drop-shadow-lg">
            {{role}}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            },
            titleSize:{
                type: String,
                default: ()=>{ return 'text-4xl' }
            },
            role: {
                type: String,
                required: true
            },
        },
    }
</script>