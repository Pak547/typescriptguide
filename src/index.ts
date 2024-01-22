let sales: number = 123_456_789;
let course: string = "TypeScript";
let is_published: boolean = true;
let level;
// if variable is unnamed, it is of type any
// avoid using any type as much as possible, defeats purpose of typescript
// function render (document: any)

let numbers: number[] = [1, 2, 3];
// empty array must have type
// even though array is of type number, it can be assigned to any other type

let user: [number, string] = [1, "Pak"];
// tuple, fixed length array
// user.push(1);
// restrict tuple to 2 elements
// using push method allows you to store more than 2 elements in tuple but is weird in typescript

// const small = 1;
// const medium = 2;
// const large = 3;
// Pascal case for enum
const enum Size { Small = 0, Medium, Large = 2 };
// enum Size { Small = 'small', Medium = 'medium', Large = 'large' };
let mySize = Size.Medium;
console.log(mySize);

// parameter type and return type
// annotate function with return type
function calculateTax(income: number, taxYear = 2022): number {
    if (income < 10_000)
        return income * 1.2;
    return income * 1.3; // return type is inferred
}
// ? makes optional parameter
// enable nounusedparameters in tsconfig.json
// enable noUnusedLocals in tsconfig.json
// enable noImplicitReturns in tsconfig.json
calculateTax(10_000, 2022);


// object in type
let employee: {
    readonly id: number
    name?: string
    retire: (date: Date) => void
} = {
    id: 1,
    name: "",
    retire: (date: Date) => console.log(date)
};
employee.name = "Pak";
//readonly to avoid changing id
// ? makes name optional


