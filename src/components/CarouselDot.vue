<template>
    <div id="car-dot" class="transition-all duration-150 ease-in-out" :class="{ 'text-ht-green': isActive, 'text-ht-light-green': !isActive, 'text-3xl': isActive }">
        <i class="fa-solid fa-circle mx-2"></i>
    </div>
    
</template>

<script>
export default {
    props: {
        isActive: {
            type: Boolean,
            default: false
        },
    },
}
</script>

<style scoped>
</style>
