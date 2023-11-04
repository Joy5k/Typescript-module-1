{
    //conditional type
    // কোনডিশনাল টাইপ হচ্ছে কোন একটা টাইপ  অন্য কোন টাইপের  উপর ভিত্তি করে তার নিজের
    // টাইপ পরিবর্তন বা  সেট করবে। যেমন নিচে আমরা দেখতেছি X নামক টাইপ a1 নামক টাইপের
    // উপর ভিত্তিকরে নিজের টাইপ সেট করতেছে। 

    //
 // জেনে রাখার ভালো keyof মানে টাইপের key গুলো নিয়ে একটা union literal  তৈরি করে।
 // union literal কি? টাইপসক্রিপটে | দিয়ে union literal বোঝায় এটার কাজ হচ্ছে একটা না হলে অন্য টা চেক করবে।
 //যেটা জাভাস্ক্রিপটে || এভাবে করতাম। উদাহরন;- union literal= "bike"|"car"|"ship"
 //নিচে ২৮ নাম্বার লাইনে ব্যবহার করা হয়েছে।
    
    
    
    type a1 = null;
    type a2 = undefined;

    type x= a1 extends null ? string : number;//যদি a1 এর টাইপ null হয় তাহলে x এর টাইপ হবে। string হবে
    // type x= a1 extends null ? true : false;//যদি a1 এর টাইপ null হয় তাহলে x এর টাইপ হবে। true হবে

    type VehicleType = {
        bike: string;
        car: string;
        ship: string;
    }
    type CheckVehicle<T> = T extends keyof VehicleType ? true : false
    
    type hasBike = CheckVehicle<"bike">

   

}