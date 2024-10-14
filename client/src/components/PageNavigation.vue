<script setup>
import { AppState } from '@/AppState.js';
import { characterService } from '@/services/CharacterService.js';
import Pop from '@/utils/Pop.js';
import { computed } from 'vue';

const currentPage = computed(() => AppState.currentPage)
const totalPages = computed(() => AppState.totalPages)

async function changePage(pageNumber) {
  try {
    if (AppState.characterQuery == '') {
      await characterService.changeDiscoverPage(pageNumber)

    }
    else {
      await characterService.changeSearchPage(pageNumber, AppState.characterQuery)
}
  }
  catch (error) {
    Pop.error(error);
  }

}
</script>


<template>
  <div class="d-flex gap-3 align-items-center my-3">
    <button @click="changePage(currentPage - 1)" :disabled="currentPage < 2" class="btn btn-outline-dark">
      Previous
    </button>
    <span class="fs-5">Page {{ currentPage }} of {{ totalPages }}</span>
    <button @click="changePage(currentPage + 1)"
      class="btn btn-outline-dark">
      Next
    </button>
  </div>
</template>


<style lang="scss" scoped></style>
