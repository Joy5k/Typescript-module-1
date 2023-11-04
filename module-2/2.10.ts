{
    // map types
    // ম্যাপ টাইপসের মাধ্যমে চাইলে আমরা এ্যারের ভ্য়ালু গুলোর টাইপ পরিবর্তন করতে পারি।যেমন 
    //নিচে আমরা arrOfNumber এর নাম্বার ভ্যালু থেকে প্রতিটা ভ্য়ালা string  করতেছে । 
    // এখন যদি   এ্য়ারের  এক একটা ভ্যালুর টাইপ ভিন্ন ভিন্ন হবে  তখন ২২ নাম্বার ম্যাপ ব্যবহার করতে পারো
    const arrOfNumber: number[] = [1, 2, 3, 4, 5]
    const arrOfString = arrOfNumber.map(number => number.toString())
    console.log(arrOfString); //[ '1', '2', '3', '4', '5' ]

    type AreaType = {
        height: number;
        width: number;
    }
    // lookup type  আমরা জানি কোন   অজেক্ট থেকে কি এর মাধ্যমে  কি এর ভেলু পেতে পারি।
    // নিচে শুদু সেটাই করছে।AreaType["height"]  এর ভ্যালু number সো Height  এর টাইপ ও নাম্বারি হবে

    type Height=AreaType["height"]
    //নিচে আমরা সাধারন ভাবে একটা এরের সকল টাউপকে পরিবর্তন করতে পারি। যেমন AreaType
    // এর ভ্যালু গুলোর মান পরিবর্তন করে number থেকে  string করা হয়েছে।

    // type area = {
    //     [key in keyof AreaType]:string
    // }

    //নিচে AreaType  এর ভ্যালু গুলোন টাইপ  ডায়নামিক ভাবে সেট করা হইছে।ব্যপারটা খুবই সহজ এবং মজার।
    // একটু লক্ষ করলে দেখা যায় area<T> ডায়নামিক ভাবে টাইপ নিচ্ছে অর্থাত তাকে যেটা পাঠানো হবে সেটাই সে ব্যাবহার করার চেষ্টা করে। এবং ৩০ নাম্বার লাইন বলে দিচ্ছে কি রকম টাইপ সেট করবে। এবার আশি ২৮ নাম্বার লাইনে।এখানে key দিয়ে অবজেক্টের key গুলো নিচ্ছে। সহজ ভাবে বলতে গেলে key=valule and T=property যেমন ৩০ লাইনে বলা হয়েছে heigh হবে string তাই ম্যাপ টা এভাবে কাজ করছে।
    // type area<{ height: string }> = {
    // [height (এখনো number) in keyof height]: T[height]= বা string
    // }
    // key দিয়ে AreaType গুলোর property গুলো ম্যাপ করে 
    
type area<T> = {
    [key in keyof T]: T[key]
}
    const AreaDynamic: area<{ height: string, width: number }> = {
        height: "100",
        width:20
 }
}