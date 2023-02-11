//spread operator this can make copy any array or object into another arry or object

//copy object to object 

const mySelf = {
    name : "Han",
    age : 17,
    livein : "Mandalay"
}

const newSelf = {
    ...mySelf
}

console.log(mySelf);

//copy array to array

const a = [1,2,3,4];
const b = [5,6,7,8]
const c = [...a,...b];

console.log(c);
