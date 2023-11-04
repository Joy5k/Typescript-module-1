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
    var createArray = function (param) {
        return [param];
    };
    var createGenericWithDynamic = function (params) {
        return [params];
    };
    var createGenericWithDynamicTuple = function (params1, param2) {
        return [params1, param2];
    };
    var createArrayToObject = createGenericWithDynamic({ id: 12, name: "Joy" });
    var createTuple = createGenericWithDynamicTuple("mehedi", 1200);
    var createTuple2 = createGenericWithDynamicTuple("mehedi", { name: "joy" });
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
