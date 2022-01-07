<template>
    <div class="flex flex-1 flex-col">
        <div class="w-40 h-40 m-5 sm:w-60 p-6 sm:h-60 sm:m-20 text-center border-red border-gray-300 shadow-xl shadow-red-300 rounded-full transition-all">
        </div>
        <button class="h-16 m-4 mx-10 rounded-lg shadow-lg" id="glasand"></button>
        <button class="h-16 m-4 rounded-lg shadow-lg" id="timing"></button>
    </div>
</template>

<script setup>
import SandGlass from '../assets/icons/sandglass.svg?component'
</script>
<style>
#glasand {
    background: linear-gradient(90deg, #02AAB0 0%, #00CDAC 100%);
}
#timing {
    background: linear-gradient(90deg, #4776E6 0%, #8E54E9 100%);
}
</style>