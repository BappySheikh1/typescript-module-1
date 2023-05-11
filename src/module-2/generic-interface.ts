// // Generic Interface

// interface CrushInterface<T, U=null>{
//     name:string;
//     husband:T;
//     wife?:U
// }

// interface PersonInterface{
//     name:string,age:number
// }
// const crush4:CrushInterface<PersonInterface,PersonInterface>={
//     name:'Monica',
//     husband:{
//       name:"bappy",
//       age:22
//     },
//     wife:{
//         name:'barbaru',
//         age:40
//     }
// }

// const crush1:CrushInterface<boolean,string>={name:'monica barbaru',husband: true,wife:'chokina'}
// const crush2:CrushInterface<string>={name:'monica', husband:'bappy'}

// interface HusbandInterface{name:string,salary:number}
// const crush3:CrushInterface<HusbandInterface>={name:'monica',husband:{
//     name:'bappy',
//     salary:100
// }}

// type GenericTuple<X,Y>=[X,Y];

// const relation:GenericTuple<string,string>=["Bappy", "Monica"]

// // type RelationWithSalaryType= {name:string, salary:number,}

// interface RelationWithSalaryTypeInterface{
//      name:string
//      salary:number
// } 

// const relationWithSalary:GenericTuple<RelationWithSalaryTypeInterface,string>=[
//     {
//         name:"bappy",
//         salary:10000,
//     },
//     "monica barbaru"
// ]

// const relationWithSalary2:GenericTuple<RelationWithSalaryTypeInterface,string>=[
//     {
//         name:"bappy",
//         salary:10000
//     }
//     ,
//     "monica barbaru"
// ]

// type GenericArray<T>=Array<T>

// const rollNumbers:GenericArray<number>=[44,12,4];
// const rollNUmbers2:GenericArray<string>=["44","12",'4'];
// const rollNUmbers3:GenericArray<boolean>=[true,false];

// type NameRollType={name:string,roll:number}

// const userNameAndRollNumber:GenericArray<NameRollType>=[
//     {
//     name:'Mr X',
//     roll:1,
//     },
//     {
//         name:'Mr. Y',
//         roll:2
//     }
// ]

