namespace callbacks_and_higher_order_functions_demo_1 {

    var myCallback = function() { // callback
        console.log("foo");
    }
    
    function bar(cb: () => void) { // higher order function
        console.log("bar");
        cb();
    }
    
    bar(myCallback); // prints "bar" then prints "foo"

    bar(() => {
        console.log("foo");
    }); // prints "bar" then prints "foo"

}
