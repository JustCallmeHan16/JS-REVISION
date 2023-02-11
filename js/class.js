//class

class carBuild{
    constructor(name,model,engine){
        this.name = name;
        this.model = model;
        this.engine = engine;
    }

    startCar(){
        return `${this.name} can start engine...`
    }
}

const toyota = new carBuild("toyota","2017","350 CC");

console.log(toyota);
console.log(toyota.startCar());

//inher

class sportCar extends carBuild{
    constructor(name,model,engine,region){
        super(name,model,engine);
        this.region = region;
    }
    car = "sport car";
}

const newCar = new sportCar("Bugatti",2020,"1000 CC","Germany");

console.log(newCar);