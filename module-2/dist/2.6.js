"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    //constra
    // constraints   এটা ইন্ডিকেট বা ফোর্স করে যে নির্দিষ্ট ডাটা থাকতেই হবে।
    // যেমন আমরা Extands দিয়ে বলে দিয়েছি এই ফাংশনে কমপক্ষে {name:string,email:string}
    // এগুলো থাকতেই হবে চাইলে এর থেকে আরো বেশি ডাটা দিতে পারো কোন সমস্যা নেই। কিন্তু
    //উল্যেখ্য ডাটা অবশ্যই থাকতে হবে।
    var addStudentInfo = function (student) {
        var Info = "Next Level Web Developer";
        return __assign(__assign({}, student), { Info: Info });
    };
    var student1 = addStudentInfo({
        name: "Student",
        email: "a@gmail.com",
    });
    var student2 = addStudentInfo({
        name: "Student",
        email: "b@gmail.com",
        hasWatch: true
    });
}
