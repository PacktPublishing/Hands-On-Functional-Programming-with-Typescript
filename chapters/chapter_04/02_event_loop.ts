namespace event_loop_demo_1 {

    function foo(a: number): number {
        const localFooValue = 12;
        return localFooValue + a;
    }
    
    function bar(b: number): number {
        const localBarValue = 4;
        return foo(localBarValue * b);
    }

    bar(21);

}

namespace event_loop_demo_2 {

    function foo(a: number): number {
        const localFooValue = 12;
        return bar(localFooValue + a);
    }
    
    function bar(b: number): number {
        const localBarValue = 4;
        return foo(localBarValue * b);
    }

    bar(21); // Stack overflow!

}
