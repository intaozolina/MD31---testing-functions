import fizzBuzz from "./fizzBuzz";

test('if returns fizz in array', () => {
    const response = fizzBuzz(3);
    expect(response).toEqual(['1','2','Fizz'])
});

test('if returns empty array', () => {
    const response = fizzBuzz(0);
    expect(response).toBeTruthy();
});

test('if number is array length', () => {
    const response = fizzBuzz(5);
    expect(response).toHaveLength(5);
});

test('if contain FizzBuzz', () => {
    const response = fizzBuzz(15);
    expect(response).toContain('FizzBuzz')
});

test('if returns string not number', () => {
    const response = fizzBuzz(-1);
    expect(response).toBeDefined();
});
