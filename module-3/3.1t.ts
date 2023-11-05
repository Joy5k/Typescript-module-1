{

    //public properties এটা আপনাকে initialized আর this.name  এর কাজ টাইপস্ক্রিপ করে দেয়
    //

    class Animals {
    //  public   name: string;
    //  public  species: string;
    //  public  sound: string;
        constructor (public name: string,public species: string,public sound: string) {
            // this.name = name;
            // this.sound = sound;
            // this.species = species;
        }


        // নোট:  এ্যারো ফাংশন this সাপোর্ট করেনা। এজন্য নরমাল ফাংশন ব্যবহার করতে হয়!!
        makeSound() {
            console.log(`The Animal Name is ${this.name} says ${this.sound}`)
        }
}
    const dog = new Animals("German Shepard", "dog", "Ghew Ghew")
   dog.makeSound()
}