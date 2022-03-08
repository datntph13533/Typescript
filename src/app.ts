// function sum(a:number, b:number){
//     return a + b;
// }
// const tong = sum(4,5);
// console.log(tong);

// let number: number = 5;
// let number1: number = 2.8;
// let phrase: string = "Result is";
// let permit: boolean = true;

// const result = number1 +number;
// if(permit){
//     console.log(phrase + result);
// }else{
//     console.log('not show result');
    
// }

type TPerson ={
    id: number;
    name: string;
    age: number;
    status?: boolean;
}

const person: TPerson ={
    id: 1,
    name: "Dat",
    age: 20
}

const persons: TPerson[] = [
    {id: 1, name: "dat", age: 20},
    {id: 2, name: "kien", age: 20},
]

console.log(person.name);
