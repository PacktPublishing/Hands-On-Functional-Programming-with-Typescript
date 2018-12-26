import R from "ramda";

namespace immutability_demo_1 {

    class Person {

        public readonly name: string;
        public readonly age: number;

        public constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

    }

    const person = new Person("Remo", 29);
    person.age = 30; // Error
    person.name = "Remo Jansen"; // Error

}

namespace immutability_demo_2 {

    class Street {

        public readonly num: number;
        public readonly name: string;
    
        public constructor(num: number, name: string) {
            this.num = num;
            this.name = name;
        }
    
    }
    
    class Address {
    
        public readonly city: string;
        public readonly street: Street;
    
        public constructor(city: string, street: Street) {
            this.city = city;
            this.street = street;
        }
    
    }
    
    class Company {
    
        public readonly name: string;
        public readonly addresses: Address[];
    
        public constructor(name: string, addresses: Address[]) {
            this.name = name;
            this.addresses = addresses;
        }
    
    }

    const company1 = new Company(
        "Facebook",
        [
            new Address(
                "London",
                new Street(1, "rathbone square")
            ),
            new Address(
                "Dublin",
                new Street(5, "grand canal square")
            )
        ]
     );

     const company2 = new Company(
        company1.name,
        company1.addresses.map((a) =>
            new Address(
                a.city,
                new Street(
                    a.street.num,
                    R.toUpper(a.street.name)
                )
            )
        )
     );

}
