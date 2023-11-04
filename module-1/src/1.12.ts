{

    const getSpeed = (value: unknown|null) => {
        if (typeof value === 'number') {
            console.log("yes it is a number");
            const speed = (value * 1000) / 3600;
            console.log("the speed is " + speed);
        }
        else if (typeof value === 'string') { 
            const [speed, unit] = value.split(" ")
            const needSpeed =(parseFloat(speed)*1000) / 3600;
            console.log(needSpeed);
        }
        else {
            console.log('wrong input value');
        }

}
    getSpeed("200 kmh")

    const throwError = (msg:string) => {
        throw new Error(msg);
        
}
    throwError("this is error message")

}