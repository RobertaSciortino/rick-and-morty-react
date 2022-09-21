import episode from "../model/episode"

test('testing episode model', () => {
    let result = episode(1, "Pilot", "S01E01");

    let expectedResult = {
        id: 1,
        name: "Pilot",
        code: "S01E01"
    }

    expect(result).toEqual(expectedResult);
})