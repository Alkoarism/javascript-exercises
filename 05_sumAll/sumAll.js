const sumAll = function(a, b) {
    if ( a < 0 || b < 0) {return "ERROR";}
    if ((typeof a !== "number") || (typeof b !== "number")) {return "ERROR";}
    
    let min = 0;
    if (a < b) {min = a;} else {min = b;}
    const difference = (a + b) - 2 * min;
    let sum = min;

    for (let i = difference; i > 0; i--) sum += min + i;

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
