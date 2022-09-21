import episodeParser from "../../../api/parser/EpisodeParser"

test('testing episode parser', () => {
    let episodeData = {
        "id": 1,
        "name": "Pilot",
        "air_date": "December 2, 2013",
        "episode": "S01E01",
        "characters": [
            "https://rickandmortyapi.com/api/character/1",
            "https://rickandmortyapi.com/api/character/2",
            //...
        ],
        "url": "https://rickandmortyapi.com/api/episode/1",
        "created": "2017-11-10T12:56:33.798Z"
    }

    let result = episodeParser(episodeData);

    let expectedResult = {
        "id": 1,
        "name": "Pilot",
        "code": "S01E01"
    };

    expect(result).toEqual(expectedResult);
})