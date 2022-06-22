
const merge = function(nums1: number[], m:number, nums2:number[]) {
    nums1.splice(m,nums1.length-m)
    nums2.forEach((num) => nums1.push(num))
    nums1.sort((a,b)=>a-b)
    return nums1
};

export default merge;
