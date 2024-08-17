const findTheOldest = (people) => {
    const oldest = people.reduce((oldest, person) => {
        const age = person.yearOfDeath - person.yearOfBirth;
        const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        return age > oldestAge ? person : oldest;
    }
    );
    console.log(oldest);
};

const people = [ 
    { 
      name: "Carly", 
      yearOfBirth: 1942, 
      yearOfDeath: 1970, 
    }, 
    { 
      name: "Ray", 
      yearOfBirth: 1962, 
      yearOfDeath: 2011, 
    }, 
    { 
      name: "Jane", 
      yearOfBirth: 1912, 
      yearOfDeath: 1941, 
    }, 
]

findTheOldest(people);