const fibonacci = function(target) {
    if (target < 0) { return "OOPS"}

    let previous = 0;
    let nthMember = 1;
    for (let i = 1; i < target; i++){
        const temp = nthMember;
        nthMember += previous;
        previous = temp;
    }

    return nthMember;
};

// Do not edit below this line
module.exports = fibonacci;
