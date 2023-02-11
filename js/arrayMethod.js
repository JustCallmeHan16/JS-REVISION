//array methods

//normal looping usage
const data = [1,2,3,4,5,6,7,8];

for( let i = 0 ; i < data.length ; i++){
    console.log(i);
}

//map loop method
//map can mutate orginal array and return new array

const map = data.map( (i,index,arr) => {
    return i+1;
});

console.log(map);

//foreach 
//foreach cannot return new array it can only mutate the orginal arry
const forEach = data.forEach( (i,index,arr) => {
    data[index] = i + 1;
});

console.log(data)

//filter

const filter = map.filter((i,index,arr) => {
    return i>4;
});

console.log(filter);

//find

const find = map.find((i,index,arr) => {
    return i>4;
})

console.log(find);

//reduce

const reduce = map.reduce( (pv,cv) => {
    return pv+cv;
},0);

console.log(reduce);

//some and every method can check arry and return true or false

//some

const some = map.some( (i,index,arr) => {
    return i > 5;
});

console.log(some);

//every 

const every = map.every( (i,index,arr) => {
    return i > 5;
});

console.log(every);

//includes

if( map.includes(4) ){
    console.log("Min Ga Lar Par");
}