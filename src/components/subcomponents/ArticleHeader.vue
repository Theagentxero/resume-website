<template>
    <div class="bg-ht-dark mt-2 italic text-ht-white flex flex-row">
        <div class="border-r-2 border-ht-white px-3 py-1 whitespace-nowrap">
            {{articleDate}}
        </div>
        <div class="border-r-2 border-ht-white px-3 py-1 whitespace-nowrap">
            Taylor Richards
        </div>
        <div class="px-3 py-1 border-ht-white"
            :class="{
                'border-r-2' : (notes !== null)
            }"
        >
            <a :href="permalink" target="_blank" class="underline text-blue-200 hover:text-blue-100">Permalink</a>
        </div>
        <div v-if="notes !== null" class="px-3 py-1">
            {{notes}}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        articleDate:{
            type: String,
            required: true
        },
        permalink:{
            type: String,
            required: true
        },
        notes: {
            type: String,
            required: false,
            default: ()=>{ return null}
        }
    }
}
</script>

<style scoped>

</style>