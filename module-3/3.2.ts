{
    class Parent{
        name: string;
        age: number;
        address: string;
     
        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numberOfSleep: number) {
            console.log(`${this.name} will sleep for ${numberOfSleep}`);
        }
    }


//  যেহেতু teacher and student  এর কিছূ প্রোপার্টি একই রকম তাই বার বার না লিখে একবার একটা কমন ক্লাস লিখে সেটা প্রোয়জনে বার বার ব্যবহার করা যায়।তাই Parent class টি কমন সব প্রোপার্টি গুলো হোল্ড করতেছে।এবং teacher and student সেটা ব্যবহার করতেছে।


// এখানে parent ক্লাসের প্রোপার্টি গুলো পাঠানো হচ্ছে।তবে Parent থেকে প্রোপার্টি গুলো ব্যবহার করতে extands (common class এখানে Parent) এরপর super() ব্যবহা করতে হয়।

    class Student extends Parent{
      
        constructor(name: string, age: number, address: string) {
            super(name, age, address)
        }
        getSleep(numberOfSleep: number) {
            console.log(`${this.name} will sleep for ${numberOfSleep}`);
        }
  
    }
    const student = new Student("Joy", 20, "Uganda")
    student.getSleep(6)
    
//  এখানেও কমন ক্লাসটি ব্যবহার করা হচ্ছে। তবে এখানে designation  টা কমন ক্লাসের  অন্তর্ভুক্ত নয় তাই এটা রেখে বাকি গুলো পাঠানো হচ্ছে। মনে রাখবা এখান থেকে ভেলু পাঠিয়ে কমন ক্লাস থেকে রেজাল্ট পাওয়া হচ্ছে।

    class Teacher extends Parent{
       
        designation: string;
        constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address)
            this.designation = designation;
        }
     
        takeClass(numberOfClasses: number) { 
            console.log(`${this.name} will take ${numberOfClasses}`)
        }
    }
    const teacher = new Teacher("Joy", 20, "Uganda", "Teacher")
     teacher.getSleep(10)
    
}