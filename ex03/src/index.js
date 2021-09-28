function printManyTimes(str) {
    'use strict';

    // Only change code below this line

    let SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i += 2) {
        console.log(SENTENCE);
        
    }

 
return SENTENCE;
// Only change above this line

}
printManyTimes("Arena");
module.exports = printManyTimes;