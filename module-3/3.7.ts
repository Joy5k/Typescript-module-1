{
    //static  এটার কাজ হচ্ছে মেমরির ডাটা গুলো ধরে রাখে। বা মেমোরির history গুলো ধরে রাখে।স্টাটিক ব্যবহার করলে this ব্যবহার করার যায় না।তখন সরাসরি ক্লাসের নাম ধরে কল করতে হয়।তাই নিচে স্টাটিক এবং সাধারন ভাবে বোঝানো হয়েছে।
    class Count{
       value: number = 0
        increment() {
           return  this.value=this.value+1
        }
        decrement() {
           return this.value = this.value - 1;
        }
    }
    const increment1 = new Count()
   
    // using static 
    class Count2{
        static value: number = 0
       static increment() {
            return (Count2.value=Count2.value+1)
         }
       static  decrement() {
            return (Count2.value = Count2.value - 1)
         }
     }
     const increment = new Count2()
     console.log(Count2.increment());
     const incremente = new Count2()
     console.log(Count2.increment());
     const increment3 = new Count2()
     console.log(Count2.increment());
 
 



}