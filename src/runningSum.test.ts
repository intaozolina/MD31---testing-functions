import runningSum from "./runningSum";

test('if array returns sumArray', () => {
    const response = runningSum([3,1,2,10,1]);
    expect(response).toEqual([3,4,6,16,17])
});

test('if return not empty array', () => {
    const response = runningSum([1,1,1,1,1]);
    expect(response).toHaveLength(5)
});

test('if negative array return truthy value', () => {
    const response = runningSum([[-1, -3, 5, 8]]);
    expect(response).toBeTruthy();
});

test('if empty array resolves as defined', () => {
    const response = runningSum([]);
    expect(response).toBeDefined();
});

test('if number resolves to undefined', () => {
    const response = runningSum([0]);
    expect(response[0]).toBeFalsy();
});
