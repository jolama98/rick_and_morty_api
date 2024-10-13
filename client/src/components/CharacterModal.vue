<script setup>
import { AppState } from '@/AppState.js';
import { computed } from 'vue';

const character = computed(() => AppState.characterById)
</script>


<template>

  <div>
    <h1>{{ character?.name }}</h1>
  </div>
</template>


<style lang="scss" scoped></style>
