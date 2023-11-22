const leapYears = function(y) {
    return ((!Number.isInteger(y/100) && Number.isInteger(y/4)) || Number.isInteger(y/400))
};

// Do not edit below this line
module.exports = leapYears;
