
import { rickAndMortyApi } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Character } from "@/models/Character.js";
import { logger } from "@/utils/Logger.js"

class CharacterService {
  changeSearchPage(pageNumber, characterQuery) {
    throw new Error('Method not implemented.');
  }
  async discoverCharacters() {
    const response = await rickAndMortyApi.get('api/character')
    this.handleResponseData(response.data)

  }


  async changeDiscoverPage(pageNumber) {

    const response = await rickAndMortyApi.get(`api/character/?page=${pageNumber}`)
    console.log('CHANGED PAGE 🧍', response.data);
    this.handleResponseData(response.data)

  }


  async getAllCharacter() {
    const response = await rickAndMortyApi.get('api/character')

    AppState.character = response.data.results
    logger.log("ALL CHARACTER'S", response.data.results)
  }

  async getCharacterById(characterId) {
    AppState.characterById = null
    const response = await rickAndMortyApi.get(`api/character/${characterId}`)
    AppState.characterById = response.data
    logger.log(response.data)

  }

  handleResponseData(responseData) {
    const newCharacters = responseData.results.map(characterPOJO => new Character(characterPOJO))

    AppState.character = newCharacters
    AppState.currentPage = responseData.page
    AppState.totalPages = responseData.total_pages
  }
}


export const characterService = new CharacterService()
