import location from '../model/location';

test('testing location model', () => {
    let result = location(1, "Earth", "Planet", "Dimension C-137", 2)

    let expectedResult = {
        id: 1,
        name: "Earth",
        type: "Planet",
        dimension: "Dimension C-137",
        residents: 2
    }

    expect(result).toEqual(expectedResult);
})