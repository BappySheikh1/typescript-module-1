"use strict";
// const a: newType ='age'
// const b: newTypeUsingKeyOf ='address'
function getProperty(obj, key) {
    obj[key];
}
const property = getProperty({ name: 'Mr.X', age: 100 }, 'age');
// ({name: 'Mr.x', age:100}, 'age') //100
// const a={
//     name: 'Mr.x', age:100
// }
// a['name']
