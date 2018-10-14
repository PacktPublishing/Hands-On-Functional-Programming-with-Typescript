namespace arrow_functions_demo_1 {

    class Person {
        private _name: string;
        constructor(name: string) {
            this._name = name;
        }
        public greet() {
            console.log(`Hi! My name is ${this._name}`);
        }
    }
    
    let person = new Person("Remo");
    person.greet(); // "Hi! My name is Remo"

}

namespace arrow_functions_demo_2 {

    class Person {
        private _name: string;
        constructor(name: string) {
            this._name = name;
        }
    
        public greet() {
            alert(`Hi! My name is ${this._name}`);
        }
    
        public greetDelay(time: number) {
            setTimeout(function() {
                alert(`Hi! My name is ${this._name}`); // Error
            }, time);
        }
    
    }

    let person = new Person("Remo");
    person.greetDelay(1000); // Error

}

namespace arrow_functions_demo_3 {

    class Person {

        private _name: string;
    
        constructor(name: string) {
            this._name = name;
        }
    
        public greet() {
            alert(`Hi! My name is ${this._name}`);
        }
    
        public greetDelay(time: number) {
            setTimeout(() => {
                alert(`Hi! My name is ${this._name}`); // OK
            }, time);
        }
    
    }
    
    let person = new Person("Remo");
    person.greet(); // "Hi! My name is Remo"
    person.greetDelay(1000); // "Hi! My name is Remo"

}
