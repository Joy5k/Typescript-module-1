{

    class Animal{
        name: string;
        species: string;
        
        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
                    console.log("Iam making sound");
                }
}

// উপরের ক্লাসটি নিচে সহজ ভাবে লেখা হয়েছে। কতো মজার ব্যপার !!!
    // class Animal{
    //     constructor(public name: string, public species: string) {
    //     }
    //     makeSound() {
    //         console.log("Iam making sound");
    //     }
    // }
    

    class Dog extends Animal { 
        constructor(name: string, species: string) {
            super(name, species);
        }
        makeBarking() {
            console.log("I am making barks");
        }
    }
    class Cat extends Animal { 
        constructor(name: string, species: string) {
            super(name, species);
        }
        makeMew() {
            console.log("I am making mew");
        }
    }
    
    const dog=new Dog("Dog","Ghew")
    const cat = new Cat("Cat", "mew")    
    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog
    }
    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat
    }
    const getAnima = (animal: Animal) => {
        // if (animal instanceof Dog) { // নিচে  আরেকটি পদ্বতি দেয়া হলো
        if(isDog(animal)){
            animal.makeBarking()
        }
        // else if (animal instanceof Cat) { //নিচে  আরেকটি পদ্বতি দেয়া হলো
        else if(isCat(animal)){
        animal.makeMew()
        }
        else {
            animal.makeSound()
        }
    }
}