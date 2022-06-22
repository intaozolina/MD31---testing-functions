import lengthOfLastWord from "./wordLenght";

test('if string contain 1 word', ()=> {
    const response = lengthOfLastWord('Word')
    expect(response).toBe(4);
});

test('if string contain empty string', ()=> {
    const response = lengthOfLastWord('')
    expect(response).toBeFalsy();
});

test('if string last word have length', ()=> {
    const response = lengthOfLastWord('Will not have holidays')
    expect(response).not.toBeNaN();
});

test('if string contain additional whitespaces', ()=> {
    const response = lengthOfLastWord('Sleeping not enough')
    expect(response).toEqual(6);
});

test('if string contain punctuation', ()=> {
    const response = lengthOfLastWord('Hey, hope to get a job !')
    expect(response).toBeTruthy();
});
