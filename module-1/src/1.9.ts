{ 
    type Student={
        name: string;
        contactNo: string;
        address: string;
        gender: string;
    }


    const student:Student = {
        name: "joy",
        contactNo: "0192222222",
        address: "ptk",
        gender:"male"
}

    type Add = (num1: number, num2: number) => number;

    const add:Add=(num1, num2) => {
        return num1+num2;
    }

}