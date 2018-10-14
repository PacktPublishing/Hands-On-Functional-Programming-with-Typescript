namespace rest_parameters_demo_1 {

    function add(foo: number, bar: number, foobar: number = 0): number {
        return foo + bar + foobar;
    }

}

namespace rest_parameters_demo_1 {

    function add(...foo: number[]): number {
        let result = 0;
        for (let i = 0; i < foo.length; i++) {
            result += foo[i];
        }
        return result;
    }

    add(); // 0
    add(2); // 2
    add(2, 2); // 4
    add(2, 2, 2); // 6
    add(2, 2, 2, 2); // 8
    add(2, 2, 2, 2, 2); // 10
    add(2, 2, 2, 2, 2, 2); // 12

    /*
        // Output JavaScript:

        function add() {
            var foo = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                foo[_i - 0] = arguments[_i];
            }
            var result = 0;
            for (var i = 0; i < foo.length; i++) {
                result += foo[i];
            }
            return result;
        }
    */

}

namespace rest_parameters_demo_2 {

    function add(foo: number[]): number {
        let result = 0;
        for (let i = 0; i < foo.length; i++) {
            result += foo[i];
        }
        return result;
    }
    
    add(); // Error, expected 1 arguments, but got 0.
    add(2); // Error, '2' is not assignable to parameter of type 'number[]'.
    add(2, 2); // Error, expected 1 arguments, but got 2.
    add(2, 2, 2); // Error, expected 1 arguments, but got 3.
    
    add([]); // returns 0
    add([2]); // returns 2
    add([2, 2]); // returns 4
    add([2, 2, 2]); // returns 6
    
}

