import axios from "axios";
import getEpisodes from "../../api/episodeApi";

jest.mock('Axios');

test('testing episode api', () => {
    const fakeEpisodeData = {
        data: [
            {
              "id": 10,
              "name": "Close Rick-counters of the Rick Kind",
              "air_date": "April 7, 2014",
              "episode": "S01E10",
              "characters": [
                "https://rickandmortyapi.com/api/character/1",
                "https://rickandmortyapi.com/api/character/2"
              ],
              "url": "https://rickandmortyapi.com/api/episode/10",
              "created": "2017-11-10T12:56:34.747Z"
            },
            {
              "id": 28,
              "name": "The Ricklantis Mixup",
              "air_date": "September 10, 2017",
              "episode": "S03E07",
              "characters": [
                "https://rickandmortyapi.com/api/character/1",
                "https://rickandmortyapi.com/api/character/2"
              ],
              "url": "https://rickandmortyapi.com/api/episode/28",
              "created": "2017-11-10T12:56:36.618Z"
            }
        ]
    }

    axios.get.mockResolvedValueOnce(fakeEpisodeData);

    getEpisodes([10, 28]).then(episodes => {
        let expectedResult = [
            {
              "id": 10,
              "name": "Close Rick-counters of the Rick Kind",
              "code": "S01E10"
            },
            {
              "id": 28,
              "name": "The Ricklantis Mixup",
              "code": "S03E07"
            }
        ];

        expect(episodes).toEqual(expectedResult);
    })
})

test('testing episode api error', () => {
    axios.get.mockRejectedValueOnce({response: { statusCode: 500}});

    getEpisodes([10, 28]).catch(error => {
        let expectedResult = {
            message: 'Error retrieving episodes',
            statusCode: 500
        }

        expect(error).toEqual(expectedResult)
    })
})