"use strict";
// Arrow Function
const createArray = (param) => {
    return [param];
};
const createArray1 = (param1, param2) => {
    return [param1, param2];
};
function createArray2(param1, param2) {
    return [param1, param2];
}
const result1 = createArray1('Bangladesh', 'i love');
const result2 = createArray1(false, ['USA']);
const result3 = createArray1({ name: 'Bangladesh' }, false);
// Spread Operator
//  const newData={...myInfo, crush}
const addMeInMyCrushMind = (myInfo) => {
    const crush = 'monica barbaru';
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const myInfo = {
    name: 'Bappy',
    age: 22,
    salary: 10000,
};
const result5 = addMeInMyCrushMind(myInfo);
