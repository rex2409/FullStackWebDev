class Car{
    constructor(name, price,isDiskBrake){
        this.name = name;
        this.price = price;
        this.isDiskBrake = isDiskBrake;
    }

    //Method
    startCar(){
        console.log(`Starting the car ${this.name}`);
    }

    //getter
    get getName(){
        return this.name;
    }

    //setter
    set setPrice(updatedPrice){
        this.price = updatedPrice;
    }

    static applyBrake(){//directly called by class name
        console.log('Applying the Brake')
    }
}

const c1 = new Car('BMW',100000,true);


class RacingCar extends Car{ //inheritance
    constructor(name,price,isDiskBrake,maxspeed,color){
        super(name,price,isDiskBrake);//call constructor of Car class
        this.maxspeed = maxspeed;
        this.color = color;
    }

    get maximumSpeed(){
        return this.maxspeed;
    }

    get getColor(){
        return this.color;
    }
}


const r1 = new RacingCar('Audi',10000000,true,300,'Black');

