{
    type FrontendDeveloper = {
        skills: string[]
        designation: 'Frontend Developer'
    }
    type BackendDeveloper = {
        skills: string[]
        designation2:'BackendDeveloper'
    }

    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper
    
    const fullstackDeveloper: FullstackDeveloper = {
        skills: ['HTML', 'CSS', "JS"],
        designation: "Frontend Developer",
        designation2:"BackendDeveloper"
    }

}