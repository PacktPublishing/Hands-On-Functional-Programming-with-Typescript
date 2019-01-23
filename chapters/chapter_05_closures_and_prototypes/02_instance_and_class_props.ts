namespace instance_and_calss_props_demo_1 {

    /*

    // You can do the following in JavaScript

    const name = "remo";
    const surname = "jansen";

    function Person(name, surname) {
        // instance properties
        this.name = name;
        this.surname = surname;
    }

    Person.prototype.name = name; // instance property
    Person.prototype.surname = surname; // instance property

    const person1 = new Person(name, surname);
    person1.age = 27;

    for (let property in person1) {
        console.log("property: " + property + ", value: '" +
        person1[property] + "'");
    }

    let person2 = new Person("John", "Wick");
    person2.name; // "John"
    person1.name; // "Remo"

    */

    /*

        // Console output

        property: name, value: 'remo'
        property: surname, value: 'jansen'
        property: age, value: 27
        property: greet, value: 'function (city, country) {
            let msg = "Hi, my name is " + this.name + " " + this.surname;
            msg += "\nI'm from " + city + " " + country;
            console.log(msg);
        }'
    
    */

}

namespace instance_and_calss_props_demo_2 {

    class MathHelper {

        // class property
        public static PI = 3.14159265359;

        // class method
        public static areaOfCircle(radius: number) {
            return radius * radius * MathHelper.PI;
        }
    }

}