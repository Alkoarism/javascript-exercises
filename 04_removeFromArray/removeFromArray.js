const removeFromArray = function(array, ...undesired) {
    const undesiredItems = Array.from(undesired); //Removes repeated items in undesired
    let result = [];

    const pushElementConditionaly = (element) => {
        if(!undesiredItems.includes(element)) {result.push(element);}
    }

    array.map(pushElementConditionaly);
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;