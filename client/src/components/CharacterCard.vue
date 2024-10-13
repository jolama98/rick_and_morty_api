<script setup>
import { Character } from '@/models/Character.js';
import { characterService } from '@/services/CharacterService.js';
defineProps({
  characterProp: { type: Character, require: true }
})

function setActiveCharacter(characterId){
  characterService.getCharacterById(characterId)
}
</script>


<template>
  <div v-if="characterProp" class="card mb-3">
    <img @click="setActiveCharacter(characterProp.id)" :src="characterProp.image" :alt="characterProp.image">
    <div class="d-flex justify-content-center">
      <h3>{{ characterProp.name }}</h3>
    </div>
  </div>
</template>


<style lang="scss" scoped>
img {
  height: 100%;
  object-fit: cover;
  box-shadow: 1px 1px 5px black
}
</style>
