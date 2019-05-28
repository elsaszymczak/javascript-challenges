const stackMachineCalculator = (instructions) => {
    // analyse the instructions 
    // push(), pop(), shift(), unshift(), splice(), reduce
    // unshift => adds in the beginning of array and returns length 
    // shift => removes first item of the array
    // splice = > The splice() method adds/removes items to/from an array, and returns the removed item(s).
    // pop => removes last element of the array 

    // get instructions and transform string in array 
    arrayInstructions = instructions.split(' ')
    const finalArray = [];
    arrayInstructions.forEach((instruction, index) => {
        // transform everything into numbers, and add them all 
        if (instruction === 'DUP') {
            finalArray.push(parseInt(finalArray[finalArray.length - 1]));
        } else if (instruction === 'ADD' || instruction === '+') {
            const sum = finalArray.splice(-2).reduce((acc, value) => acc + value)
            finalArray.push(sum);
        } else if (instruction === 'SUB' || instruction === '-') {
            const sub = finalArray.splice(-2).sort((a, b) => b - a).reduce((acc, value) => acc - value)
            finalArray.push(sub);
        } else if (instruction === 'POP') {
            finalArray.pop();
        } else {
            const integer = parseInt(instruction)
            finalArray.push(integer)
        }
    });
    return finalArray.pop()
}
module.exports = stackMachineCalculator
