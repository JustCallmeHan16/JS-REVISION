//regular function

function hello(){
    return "This is hello world";
};
console.log(hello());

//arrow function

const world = () => {
    return "This is World";
};
console.log(world());

//arrow function with without carli brackets 

const me = () => "Itz me han";
console.log(me());

//if there is no parameter u can use underscole insted of parathesis

const noParaMeter = _ => "This arrow function with no parameter";
console.log(noParaMeter())

//arry in arrow function

const arrInArrow = _ => [1,2,3,4];
console.log(arrInArrow());

//object in arrow function with regular syntax

const objInArrow = _ => {
    return {
        name : "Han",
        age : 17,
    };
};
console.log(objInArrow());

//object in arrow function with arrow syntax
//when u create like this don't forget to cover the object with parathesis !!!

const objectInArrow = _ => ({name : "Han",age : 17});
console.log(objectInArrow());

//this key word in normal function
//this keyword in the greeting function represent the current object which name is obj

const obj = {
    name : "Han",
    age : 17,
    livein : "Mandalay",
    greeting () {
        return this;
    }
};
console.log(obj.greeting());

//this key word in arrow function
//this keyword in the arrow function represent the window whcih not the current object !!!

const objWithArrow = {
    name : "Han",
    age : 17,
    livein : "Mandalay",
   arrow: () => {
        return this;
   }
};
console.log(objWithArrow.arrow());

//function constructor

const z = new Function("x","y","return x + y");
console.log(z(7,8));

//function constructor with bind which is already defined the deafault parameter value
//bind is the prototype method of object

const sum = new Function("a","b","return a + b").bind(null,3,5)
console.log(sum());