{
    let userData: any;
    userData = "joy";
    userData = 1200;
    // (userData as string).
    const kgToGm = (value: string | number):string|number|undefined => {
        if (typeof value === "number") {
            return value * 1000
        }
        else if (typeof value === "string") { 
            let convertInNumber = parseFloat(value) * 1000;
            return convertInNumber;
        }
}
    console.log(kgToGm(100) as number);
    
//     interface CustomeError{
//     message: string;
// }
    type CustomeError = {
        message: string;
}
try {
    
} catch (error) {
    console.log((error as CustomeError).message);
}
}