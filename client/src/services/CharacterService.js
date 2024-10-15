
import { rickAndMortyApi } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Character } from "@/models/Character.js";
import { logger } from "@/utils/Logger.js"

class CharacterService {
  async searchCharacter(characterQuery) {
    const response = await rickAndMortyApi.get(`api/character/?name=${characterQuery}`)
    console.log('SEACRHED character 🔍', response.data.results);
    AppState.characterQuery = characterQuery
    this.handleResponseData(response.data)
  }
  // async changeSearchPage(pageNumber, movieQuery) {
  //   const response = await movieAPI.get(`search/movie?page=${pageNumber}&query=${movieQuery}`)
  //   console.log('CHANGED SEARCH PAGE', response.data);
  //   this.handleResponseData(response.data)
  // }

  clearSearchQuery() {
    AppState.characterQuery = ''
  }

  async changePage(pageNumber) {

    const response = await rickAndMortyApi.get(`api/character/?page=${pageNumber}`)
    console.log('CHANGED PAGE 🧍', response.data);
    this.handleResponseData(response.data)

  }


  async getAllCharacter() {
    const response = await rickAndMortyApi.get('api/character')

    AppState.character = response.data.results
    logger.log("ALL CHARACTER'S", response.data.results)
    AppState.totalPages = response.data.info.pages
  }

  async getCharacterById(characterId) {
    AppState.characterById = null
    const response = await rickAndMortyApi.get(`api/character/${characterId}`)
    AppState.characterById = response.data
    logger.log(response.data)

  }

  handleResponseData(responseData) {
    const newCharacters = responseData.results.map(characterPOJO => new Character(characterPOJO));

    AppState.character = newCharacters;
    AppState.totalPages = responseData.info.pages;
  }
}


export const characterService = new CharacterService()
