{
//Some code is copied from module 3.5.ts file , So don't worry


    //access modifiers
    class BankAccount{
        public readonly id: number;
        public name: string;
        //  private _balance: number;// private থেকে protected করার কারন :- প্রাইভেট করলে প্রোটার্টির ভ্যালু চাইল্ড ক্লাসে পাওয়া যায়না।কিন্তু প্রোটেক্টেট করলে এটা চাইল্ড ক্লাসে ও পাওয়া যায়। নিচে চাইল্ড ক্লাস হলো  StudentAccount
         protected _balance: number;
        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        //যেহেতু ব্যলেন্স প্রাইভেট করা তাই এই ক্লাসের মধ্যে ব্যালেন্সের ভ্যালু পরিবর্তন করতেছি।
        // নোট: যেহেতু ব্যলেন্স প্রাইভেট করা তাই ব্য়লেন্সকে এই ক্লাের বাইরে থেকে মোডিফাই করা সম্ভব না

    //   public  addDeposit = (amount: number)=>{
    //         this._balance=this._balance+amount;
    //     }

          //----নিচে set method ব্যবহার করতেছি। এটা কাজ করে ফাংশনের মতো কিন্তু ব্যবহার করা যায় প্রোপার্টির মতো। প্রোপার্টি গুলো যেমন:-name,id,balance। ঠিক এদের মতই ব্যবহার করা যায়। কিন্ত কাজ করে ফাংশনের মতো। নিচে এটার ব্যবহার করা হয়েছে।   
    set deposit(amount:number){ 
         this._balance = this._balance+amount;
        }
//       public  getBalance() {
//     return this._balance;
        // }

  //----নিচে get method ব্যবহার করতেছি। এটা কাজ করে ফাংশনের মতো কিন্তু ব্যবহার করা যায় প্রোপার্টির মতো। প্রোপার্টি গুলো যেমন:-name,id,balance। ঠিক এদের মতই ব্যবহার করা যায়। কিন্ত কাজ করে ফাংশনের মতো। নিচে এটার ব্যবহার করা হয়েছে।      
        get balance() {
           return this._balance
        }

    }

    class StudentAccoung extends BankAccount{
        test() {
         this._balance=this._balance
     }
}



    const checkBalance = new BankAccount(12, 'Joy', 20000)
    
    //adding balance below
    // checkBalance.addDeposit(0)

    //গেট মেথট ব্যবহার করে ব্যলেন্স চেক করা হচ্ছে।
    checkBalance.deposit=123

    //গেট মেথট ব্যবহার করে ব্যলেন্স চেক করা হচ্ছে।
    console.log(checkBalance.balance);

    // সাধারন ভাবে ব্যলেন্স চেক করা হচ্ছে।
    // console.log(checkBalance.getBalance());
    



}