module _higher_order_functions_demo_one {

    function addDelay(msg: string, ms: number) {
        return () => {
            setTimeout(() => {
                console.log(msg);
            }, ms);
        };
    }

    const delayedSayHello = addDelay("Hello world!", 500);
    delayedSayHello(); // Prints "Hello world!" (after 500 ms)

}

module _higher_order_functions_demo_two {

    function addDelay(func: () => void, ms: number) {
        return () => {
            setTimeout(() => {
                func();
            }, ms);
        };
    }

    function sayHello() {
        console.log("Hello world!");
    }

    const delayedSayHello = addDelay(sayHello, 500);
    delayedSayHello(); // Prints "Hello world!" (after 500 ms)
}
