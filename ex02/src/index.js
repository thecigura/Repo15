function checkVariableScope() {
    'use strict';

    // Only change code below this line
    let i = 'function variable';
    // Only change above this line

    if (true) {
    // Only change code below this line
        let i = 'block variable';
    // Only change code above this line

        console.log('Scop i is: ', i);
    }
    console.log('Scop i is: ', i);
    return i;
}
checkVariableScope();
module.exports = checkVariableScope;