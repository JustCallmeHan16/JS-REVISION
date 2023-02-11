//regular condition statement

const x = 3;

if( x === 3){
    console.log("This is 3");
}
else if( x === 2){
    console.log("This is 2");
}
else{
    console.log("This isn't 3 and 2");
}

//ternary operator

x === 3 ? console.log("This is 3"): console.log("This isn't 3");

//ternary operator but only return true

x === 3 && console.log("This is 3");
