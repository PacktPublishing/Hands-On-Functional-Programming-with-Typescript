namespace function_scope_demo_1 {

    function foo(): void {
        if (true) {
            var bar: number = 0;
        }
        console.log(bar);
    }
    
    foo();

}

namespace function_scope_demo_2 {

    function foo() {
        var bar;
        if (true) {
            bar = 0;
        }
        console.log(bar);
    }
    
    foo();
}

namespace function_scope_demo_3 {

    function foo(): void {
        bar = 0;
        var bar: number;
        console.log(bar);
    }
    
    foo();
}

namespace function_scope_demo_4 {

    function foo(): void {
        var bar: number;
        bar = 0;
        console.log(bar);
    }
    
    foo();
}

namespace function_scope_demo_5 {

    function foo(): void {
        if (true) {
            let bar: number = 0;
            bar = 1;
        }
        console.log(bar); // Error
    }
}

namespace function_scope_demo_6 {

    function foo(): void {
        if (true) {
            const bar: number = 0;
            bar = 1; // Error
        }
        alert(bar); // Error
    }
    
}
