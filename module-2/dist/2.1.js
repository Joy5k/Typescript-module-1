"use strict";
{
    var userData = void 0;
    userData = "joy";
    userData = 1200;
    // (userData as string).
    var kgToGm = function (value) {
        if (typeof value === "number") {
            return value * 1000;
        }
        else if (typeof value === "string") {
            var convertInNumber = parseFloat(value) * 1000;
            return convertInNumber;
        }
    };
    console.log(kgToGm(100));
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
