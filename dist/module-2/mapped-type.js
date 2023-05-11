"use strict";
// const arrayOfNumbers = [1,2,3]  //string array ['1','2','3']
// const arrayOfStrings =arrayOfNumbers.map((number)=> number.toString());
// // console.log(arrayOfNumbers);
// type Volume ={
//     height : number;
//     width: string;
//     depth: number;
// };
// type Area<T> ={
//     // [key in keyof Volume]: Volume[key];
//    readonly [key in keyof T] : T[key]
// }              
// const area1: Area<{height: number; width: string}> = {height:10, width:'10'}
// type AreaString={
//     height :string;
//     width:string;
// }
// type AreaReadOnly={
//     readonly  height: number;
//     readonly  width: number
// }
// const rectangularArea: AreaReadOnly = {
//      height : 10,
//     width :12
// }
// // rectangularArea.width =10 
// type A= AreaNumber['height']  //look up types
// type B = keyof AreaNumber;    // 'height' | 'width'
