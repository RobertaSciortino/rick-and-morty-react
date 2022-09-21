import character from '../model/character';

test('testing character model', () => {
    let result = character(
        1, 
        "Rick Sanchez", 
        "https://rickandmortyapi.com/api/character/avatar/1.jpeg", 
        "Human", 
        "Male",
        "Alive",
        {
            "name": "Earth",
            "id": "1"
        }, 
        {
            "name": "Earth",
            "id": "20"
        }, 
        [
            "https://rickandmortyapi.com/api/episode/1",
            "https://rickandmortyapi.com/api/episode/2"
        ]
    );

    let expectedResult = {
        id: 1, 
        name: "Rick Sanchez", 
        avatar:  "https://rickandmortyapi.com/api/character/avatar/1.jpeg", 
        species: "Human", 
        gender: "Male",
        status: "Alive",
        originLocation: {
            "name": "Earth",
            "id": "1"
        }, 
        lastLocation: {
            "name": "Earth",
            "id": "20"
        }, 
        episode: [
            "https://rickandmortyapi.com/api/episode/1",
            "https://rickandmortyapi.com/api/episode/2"
        ]
    }

    expect(result).toEqual(expectedResult);
})