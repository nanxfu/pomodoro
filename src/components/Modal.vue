<script setup>

</script>
<template>
    <div
        class="max-w-sm px-5 py-2 border-t-8 flex flex-col flex-1 bg-white shadow-lg rounded-lg border-t-[#84CCDC] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    >
        <header class="self-end mb-2">
            <button class="text-gray text-2xl">×</button>
        </header>
        <img src="../assets/bg1.jpg" alt />
        <h1 class="m-1 self-center text-lg subpixel-antialiased font-bold">调整时间</h1>
        <div>
            <i></i>
            <p class="text-lg m-1">
                倒计时单位为
                <span class="border-b-2 border-[#E53E3E] pb-1">"分钟"</span>
            </p>
            <p class="text-lg m-1">计时是准确的，并且会自动校准</p>
            <div class="flex my-4">
                <span class="absolute text-xs ml-1 -translate-y-3 text-current text-gray-700">输入时间（分钟）</span>
                <input type="text" class="flex-1  focus:outline-none border-b-2 ml-1" />
                <button
                    class="text-sm font-bold text-yellow-50 py-2 px-3 shadow-lg bg-red-400 outline-none appearance-none rounded-xl active:outline-none ml-3 mt-1  active:bg-red-700"
                >确定修改</button>
            </div>
        </div>
    </div>
</template>