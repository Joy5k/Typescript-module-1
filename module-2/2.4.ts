{

    interface Developer<T,X=null> {
        name: string,
        computer: {
            brand: string;
            model: string;
            released: string;
        },
        smartWatch: T,
        bike?:X
    }
    interface poorSmartWatch{
        
            brand: string;
            model: string;
        
    }
    const poorDeveloper: Developer<poorSmartWatch> = {
        name: "Mehedi",
     computer:   {
        brand: "Apple",
         model: "12ee",
        released:"2022"
        }
        ,
        smartWatch: {
            brand: "Apple",
            model: "13GT",
        },
      
    }
    interface riceSmartWatch{
    
            brand: string;
            model: string;
            heartTrucker: boolean;
            sleepTrucker: boolean
        
    }
    interface YamahaBike{
        model: string;
        engine: string;
    }
    const richDeveloper: Developer<riceSmartWatch,YamahaBike> = {
        name: "Hasan",
     computer:   {
        brand: "Apple",
         model: "12ee",
        released:"2022"
        }
        ,
        smartWatch: {
            brand: "Apple",
            model: "13GT",
            heartTrucker: true,
            sleepTrucker: true,
        },
        bike:{
            model: "Yamaha",
            engine:"120cc"
        }
    }
}