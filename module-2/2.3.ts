{
//Generics  Types
    type GenericsType<T> = Array<T>

    const students: GenericsType<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const studentsDetails: Array<{ name: string, role: string }> =
        [
        {
         name: "Mehedi", role: "Student"
        },
        {
          name: "Hasan", role: "Student"
        }
        ]

    
    type GenericsType2<x, t> = [x, y];

    const Student:GenericsType2<number,{name:string,role:string}>=[123,[{name: "Student", role: "Student"}]]

    
}