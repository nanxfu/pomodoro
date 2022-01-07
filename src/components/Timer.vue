<template>
    <div
        class="text-center border-red border-gray-300 shadow-xl shadow-red-300 rounded-full w-60 h-60 m-5 sm:w-80 sm:h-80 sm:m-10 flex flex-1 flex-col justify-center items-center transition-all"
    >
        <div
            class="relative text-6xl text-slate-800 cursor-pointer select-none mt-5 animate__animated animate__bounceIn"
            @dblclick.stop="SetTimer()"
        >
            <span class="number">{{ Timercount.remainmin }}</span>
            <span class="number">:</span>
            <span class="number">{{ Timercount.remainsec }}</span>
        </div>
        <span class="text-lg mt-10 text-zinc-700 animate__animated animate__bounceIn">Focusing</span>
    </div>
    <div
        class="transition m-auto p-10 my-5 relative w-[64px] h-[64px] rounded-full shadow-xl duration-300 shadow-red-300 bg-[#E53E3E] cursor-pointer text-center hover:bg-red-600 animate__animated animate__bounceIn"
    >
        <button
            class="bg-white hover:bg-slate-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[30px] h-[30px] shadow-xl"
        ></button>
    </div>
</template>
<script setup>

import Modal from '../components/Modal.vue';
import Accuracytimer from '../uilts/AccurateTimer';
import { reactive, ref } from 'vue';
let Timercount = reactive({
    remaintime: 0,
    remainsec: 0,
    remainmin: 0
})
let Hiddisplay = ref(false)
let Timer;
let SetTimer = () => {
    Hiddisplay.value = !Hiddisplay.value
}
// Timer = Accuracytimer('backward', (remaintime) => {
//     Timercount.remaintime = remaintime
//     Timercount.remainsec = remaintime % 60
//     Timercount.remainmin = Math.floor(remaintime / 60)
// }, 70)
// Timer.start()
</script>