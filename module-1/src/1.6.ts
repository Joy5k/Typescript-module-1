{

    function add(num1:number, num2:number):number {
        // console.log(num1 + num2);
        return num1 + num2;
    }
    add(1, 2)
    const addArrow = (num1: number, num2: number): number => num1 + num2;
    
    const poorUser = {
        name: 'Joy',
        balance: 10,
        addBalance(newBalance: number): string{
            return `My new Balance is:${this.balance + newBalance}`;
        }
    }
    const arr: number[] = [1, 5, 6, 7, 8, 9]
    let newArr: number[] = arr.map((element: number) => element * element)
    // console.log(newArr);

}