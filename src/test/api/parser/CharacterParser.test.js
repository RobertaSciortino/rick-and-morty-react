import CharacterParser from '../../../api/parser/CharacterParser';

test('testing character parser', () => {
    let characterData = {
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
          "name": "Earth",
          "url": "https://rickandmortyapi.com/api/location/1"
        },
        "location": {
          "name": "Earth",
          "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        "episode": [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2"
        ],
        "url": "https://rickandmortyapi.com/api/character/1",
        "created": "2017-11-04T18:48:46.250Z"
    };
    
    let result = CharacterParser(characterData);

    let expectedResult = {
        "id": 1,
        "name": "Rick Sanchez",
        "avatar": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        "species": "Human",
        "gender": "Male",
        "status": "Alive",
        "originLocation": {
          "name": "Earth",
          "id": "1"
        },
        "lastLocation": {
          "name": "Earth",
          "id": "20"
        },
        "episode": [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2"
        ]
    }

    expect(result).toEqual(expectedResult);
})