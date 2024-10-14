export class Character {

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.status = data.status;
    this.species = data.species;
    this.type = data.type;
    this.gender = data.gender;
    this.location = data.location;
    this.image = data.image;
    this.episode = data.episode;
    this.origin = data.origin;
    this.url = data.url;
    this.created = data.created;
  }
  get backgroundImage() {
    return `url(${this.image})`
  }
}
const c = [
  {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
      "name": "Earth (C-137)",
      "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
      "name": "Citadel of Ricks",
      "url": "https://rickandmortyapi.com/api/location/3"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",

    "url": "https://rickandmortyapi.com/api/character/1",
    "created": "2017-11-04T18:48:46.250Z"
  }
]
