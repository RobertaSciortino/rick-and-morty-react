import character from "../../model/character";
import CharacterStatus from "../../model/CharacterStatus";
import Gender from "../../model/gender";
import { API_LOCATION_URL } from "../constants";

function characterParser(characterData) {
    let id = characterData.id;
    let name = characterData.name;
    let avatar = characterData.image;
    let species = characterData.species;
    let gender = 'unknown';

    switch (characterData.gender) {
        case 'Male':
            gender = Gender.MALE;
            break;
        case 'Female':
            gender = Gender.FEMALE;
            break;
        case 'Genderless':
            gender = Gender.GENDERLESS;
            break;
        default:
            gender = Gender.UNKNOWN;
            break;
    }

    let status = 'unknown';

    switch (characterData.status) {
        case 'Alive':
            status = CharacterStatus.ALIVE;
            break;
        case 'Dead':
            status = CharacterStatus.DEAD;
            break;
        default:
            status = CharacterStatus.UNKNOWN;
            break;
    }

    let originLocation = {
        name: characterData.origin.name,
        id: characterData.origin.url.split(API_LOCATION_URL)[1]
    };

    let lastLocation = {
        name: characterData.location.name,
        id: characterData.location.url.split(API_LOCATION_URL)[1]
    }

    let episode = characterData.episode;

    return character(id, name, avatar, species, gender, status, originLocation, lastLocation, episode);
}

export default characterParser;