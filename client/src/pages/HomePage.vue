<script setup>
import { computed, onMounted, onUnmounted } from 'vue';
import Pop from '../utils/Pop.js';
import { characterService } from '@/services/CharacterService.js'
import { AppState } from '@/AppState.js';
import CharacterCard from '@/components/CharacterCard.vue';
import ModalWrapper from '@/components/ModalWrapper.vue';
import CharacterModal from '@/components/CharacterModal.vue';
import PageNavigation from '@/components/PageNavigation.vue';

const characters = computed(() => AppState.character)


onMounted(() => {
  getAllCharacter()
})

onUnmounted(() => {
  characterService.clearCharacter()
})



async function getAllCharacter() {

  try {
    await characterService.getAllCharacter()
  }
  catch (error) {
    Pop.error(error);
  }
}
</script>

<template>
  <div class="container">

    <PageNavigation />



    <div class="row d-flex justify-content-center align-items-center">
      <div v-for="character in characters" :key="character.id" class="col-md-3 col-12">
        <CharacterCard :characterProp="character" class="btn btn-primary" data-bs-toggle="modal"
          data-bs-target="#char-modal" />
      </div>
    </div>
  </div>

  <ModalWrapper id="char-modal">
    <CharacterModal />
  </ModalWrapper>


</template>

<style scoped lang="scss"></style>
