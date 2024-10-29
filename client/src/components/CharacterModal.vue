<script setup>
import { AppState } from '@/AppState.js';
import { computed } from 'vue';

const character = computed(() => AppState.characterById)
</script>


<template>
  <div class="row">
    <div class="col-7">
      <div class="card">
        <img class="img-fluid" :src="character?.image" :alt="character?.name">
        <h2 class=" card-img-overlay text-light d-flex justify-content-start align-items-end p-3 shadow-sm ">{{
          character?.name }}
      </h2>
    </div>
    </div>
    <div class="col-5">
      <div class="d-flex align-items-end pt-5">

        <div class="">
          <p class="fs-4">Status: {{ character?.status }}</p>
          <p class="fs-4">Species: {{ character?.species }}</p>
          <p class="fs-4">Gender: {{ character?.gender }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
h2{
  text-shadow: 1px 1px 2px black;
}
</style>
