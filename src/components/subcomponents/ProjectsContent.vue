<template>
    <div class="mt-2 p-2 bg-ht-whiter bg-opacity-30 shadow-lg">
        <p class="text-lg xl:text-xl">
            {{leadText}}
        </p>
        <p v-for="(entry, idx) in content" :key="idx" class="mt-2">
            {{entry}}
        </p>
    </div>
</template>

<script>
export default {
    props: {
        leadText: {
            type: String,
            required: true,
        },
        content: {
            type: Array,
            default: ()=>{ return [] }
        },
    },
}
</script>