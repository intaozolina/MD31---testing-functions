import merge from "./mergeSortedArray";


test('if this is sorted array', ()=> {
    const response = merge([1,2,3,0,0,0],3,[2,3,4])
    expect(response).toEqual([1,2,2,3,3,4]);
});

test('if there is empty array', ()=> {
    const response = merge([1,2,3,],3,[])
    expect(response).toHaveLength(3);
});

test('if valid with empty arrays', ()=> {
    const response = merge([],0,[])
    expect(response).toBeDefined();
});

test('if is defined', ()=> {
    const response = merge([1,1,3,4],4,[2]).length
    expect(response).not.toBeNaN();
});

test('if matches result', ()=> {
    const response = merge([1,3,5],3,[2,4])
    expect(response).toBeTruthy();
});
