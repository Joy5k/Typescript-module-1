{
    // interface
    type user1 = {
        name: string;
        age:number
    }
    interface user2{
        name: string;
        age:number
    }

    type User3 = user1 & { role: string }
    interface User4 extends user2 { role: string }
    
    const user:User3= {
        name: "John",
        age: 10,
        role:"Developer"
    }

    type Roll = number[];
    
    interface Roll1 {
        [index: number]: number
    }
    const roll: Roll1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
 type Add = (num1: number, num2: number) => number
    interface Add2 {
        (num1: number, num2: number):number
    }
    const add:Add=(num1: number, num2: number) => num1+num2

}