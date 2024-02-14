const palindromes = function (string) {
    const stringChanged = string.toLowerCase().replaceAll(/[\W\s]/g, "");

    let strMid = 0;
    let palindrome = true;
    
    if (stringChanged.length % 2 === 0){
        strMid = stringChanged.length / 2;
    } else{
        strMid = (stringChanged.length - 1) / 2;
    }
    for (let i = 0; i < strMid; i++){
        const rightLetter = stringChanged.length - (i + 1);
        const leftLetter = i;
        if (stringChanged[leftLetter] !== stringChanged[rightLetter]) {palindrome = false;}
    }

    return palindrome
};

// Do not edit below this line
module.exports = palindromes;
