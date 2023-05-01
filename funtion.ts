// normal function
// Default Parameter
function add(num1:number=10, num2: number){
    return num1 + num2;
}

// add(20,30)

// spread opearator
const myFriends =['chandler', 'balala', "hatun"]
const newFriends =['monica', 'tom', 'bob']

myFriends.push(...newFriends)
console.log(myFriends);


// rest parameter

const greetFriends=(...friends:string[]):void=>friends.forEach(friend=>{
    console.log(`Hi ${friend}`);
});

    greetFriends('kashem','hasem','mashem', "Bangla vai")





// Arrow Function
const addArrow = (num1:number, num2:number): number => num1 + num2;

// callback function
const arr =[1, 4, 5]
const newArray =arr.map((elem:number)=>elem*elem)

const person:{
    name: string,
    balance: number,
    addBalance(money:number):void;
} ={
    name:'Bappy',
    balance: 10,
    addBalance(money:number){
        return `My New Balance is ${this.balance + money}`
    }
}