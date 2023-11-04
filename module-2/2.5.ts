{
    const createArray = (param: string):string[] => {
     return [param]
 }


    const createGenericWithDynamic = <T>(params: T): T[] => {
        return [params]
    }
    
    const createGenericWithDynamicTuple = <T,Q>(params1: T,param2:Q): [T,Q] => {
        return [params1, param2]
    }
    
    type User = {
        id: number;
        name: string;
    }
const createArrayToObject=createGenericWithDynamic<User>({id:12,name:"Joy"})

    const createTuple=createGenericWithDynamicTuple<string,number>("mehedi",1200)
    const createTuple2 = createGenericWithDynamicTuple<string, { name: string }>("mehedi", { name: "joy" })
    
    const addStudentInfo = <T>(student: T) => {
        const Info="Next Level Web Developer"
        return {
            ...student,
            Info
        }
    }
    const student1 = addStudentInfo(
        {
            name: "Student",
            email: "a@gmail.com",
            
        }
    )
    const student2 = addStudentInfo({
        name: "Student",
        email: "b@gmail.com",
        hasWatch:true
    })
}