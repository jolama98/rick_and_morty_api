<script setup>
import { AppState } from '@/AppState.js';
import CharacterCard from '@/components/CharacterCard.vue';
import CharacterModal from '@/components/CharacterModal.vue';
import ModalWrapper from '@/components/ModalWrapper.vue';
import PageNavigation from '@/components/PageNavigation.vue';
import { characterService } from '@/services/CharacterService.js';
import Pop from '@/utils/Pop.js';
import { computed, onUnmounted, ref } from 'vue';

const characters = computed(() => AppState.character)

const editableQuery = ref('')

onUnmounted(() => {
  characterService.clearSearchQuery()
})

function searchCharacter() {
  try {
    characterService.searchCharacter(editableQuery.value)
  }
  catch (error) {
    Pop.error(error);
  }
}
</script>



<template>
  <div class="container">
    <section class="row">
      <div class="col-12">
        <div class="d-flex justify-content-center">
          <h1>Search Characters</h1>
        </div>
      </div>
      <div class="col-12 my-3">
        <div class="d-flex justify-content-center">

          <form @submit.prevent="searchCharacter()">
            <div>
              <label for="" class="form-control-label">Character Name</label>
              <div class="d-flex">
                <input v-model="editableQuery" type="text" class="form-control flex-grow-1 gap-1" name="query" id="query"
                placeholder="Character Name..." required>
                <button class="btn btn-warning" type="submit">Search</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>



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


<style lang="scss" scoped></style>
