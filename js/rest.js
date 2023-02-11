//rest parameter can keep the value which over the limit count of parameter

const num = (x,y,...num) => {
    console.log(x,y,num);
};

console.log(2,4,1,23,43);

//default parameter when the user is not assign the value the default parameter will be replace

const sum = (a=3,b=5) =>  a+b;

console.log(sum());

//spread + destruct

const a = [1,2,3,4,5,6,7,8];

const [one,two,...arry] = a;

console.log(one,two,arry);