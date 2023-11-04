{
    type Todo ={
        id: number;
        userId: number;
        title: string;
        completed: boolean;
    }
    
    
    const getTodo = async ():Promise<Todo> => {
      const res=await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const data = await res.json()
         return data
     }
    getTodo()
    
    type something = { something: string }
        //basic promise
        const createPromise = ():Promise<something> => {
            return new Promise<something>((resolve, reject) => {
                const data:something = {something:"something"}
                if (data) {
                    return resolve
                } else {
                return reject("failed to load data")
                }
            })
        }
    
    
    const showData = async () => {
        const data: something = await createPromise()
      console.log(data);
        showData()
    }
}