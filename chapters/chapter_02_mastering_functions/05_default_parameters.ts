namespace default_parameters_demo_1 {

    function add(foo: number, bar: number, foobar?: number): number {
        return foo + bar + (foobar !== undefined ? foobar : 0);
    }

}

namespace default_parameters_demo_2 {

    function add(foo: number, bar: number, foobar: number = 0): number {
        return foo + bar + foobar;
    }

}

namespace default_parameters_demo_3 {
    
    /*
    
    // This is the compilation output of default_parameters_demo_2
    
    function add(foo, bar, foobar) {
        if (foobar === void 0) { foobar = 0; }
        return foo + bar + foobar;
    }
    */

}

namespace default_parameters_demo_4 {
    
    function test() {
        var undefined = 2; // 2
        console.log(undefined === 2); // true
    }
    
}
