const lengthOfLastWord = function(s:string):number {
    const sArray = s.trim().split(' ');
    return sArray[sArray.length-1].length
};

export default lengthOfLastWord;
