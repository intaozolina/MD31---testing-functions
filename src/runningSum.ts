
const runningSum = function(nums) {

    let numb = nums[0];
    let result = [numb];
    for (let i=1; i<=nums.length-1; i++) {
        numb = numb + nums[i];
        result.push(numb);
    }
    return result
};

export default runningSum;
