{
    //abstraction হলো নিচে কিছুটা interface মতো নিচে আমরা Interface দিয়ে ক্লাসকে প্রথমে বোঝানো হয়েছে যে ক্লাসের টাইপ কি রকম হবে।এই কাজ abstraction দিয়ে খুব সহজেই করা হয়েছে।
    // নোট:-abstraction ফাংশন বা প্রোপার্টির টাইপ বোঝা যায়।যে এটা কি কাজ করবে। কিন্তু এটা কাজ করানো হয়  চাইল্ড বা অন্য কোন জায়গায়।যেমন আমরা নিচে দেখতে পাচ্ছি abstraction দিয়ে শূদু মাত্র ফাংশনের টাইপ বলা হয়েছে(void) কিন্তু এটার কাজ করা হয়েছে child class  এ। 
    // ক্লাসে implements ব্যবহার করা হয়েছে কারন ক্লাস কোন টাইপ কে car:Vehicle   এভাবে বুঝতে পারেনা। তাকে ইম্প্লিমেন্‌ট নামক মেথট ব্যবহার করে বোঝাতে হয়।

    interface Vehicle{
        startEngine(): void
        stopEngine(): void
        move(): void
    } 
    class Car implements Vehicle { 
        startEngine(): void {
            console.log("Iam starting");
        }
        stopEngine(): void {
            console.log("Iam stopping");
        
        }
        move(): void {
            console.log("Iam moving");
        }
        test() {
            console.log("I am testing and checking the able or not added another function");
        }
    }
    const tyota = new Car()
    tyota.move()
    
   abstract class Car2 {
       abstract startEngine(): void
       abstract stopEngine(): void
       abstract move(): void
    }

    class TyotaCar extends Car2 {
        startEngine(): void {
            console.log('I am starting function from abstract')
        }
        stopEngine(): void {
            console.log("Iam stopping function from abstract");
        }
        move(): void {
            console.log("I am moving function from abstract");
        }
    }
    const checkTheToyota = new TyotaCar()
    checkTheToyota.move()





}