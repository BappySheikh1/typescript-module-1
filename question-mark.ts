// Ternary operator

const age:number =22

// if(age >=18){
//     console.log('Yes');
// }else{
//     console.log('No');
// }

const isAdult= age >= 18 ? 'Yes' : 'No';
console.log(isAdult);

// Nullish coalescing operator
// Null and Undefine

const  isAuthenticatedUser = null
const userName = isAuthenticatedUser ?? "Guest"

console.log(userName);

type Manush={
    name:string,
    age:number,
    address:{
        city:'NO City',
        road:'No Road',
        home?: ""
    }
}

const manush1:Manush={
    name : 'Manush',
    age: 100,
    address:{
        city:'NO City',
        road:"No Road"
    }
}

const home =manush1?.address?.home ?? "No Home" //default 'No Home'

console.log(home);