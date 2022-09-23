import axios from "axios"
import { getLocationDetails } from "../../api/locationApi";

jest.mock('Axios');

test('testing location api', () => {
    const fakeLocationData = {
        data: [
        {
            "id": 3,
            "name": "Citadel of Ricks",
            "type": "Space station",
            "dimension": "unknown",
            "residents": [
            "https://rickandmortyapi.com/api/character/8",
            "https://rickandmortyapi.com/api/character/14"
            ],
            "url": "https://rickandmortyapi.com/api/location/3",
            "created": "2017-11-10T13:08:13.191Z"
        },
        {
            "id": 21,
            "name": "Testicle Monster Dimension",
            "type": "Dimension",
            "dimension": "Testicle Monster Dimension",
            "residents": [
            "https://rickandmortyapi.com/api/character/8",
            "https://rickandmortyapi.com/api/character/14"
            ],
            "url": "https://rickandmortyapi.com/api/location/3",
            "created": "2017-11-10T13:08:13.191Z"
        }
    
    ]
    };
    
    axios.get.mockResolvedValueOnce(fakeLocationData);

    getLocationDetails([3, 21]).then(locations => {
        let expectedResult = [
            {
              "id": 3,
              "name": "Citadel of Ricks",
              "type": "Space station",
              "dimension": "unknown",
              "residents": 2
            },
            {
              "id": 21,
              "name": "Testicle Monster Dimension",
              "type": "Dimension",
              "dimension": "Testicle Monster Dimension",
              "residents": 2
            }
        ]
        expect(locations).toEqual(expectedResult);

    })
})

test('testing location api error', () => {
    axios.get.mockRejectedValueOnce({response: { statusCode: 500 }});

    getLocationDetails([3, 21]).catch(error => {
        let expectedResult = {
            message: 'Error retrieving locations',
            statusCode: 500
        }

        expect(error).toEqual(expectedResult);
    })
})