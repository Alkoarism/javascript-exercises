const reverseString = function(text) {
    let reversed = "";
    const textSize = text.length;
    for (let i = textSize - 1; i >= 0; i--){
        reversed += text[i];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
