type PersonType={
    name: string;
    age: number;
    address: string;
};

type newType = 'name' | 'age' | 'address' //manually korchi

type newTypeUsingKeyOf = keyof PersonType

// const a: newType ='age'
// const b: newTypeUsingKeyOf ='address'


function getProperty<X,Y extends keyof X>(obj:X,key:Y){
  obj[key]
}

const property = getProperty({name:'Mr.X',age:100},'age')
 
// ({name: 'Mr.x', age:100}, 'age') //100
// const a={
//     name: 'Mr.x', age:100
// }
// a['name']