//normal string

const strin =   "Lorem Ipsum is simply dummy text of the printing " + 
                "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"


//template litreal string

const template =   `Lorem Ipsum is simply dummy text of the printing 
                    and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`


//js variale usage in normal string 

function hello(name){
    return "Hello " + name;
};

console.log(hello("Han"));

//js variale usage in template string 

const greeting = (name) => `Hello ${name}`;

console.log(greeting("Han"));
