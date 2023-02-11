//object destructuring

const obj = {
    name : "Han",
    age : 17,
    livein : "Mandalay"
};

//if u want to see value which can destructur from obj click ctrl + space

const {name,age,livein} = obj;
console.log(name,age,livein)

//array destructuring

const arr = ["Han",17,"Mandalay"];

//in this case it can't be show the destructur value cuz arry workflow is idnex number
//a b c represent the destructur value from arr which match of index number
const [a,b,c] = arr ;
console.log(a,b,c);


//nested destructuring
//which mean obj in obj

const mySelf = {
    hwa : "Han",
    born : 17,
    town : "Mandalay",
    myHoues:{
        type : "House",
        room : 4
    }
};

const {hwa,born,town,myHoues:{type,room}} = mySelf;
console.log(hwa,born,town,type,room);

