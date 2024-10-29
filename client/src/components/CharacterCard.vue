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
  <div role="button" @click="setActiveCharacter(characterProp.id)" v-if="characterProp" class="card">
    <img class="img-fluid" :src="characterProp.image" :alt="characterProp.image">
    <div class="card-img-overlay d-flex flex-column justify-content-end">
      <p class="card-text text-light textShadow fs-4 m-1">{{ characterProp.name }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// img {
//   height: 0%;
//   object-fit: cover;
//   box-shadow: 1px 1px 5px black
// }
p {
  text-shadow: 1px 1px 2px rgb(0, 0, 0);
}
</style>
