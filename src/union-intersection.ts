type NoobDeveloper={
    name:string
}

type JuniorDeveloper={
    name:string,
    expertise:string,
    experience:number,
}

type NextLevelDeveloper=JuniorDeveloper &{
    leadershipExperience:number;
    level: "junior" | "mid" | 'senior'
}

const newDeveloper:NoobDeveloper | JuniorDeveloper={
   name: "Moznu Mia",
   expertise: "JavaScript",
   experience: 6,
   
}

const developer:NextLevelDeveloper={
    name:'Next Bhai',
    expertise:'TypeScript',
    experience:2,
    leadershipExperience:2,
    level: 'mid',
}