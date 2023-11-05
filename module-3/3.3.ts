{
    //type guard  এখানে প্যারাম এর টাইট চেক করে তদনুযায়ি কাজ করবে।নিচে আমরা দেখতেছি param এর টাইপ চেক করে একবার যোগ করতেছে  আবার কনক্যাট করতেছে।
    type Alphaneumeric = string | number;
    const add = (param1: Alphaneumeric,param2:Alphaneumeric):Alphaneumeric => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1+param2;
        }
        else {
            return param1.toString()+param2.toString()//Creating string not number
        }
    }
    const result = add("2", "3");
    console.log(result);

    // in guard
    type NormalUser = {
    name:string;
    }
    type AdminUser = {
        name: string;
        role:string;
    }
    const getUser = (user: NormalUser | AdminUser) => {
        if ("role" in user) {
          console.log(`I am ${user.name} and my role is ${user.role}`);
        }
        else {
            console.log(`I am ${user.name} `);
        }
    }
    const normalUser:NormalUser = {
        name:"Joy"
    }
    const Admin: AdminUser = {
        name: "Mehedi",
        role: "Admin"
    }
getUser(Admin)





}