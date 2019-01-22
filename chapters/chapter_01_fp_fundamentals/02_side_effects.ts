namespace side_effects_demo {

    interface User {
        ageInMonths: number;
        name: string;
    }
    
    function findUserAgeByName(users: User[], name: string): number {
        if (users.length == 0) {
            throw new Error("There are no users!");
        }
        const user = users.find(u => u.name === name);
        if (!user) {
            throw new Error("User not found!");
        } else {
            return user.ageInMonths;
        }
    }
    
    const users = [
        { ageInMonths: 1, name: "Remo" },
        { ageInMonths: 2, name: "Leo" }
    ];
    
    // The variable userAge1 is as number
    const userAge1 = findUserAgeByName(users, "Remo"); 
    console.log(`Remo is ${userAge1 / 12} years old!`);
    
    // The variable userAge2 is a number but the function throws!
    const userAge2 = findUserAgeByName([], "Leo"); // Error
    console.log(`Leo is ${userAge2 / 12} years old!`);
    
    
    function safeFindUserAgeByName(users: User[], name: string): Promise<number> {

        if (users.length == 0) {
            return Promise.reject(new Error("There are no users!"));
        }

        const user = users.find(u => u.name === name);

        if (!user) {
            return Promise.reject(new Error("User not found!"));
        } else {
            return Promise.resolve(user.ageInMonths);
        }
    }
    
    safeFindUserAgeByName(users, "Remo")
        .then(userAge1 => console.log(`Remo is ${userAge1 / 12} years old!`));
    
    safeFindUserAgeByName([], "Leo") // Error
        .then(userAge1 => console.log(`Leo is ${userAge1 / 12} years old!`));
    
        
}