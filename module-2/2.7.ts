{
    // উল্লেখ্যিত নিছে <X, Y extends keyof X> দ্বারা এটা বোঝাচ্ছে যে। getPropertyValue ফাংশনের
    //প্য়ারামিটার হিসেবে  X নামক যে  অবজেক্ট পাঠানো হবে তার মধ্যে বিদ্ধমান যেকোন property
    // এর মান দেখতে পারবা। যেমন   getPropertyValue(bike,'price') price  নামক 
    //property এর মান জানতে চেয়েছি যেহেতু এটা X  নামক অবজেক্টের মধ্য়ে বিদ্ধমান (  price:120000)
    // const bike = {
    //     model: "Yamaha",
    //     price:120000
    // }
//Y extends keyof X এটা দারা বোঝায় X নামক যে অবজেক্টি আসুক না কেন ২য় প্যারামিটার হিসেবে
// ঐ অবজেক্টে বিদ্ধমান কোন  প্রোপার্টির key দিতে হবে। এটা Typescript  এর একটা মজা পার্ট

    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }
    type Owner = "bike" | "car" | "ship";
    type Owner2 = keyof Vehicle;  
    
    const getPropertyValue =<X, Y extends keyof X> (obj: X, key: Y) => {
        return obj[key];
    }
    const bike = {
        model: "Yamaha",
        price:120000
    }
    getPropertyValue(bike,'price')

}