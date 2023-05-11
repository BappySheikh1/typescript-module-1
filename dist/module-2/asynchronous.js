"use strict";
// // Mocking
// // json place holder
// interface ITodo{
//     userId: number;
//     id:number;
//     title:string;
//     competed: boolean;
// }
// const getTodo =async ():Promise<ITodo> =>{
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   return await response.json()
// }
// const getTodoData=async(): Promise<void>=>{
//     const result =await getTodo()
// }
// const makePromise=():Promise<string>=>{
//   return new Promise<string>((resolve, reject)=>{
//       const data: string = 'Data is fetched'
//       if(data){
//         resolve(data)
//       }else{
//         reject('Failed to feted data')
//       }
//    })
// }
// //Promise string
// const getPromiseData =async (): Promise<string>=>{
//     const data =await makePromise()
//     return data
// }
// //promise<string> promise<number> promise<boolean>
// const makePromiseBoolean=():Promise<boolean>=>{
//     return new Promise<boolean>((resolve, reject)=>{
//         const data: boolean = false
//         if(data){
//           resolve(data)
//         }else{
//           reject('Failed to feted data')
//         }
//      })
//   }
//   //Promise boolean
// const getPromiseDataBoolean =async (): Promise<boolean>=>{
//     const data =await makePromiseBoolean()
//     return data
// }
// const makePromiseObject=():Promise<object>=>{
//     return new Promise<object>((resolve, reject)=>{
//         const data: object = {name:'bappy',age:200}
//         if(data){
//           resolve(data)
//         }else{
//           reject('Failed to feted data')
//         }
//      })
//   }
//   //Promise object
// const getPromiseDataObject =async (): Promise<object>=>{
//     const data =await makePromiseObject()
//     return data
// }
