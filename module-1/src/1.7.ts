{
    const bros1: string[] = ["joy", "joy", "joy", "joy", "joy"]
    let bros2: string[] = ["mehedi", "mehedi", "mehedi"]
    bros1.push(...bros2) //you can not pus like this bros1.push(bros2)

    function greetings(...friends:string[]){
        friends.forEach((friend:string) =>console.log(`Hi ${friend}`);)
    }
    greetings('joy','bros')

}