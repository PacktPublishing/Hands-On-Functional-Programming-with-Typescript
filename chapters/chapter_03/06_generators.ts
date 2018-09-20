namespace generators_demo_1 {

    function *foo() {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        return 5;
    }
    
    let bar = foo();
    bar.next(); // Object {value: 1, done: false}
    bar.next(); // Object {value: 2, done: false}
    bar.next(); // Object {value: 3, done: false}
    bar.next(); // Object {value: 4, done: false}
    bar.next(); // Object {value: 5, done: true}
    bar.next(); // Object { done: true }

}

namespace generators_demo_2 {

    function* foo() {
        let i = 1;
        while (true) { // Infinite loop!
            yield i++;
        }
    }
    
    let bar = foo();
    bar.next(); // Object {value: 1, done: false}
    bar.next(); // Object {value: 2, done: false}
    bar.next(); // Object {value: 3, done: false}
    bar.next(); // Object {value: 4, done: false}
    bar.next(); // Object {value: 5, done: false}
    bar.next(); // Object {value: 6, done: false}
    bar.next(); // Object {value: 7, done: false}

}
