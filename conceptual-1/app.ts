let first: number = 0b11;
let arr: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]




type User = {
    id: number;
    name: string;
}
let user:Array<User> = [
    {
        id: 1,
        name: "Joy"
    },
    {
        id: 2,
        name:"Mehedi"
    },
    {
        id: 3,
        name:'Hasan'
    }
]
// important!!!  নিচে আমরা K extends keyof T  ব্যবহার করেছি।এটা দারা কি বোঝায় সেটা ভালো করে বুঝতে হলে আগে আমাদের বুঝতে হবে ফাংশনের কাজ কি করতে? ফাংশনটি একটা এ্যারে  অফ অবজেক্ট থেকে কোন  একটা প্রোপার্টির ভ্যালু চেক করার বা ভ্যলু বের করতেছে।এখন আসি K extends keyof T  এর কাজটা?
//  T দারা এ্যরেকে জেনেরিক ভাবে নিচ্ছে আর K দারা এ্যরেকে  অফ অবজেক্টের প্রোপার্টি নিচ্ছে যে প্রোপার্টির ভ্যালু আমরা পেতে চাই।এখন   এমন কোন প্রোপারটির মান আমরা চাইতে পারিনা যে প্রোপার্টি  আসলে ঐ  এ্যরেতেই নাই।যেমন এ্যরতে আমরা  আইডি আর নাম দেয়া আছে এখন আইডি আর নাম ছারা আমরা তো describstion বা অন্য কিছু আ চাইতে পারিনা। তাই K extends keyof T দিয়ে বলতেছে। টি নামক এ্যরের মধ্যে কে নামক প্রোপার্টি আছে কিনা।বা  টি নামক এ্যরের মধ্যে কে নামক প্রোপার্টি খুজে দেখ,
function extractUser<T,K extends keyof T>(array:T[],key:K) :T[key][]{
    return array.map(obj=>obj[key])
}
console.log(extractUser(user,"name"));
// extractUser(user,)