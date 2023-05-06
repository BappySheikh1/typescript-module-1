// // a type is dependent on another type

// type a1=string;
// type a3=undefined;
// type a4=number;
// type a2=a1 extends string ? string : null;

// // Nested conditional type
// type d = a1 extends null ? null : a3 extends number ? number : a4 extends null ? null : never;


// type Sheikh ={
//     wife1: string;
//     wife2: string;
// }

// type A = keyof Sheikh; // 'wife1 | 'wife2
//                            // 'wife1' extends 'wife1' | "wife2"
// type CheckProperty<T, K > = K extends keyof Sheikh ? true : false

// type CheckWife = CheckProperty<Sheikh, 'wife3'>


// // Matha kharap  example
// type Bandhubi = 'Monica' | 'Rechel' | 'Pheobe'

// type RemoveBandhubi<T, K> = T extends K ? never : T ;

// type CurrentBandhubi = RemoveBandhubi<Bandhubi,'Monica'>