<template>
    <!-- <Modal v-show="Hiddisplay" class="animate__animated animate__fadeIn"/> -->
    <div
        class="bg-white/[0.3] backdrop-blur-xl text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg animate__animated animate__fadeIn"

    >
        <div
            class="absolute -translate-y-1/2 left-1/2 -translate-x-1/2 py-1 px-8 rounded-lg bg-slate-50 backdrop-blur-xl shadow-lg text-center text-sm sm:text-lg select-none font-medium  max-w-[50%] whitespace-nowrap truncate  overflow-hidden"
            @ChangeCardTitle = "ChangeTitle"
        >{{cardTitle}} Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis, eligendi aliquam nam, saepe aspernatur porro eaque nesciunt nisi libero iste. Error quae autem nihil optio est repellendus totam adipisci?</div>
        <router-view></router-view>
        QAQ
        <!-- <Timer></Timer>
        <SelectModel></SelectModel> -->
    </div>
</template>

<script setup>
import { provide, ref } from 'vue';
let cardTitle = ref('选择一个模式')

function ChangeTitle(title = "风雨"){
cardTitle.value = title
}
</script>

<style>
.number {
    font-family: "MTC 7 Segment";
}
@font-face {
    font-family: "MTC 7 Segment";
    src: url("../assets/MTC-7-Segment.TTF");
}
</style>