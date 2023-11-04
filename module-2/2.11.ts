{
    type Person={
        name: string;
        age: number;
        email?: string;
        contact:string;
    }
    //এখানে Pick Person নামক টাইপ বা অবজেক্ট থেকে  name নামক properties এর  ভ্যালু টাকে pickType  এর টাইপ সেট করে নতুন একটা অবজেক্ট তৈরি করে দিবে।
    type pickType = Pick<Person, "name" | "age">//type pickType = { name: string;age:number}

    // Omit  এক কথায় এটা হচ্ছে Pick  এর উল্টো।  এখানে name and age এর ভ্য়ালু বাদি দিয়ে বাকি গুলোর ভ্যালু দিয়ে একটা টাইপ তৈরি করে দিচ্ছে
    type omitType = Omit<Person, "name" | "age">//type omitType = {email?: string | undefined;  contact: string; }

    //Required  এটা দারা বোঝানো হচ্ছে Person নামে যে টাইপ আছে তার সব গুলো property required যদিও বা ইমেইল দেয়া ছিল  অফশনাল
    type RequiredPerson = Required<Person>

    //Partial  এটা আবার Required  এর সম্পুর্ন বিপরিত। অর্থাত যত কিছূ আছে সব কিছু অফশনাল করে ফেলবে
    type partialType = Partial<Person>

// readonly  এটা সকল ডাটা গুলোকে অপরিবর্তনিয় করে দেয়। অর্থাত ডাটা গুলোর কোন মান পরিবর্তন করা যাবেনা
    
    type readonlyType =Readonly<Person>
    
    let setPersonValue:readonlyType = {
        name: "Joy",
        age: 23,
        email: "mmehedihasanjoyv@gmail.com",
        contact:"01900000"
    }
    // setPersonValue.name="Mehedi"// এখানে এরোর দিচ্ছে আর বলে দিচ্ছে ভ্যালূ পরিবর্তন করা যাবেনা।
    
    // Record নিচে আমরা Record<string, string> দিয়ে বলে দিয়েছি MyObj তে যত ভ্যালু আসবে ন সকল ভ্যালু এর properties value string হবে।Record<string, string> এর প্রথম string দিয়ে বোঝানো হচ্ছে properties গুলো কি ধরনের হবে এবং ২য় string দিয়ে বোঝানো হচ্ছে properties গুলোর টাইপ কি হবে।


    type MyObj = Record<string, string>
    const obj1: MyObj = {
        name: "Joy",
        email:"mmehedihasan@gmail.com",
    }
// নিচে একটা এমটি অবজেক্ট ডিক্লায়ার করা হয়েছে।আর যেহেতু আমরা জানিনা  অবজেক্টের টাইপ গুলো কি ধরেন হবে তাই unknown দেয়া হয়েছে। আর ১ম string দিয়ে properties টাইপ বোঝানো হয়েছে।সাধারনত প্রোপারটিস স্ট্রিং হয়ে থাকে। যেমন name,email,id,age কিন্তু এগুলোর টাইপ ভিন্ন হতে পারে।যেমন id  এর টাইপ নাম্বার হতে পারে।
    const EmptyObj:Record<string,unknown>={}

}
