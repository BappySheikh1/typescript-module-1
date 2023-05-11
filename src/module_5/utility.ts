// Pick

interface Person{
    name: string;
    email:string;
    contractNo:number;
}

type Contact = Pick<Person, 'email'| 'contractNo'>;
type ContractNo = Pick<Person ,"contractNo">

// Omit

type Name1 = Omit<Person, "email"|'contractNo'>

// Partial 
//  to make all the properties be optional type
type Optional = Partial<Person>
type RequiredProps = Required<Person> 

const person:Readonly<Person>={
   name: 'bappy',
   email:'sheikhbappy91@gmail.com',
   contractNo:3232
}