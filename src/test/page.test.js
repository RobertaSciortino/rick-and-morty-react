import page from '../model/page';

test('testing page model', () => {
    let total_count = 1;
    let items = [{test: 'test'}]
    
    let result = page(total_count, items);

    let expectedResult = {
        total_count: 1,
        items: [{test: 'test'}]
    }

    expect(result).toEqual(expectedResult);
})