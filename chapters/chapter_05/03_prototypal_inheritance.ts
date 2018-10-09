namespace prototypal_inheritance_demo_1 {

    const Person = prototypes_demo_1.Person;

    class SuperHero extends Person {

        public superpower: string;
    
        public constructor(
            name: string,
            surname: string,
            superpower: string
        ) {
            super(name, surname);
            this.superpower = superpower;
        }
    
        public userSuperPower() {
            return `I'm using my ${this.superpower}`;
        }
    
    }

    // Please refer to compilation output

}
