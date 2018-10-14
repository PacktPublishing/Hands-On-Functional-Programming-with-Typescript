namespace optional_parameters_demo_1 {

    function add(foo: number, bar: number, foobar: number): number {
        return foo + bar + foobar;
    }
    
    add(); // Error, expected 3 arguments, but got 0.
    add(2, 2); // Error, expected 3 arguments, but got 2.
    add(2, 2, 2); // OK, returns 6

}

namespace optional_parameters_demo_2 {

    function add(foo: number, bar: number, foobar?: number): number {
        let result = foo + bar;
        if (foobar !== undefined) {
            result += foobar;
        }
        return result;
    }
    
    add(); // Error, expected 2-3 arguments, but got 0.
    add(2, 2); // OK, returns 4
    add(2, 2, 2); // OK, returns 6

}
