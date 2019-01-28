namespace prototypal_inheritance_demo_1 {

    class Person {

        public name: string;
        public surname: string;
        public age: number = 0;

        public constructor(name: string, surname: string) {
            this.name = name;
            this.surname = surname;
        }

        public greet() {
            let msg = `Hi! my name is ${this.name} ${this.surname}`;
            msg += `I'm ${this.age}`;
        }

    }

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

    const hero = new SuperHero("Peter", "Parker", "Spider-sense");
    hero.greet();
    hero.userSuperPower();

    // Please refer to the compilation output to learn more about prototypes

}
