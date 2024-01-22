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



