namespace closures_demo_1 {

    function makeArmy() {
        const shooters = [];
        for (var i = 0; i < 10; i++) {
            ((index: number) => {
                const shooter = () => {
                    console.log(index);
                };
                shooters.push(shooter);
            })(i);
        }
        return shooters;
    }

    const army = makeArmy();

    army[0](); // 0
    army[5](); // 5

}

namespace closures_demo_2 {

    class Counter {

        private static _COUNTER = 0;
    
        public increment() {
            this._changeBy(1);
        }
    
        public decrement() {
            this._changeBy(-1);
        }
    
        public value() {
            return Counter._COUNTER;
        }
    
        private _changeBy(val: number) {
            Counter._COUNTER += val;
        }
    
    }

    /*

        // JS Output

        var Counter = (function () {

            function Counter() {
            }

            Counter.prototype._changeBy = function (val) {
                Counter._COUNTER += val;
            };

            Counter.prototype.increment = function () {
                this._changeBy(1);
            };

            Counter.prototype.decrement = function () {
                this._changeBy(-1);
            };

            Counter.prototype.value = function () {
                return Counter._COUNTER;
            };

            Counter._COUNTER = 0;
            return Counter;

        })();



    */

}

namespace closures_demo_3 {

    var Counter = (function() {

        // closure context
    
        let _COUNTER = 0;
    
        function changeBy(val: number) {
            _COUNTER += val;
        }

        interface Counter {
            increment: () => void;
            decrement: () => void;
            value: () => number;
        }

        interface CounterConstructor {
            new(): Counter;
        }
    
        const Counter = function Counter() {};
    
        // closure functions
    
        Counter.prototype.increment = function() {
          changeBy(1);
        };
    
        Counter.prototype.decrement = function() {
          changeBy(-1);
        };
    
        Counter.prototype.value = function() {
          return _COUNTER;
        };
    
        return (Counter as unknown) as CounterConstructor;
    
    })();

    const counter1 = new Counter();
    const counter2 = new Counter();

    console.log(counter1.value()); // 0
    console.log(counter2.value()); // 0

    counter1.increment();
    counter1.increment();
    console.log(counter1.value()); // 2
    console.log(counter2.value()); // 2 (expected 0)

    counter1.decrement();
    console.log(counter1.value()); // 1
    console.log(counter2.value()); // 1 (expected 0)

}

namespace closures_demo_4 {

    function makeCounter() {

        // closure context
        let _COUNTER = 0;
    
        function changeBy(val: number) {
            _COUNTER += val;
        }
    
        class Counter {
    
            public increment() {
                changeBy(1);
            }
    
            public decrement() {
                changeBy(-1);
            }
    
            public value() {
                return _COUNTER;
            }
    
        }

        return new Counter();
    
    }

    const counter1 = makeCounter();
    const counter2 = makeCounter();
    console.log(counter1.value()); // 0
    console.log(counter2.value()); // 0
    counter1.increment();
    counter1.increment();
    console.log(counter1.value()); // 2
    console.log(counter2.value()); // 0 (expected 0)
    counter1.decrement();
    console.log(counter1.value()); // 1
    console.log(counter2.value()); // 0 (expected 0)

    console.log(counter1.counter); // Error
    console.log(counter1.changeBy(2)); // Error


}
