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
  <div class="container-fluid  mt-3">
    <PageNavigation />

    <div class="row">
      <div class="col-12">
        <div class="masonry-layout">

          <div v-for="character in characters" :key="character.id" class="masonry-item">
            <CharacterCard :characterProp="character"  data-bs-toggle="modal"
              data-bs-target="#char-modal" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <ModalWrapper id="char-modal">
    <CharacterModal />
  </ModalWrapper>


</template>

<style scoped lang="scss">
.masonry-layout {
  column-count: 4;
  column-gap: 1rem;
  width: 100%;
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .masonry-layout {
    column-count: 3;
  }
}

@media (max-width: 480px) {
  .masonry-layout {
    column-count: 2;
  }
}
</style>
