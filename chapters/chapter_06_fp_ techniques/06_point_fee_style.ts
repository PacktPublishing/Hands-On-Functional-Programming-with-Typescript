namespace point_free_style_demo_1 {

    interface Person {
        age: number;
        birthCountry: string;
        naturalizationDate: Date;
    }
    
    const OUR_COUNTRY = "Ireland";
    const wasBornInCountry = (person: Person) => person.birthCountry === OUR_COUNTRY;
    const wasNaturalized = (person: Person) => Boolean(person.naturalizationDate);
    const isOver18 = (person: Person) => person.age >= 18;
    const isCitizen = (person: Person) => wasBornInCountry(person) || wasNaturalized(person);
    const isEligibleToVote = (person: Person) => isOver18(person) && isCitizen(person);
    
    isEligibleToVote({
        age: 27,
        birthCountry: "Ireland",
        naturalizationDate: new Date(),
    });

}

namespace point_free_style_demo_2 {

    const either = <T1>(
        funcA: (a: T1) => boolean,
        funcB: (a: T1) => boolean
    ) => (arg: T1) => funcA(arg) || funcB(arg);
    
    const both = <T1>(
        funcA: (a: T1) => boolean,
        funcB: (a: T1) => boolean
    ) => (arg: T1) => funcA(arg) && funcB(arg);
    
    
    interface Person {
        age: number;
        birthCountry: string;
        naturalizationDate: Date;
    }
    
    const OUR_COUNTRY = "Ireland";
    const wasBornInCountry = (person: Person) => person.birthCountry === OUR_COUNTRY;
    const wasNaturalized = (person: Person) => Boolean(person.naturalizationDate);
    const isOver18 = (person: Person) => person.age >= 18;
    
    // Point-free style
    
    const isCitizen = either(wasBornInCountry, wasNaturalized);
    const isEligibleToVote = both(isOver18, isCitizen);
    
    isEligibleToVote({
        age: 27,
        birthCountry: "Ireland",
        naturalizationDate: new Date(),
    });

}