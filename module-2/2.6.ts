{
    //constra
    // constraints   এটা ইন্ডিকেট বা ফোর্স করে যে নির্দিষ্ট ডাটা থাকতেই হবে।
    // যেমন আমরা Extands দিয়ে বলে দিয়েছি এই ফাংশনে কমপক্ষে {name:string,email:string}
    // এগুলো থাকতেই হবে চাইলে এর থেকে আরো বেশি ডাটা দিতে পারো কোন সমস্যা নেই। কিন্তু
    //উল্যেখ্য ডাটা অবশ্যই থাকতে হবে।
    
    
const addStudentInfo = <T extends {name:string,email:string}>(student: T) => {
    const Info="Next Level Web Developer"
    return {
        ...student,
        Info
    }
}
const student1 = addStudentInfo(
    {
        name: "Student",
        email: "a@gmail.com",
        
    }
)
const student2 = addStudentInfo({
    name: "Student",
    email: "b@gmail.com",
    hasWatch:true
})

}