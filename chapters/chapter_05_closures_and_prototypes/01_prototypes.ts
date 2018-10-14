namespace prototypes_demo_1 {

    export class Person {

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

    /*

        // Compilation output JS (ES5)

        var Person = (function() {

            function Person(name, surname) {
                this.age = 0;
                this.name = name;
                this.surname = surname;
            }

            Person.prototype.greet = function() {
                let msg = "Hi! my name is " + this.name +
                            " " + this.surname;
                msg += "I'm " + this.age;
            };

            return Person;

        })();
    
    */
    

}