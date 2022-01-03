<template>
  <div class=" h-screen w-1/2 sm:bg-[#F2C2B6] bg-transparent">
    <Timercard></Timercard>
    <!-- <Modal /> -->
  </div>
</template>

<script setup>
import Timercard from '../components/Timercard.vue';
import Modal from '../components/Modal.vue';
</script>

<style>
*{
    animation-fill-mode: none;
}
</style>