namespace iife_demo_1 {

    let bar = 0; // global

    (function() {
        let foo: number = 0; // In scope of this function
        bar = 1; // Access global scope
        console.log(bar); // 1
        console.log(foo); // 0
    })();
    
    console.log(bar); // 1
    console.log(foo); // Error

}

namespace iife_demo_2 {

    let bar = 0; // global
    let topScope = window;
    
    (function(global: any) {
        let foo: number = 0; // In scope of this function
        console.log(global.bar); // 0
        global.bar = 1; // Access global scope
        console.log(global.bar); // 1
        console.log(foo); // 0
    })(topScope);
    
    console.log(bar); // 1
    console.log(foo); // Error

}

namespace iife_demo_3 {

    class Counter {
        private _i: number;
        public constructor() {
            this._i = 0;
        }
        public get(): number {
            return this._i;
        }
        public set(val: number): void {
            this._i = val;
        }
        public increment(): void {
            this._i++;
        }
    }
    
    let counter = new Counter();
    console.log(counter.get()); // 0
    counter.set(2);
    console.log(counter.get()); // 2
    counter.increment();
    console.log(counter.get()); // 3
    console.log(counter._i); // Error: Property '_i' is private

    /*
        // Output JavaScript:

        var Counter = (function() {
            var _i: number = 0;
            function Counter() {
                //
            }
            Counter.prototype.get = function() {
                return _i;
            };
            Counter.prototype.set = function(val: number) {
                _i = val;
            };
            Counter.prototype.increment = function() {
                _i++;
            };
            return Counter;
        })();

        let counter = new Counter();
        console.log(counter.get()); // 0
        counter.set(2);
        console.log(counter.get()); // 2
        counter.increment();
        console.log(counter.get()); // 3
        console.log(counter._i); // undefined
            
    */
    
}
