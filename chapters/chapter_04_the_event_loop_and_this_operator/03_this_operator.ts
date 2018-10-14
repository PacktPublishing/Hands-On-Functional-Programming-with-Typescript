/*

    // JavaScript Demo 1

    console.log(this === window); // true
    this.a = 37;
    console.log(window.a); // 37
    console.log(window.document === this.document); // true
    console.log(this.document === document); // true
    console.log(window.document === document); // true

    // JavaScript Demo 2

    function f1() {
        return this;
    }

    f1() === window; // true

    // JavaScript Demo 3

    console.log(this); // global (window)

    function f2() {
        "use strict";
        return this; // undefined
    }

    console.log(f2()); // undefined
    console.log(this); // window

    // JavaScript Demo 4

    const person = {
        age: 37,
        getAge: function() {
            return this.age; // this points to the instance (person)
        }
    };

    console.log(person.getAge()); // 37

*/

namespace x_demo_1 {

    class Person {
        public age: number;
        public constructor(age: number) {
            this.age = age;
        }
        public getAge() {
            return this.age; // this points to the instance (person)
        }
    }
    
    const person = new Person(37);
    console.log(person.getAge()); // 37

}

/*

    // JavaScript Demo 5

    function Person(age) {
        this.age = age;
    }
    
    Person.prototype.getAge = function () {
        return this.age; // this points to the instance (person)
    };
    
    var person = new Person(37);
    console.log(person.getAge()); // 37

    // JavaScript Demo 6

    function Person() { // function used as a constructor
        this.age = 37;
    }
    
    const person = new Person();
    console.log(person.age); // logs 37

*/
