
import { rickAndMortyApi } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { logger } from "@/utils/Logger.js"

class CharacterService {

  async getAllCharacter() {
    const response = await rickAndMortyApi.get('api/character')

    AppState.character = response.data.results
    logger.log("ALL CHARACTER'S", response.data.results)
  }

  async getCharacterById(characterId)
  {
    AppState.characterById = null
    const response = await rickAndMortyApi.get(`api/character/${characterId}`)
    AppState.characterById = response.data

      logger.log(response.data)

  }
}

export const characterService = new CharacterService()
