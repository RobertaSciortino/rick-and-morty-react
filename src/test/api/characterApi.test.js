import axios from "axios";
import getCharactersPage from "../../api/characterApi"

jest.mock('Axios');

test('testing character page api', () => {
     const fakeCharacterPageJson =  {
        data: {
            "info": {
                "count": 826,
                "pages": 42,
                "next": "https://rickandmortyapi.com/api/character/?page=2",
                "prev": null
            },
            "results": [
                {
                    "id": 361,
                    "name": "Toxic Rick",
                    "status": "Dead",
                    "species": "Humanoid",
                    "type": "Rick's Toxic Side",
                    "gender": "Male",
                    "origin": {
                        "name": "Alien Spa",
                        "url": "https://rickandmortyapi.com/api/location/64"
                    },
                    "location": {
                        "name": "Earth",
                        "url": "https://rickandmortyapi.com/api/location/20"
                    },
                    "image": "https://rickandmortyapi.com/api/character/avatar/361.jpeg",
                    "episode": [
                        "https://rickandmortyapi.com/api/episode/27"
                    ],
                    "url": "https://rickandmortyapi.com/api/character/361",
                    "created": "2018-01-10T18:20:41.703Z"
                }
            ]
        } 
    }

    axios.get.mockResolvedValueOnce(fakeCharacterPageJson);

    getCharactersPage(1).then(page => {
        let expectedResult = {
            total_count: 826,
            items: [
                {
                    "id": 361,
                    "name": "Toxic Rick",
                    "status": "Dead",
                    "species": "Humanoid",
                    "gender": "Male",
                    "originLocation": {
                        "name": "Alien Spa",
                        "id": "64"
                    },
                    "lastLocation": {
                        "name": "Earth",
                        "id": "20"
                    },
                    "avatar": "https://rickandmortyapi.com/api/character/avatar/361.jpeg",
                    "episode": [
                        "https://rickandmortyapi.com/api/episode/27"
                    ]
                }
            ]
        }
        
        expect(page).toEqual(expectedResult);
    })
    
})

test('testing chatacter error', () => {
    axios.get.mockRejectedValueOnce({response: { statusCode: 500 }})

    getCharactersPage(1).catch(error => {
        let expectedResult = {
            message: 'Error retrieving characters',
            statusCode: 500
        }

        expect(error).toEqual(expectedResult);
    })
})