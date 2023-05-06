
// class BankAccount{
//     public readonly id:number;
//     public name:string;
//     private _balance:number;

//     constructor(id:number,name:string,balance:number){
//         this.id=id;
//         this.name=name;
//         this._balance=balance;
//     }
//     // Getter
//     get balance():number{
//       return  this._balance
//     }

//     // getBalance():number {
//     //     return this._balance
//     // }
//      // setter
//      set deposit(amount:number){
//        this._balance = this.balance + amount;
//      }

//     // addDeposit(amount:number){
//     //     this._balance=this._balance + amount;
//     // }

// }

// class StudentAccount extends BankAccount{

// }

// const myAccount=new BankAccount (444,"Bappy",200) // instance

// console.log(myAccount.balance);
// myAccount.deposit=500;
// console.log(myAccount.balance);