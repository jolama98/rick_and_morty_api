<script setup>
import { Character } from '@/models/Character.js';
import { characterService } from '@/services/CharacterService.js';
defineProps({
  characterProp: { type: Character, require: true }
})

function setActiveCharacter(characterId) {
  characterService.getCharacterById(characterId)
}
</script>

<template>
  <div v-if="characterProp" class="card bg-primary mb-2">
    <img @click="setActiveCharacter(characterProp.id)" :src="characterProp.image" :alt="characterProp.image">
    <div class="d-flex justify-content-center card-img-overlay align-items-end">
      <p class="fw-semibold text-light mb-1  fs-5">{{ characterProp.name }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  height: 100%;
  object-fit: cover;
  box-shadow: 1px 1px 5px black
}
p{
text-shadow: 1px 1px 2px rgb(0, 0, 0);
}
</style>
