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

//type alias
// benefit of type alias is that you can reuse it polymorphically
type Employee = {
    readonly id: number
    name?: string
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 1,
    name: "",
    retire: (date: Date) => console.log(date)
};
employee.name = "Pak";
//readonly to avoid changing id
// ? makes name optional


// union type
// using this you can have multiple types for a variable which is not possible in other languages
function kgToLbs(weight: number | string ): number {
    //Narrowing to narrow down union type
    if (typeof weight === "number")
    return weight * 2.2;
    else
    return parseFloat(weight) * 2.2;
}

kgToLbs(10);
kgToLbs("10kg");


// type intersection
// combining multiple types
type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
};

//literaly types
// literal (exact speciffic value)
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';

//nullable types
// very strict of null and undefined values
function greet(name: string | null | undefined) {
    if (name)
    console.log(`Hello ${name.toUpperCase()}`);
    else
    console.log("Hola");
}

greet(undefined);

// optional chaining
type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// if(customer !== null && customer !== undefined)
// optional property access operator does same thing as above
console.log(customer?.birthday?.getFullYear());

// optional element access operator
// if(customer !== null && customer !== undefined)
// customers?.[0]

// if customer is null, it will return undefined
//optional call
let log: any = null;
log?.('a')