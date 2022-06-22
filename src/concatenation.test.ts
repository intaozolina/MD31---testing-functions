import getConcatenation from "./concatenation";


test('if array returns concatenated Array', () => {
    const response = getConcatenation([3,1,2]);
    expect(response).toEqual([3,1,2,3,1,2]);
});

test('if array have length', () => {
    const response = getConcatenation([-3,-1,-2]);
    expect(response).toHaveLength(6);
});

test('if array with negatives returns concatenated Array', () => {
    const response = getConcatenation([-3,-1,-2]);
    expect(response).toStrictEqual([-3,-1,-2,-3,-1,-2]);
});

test('if empty array concatenation is truthy', () => {
    const response = getConcatenation([]);
    expect(response).toBeTruthy();
});

test('if array with 0 return fault value', () => {
    const response = getConcatenation([0]);
    expect(response[0]).toBeFalsy();
});
