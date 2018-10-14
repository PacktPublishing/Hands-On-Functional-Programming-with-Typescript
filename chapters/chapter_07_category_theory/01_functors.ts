namespace functor_demo_1 {

    class Container<T> {

        private _value: T;
    
        public constructor(val: T) {
            this._value = val;
        }
    
        public map<TMap>(fn: (val: T) => TMap) {
            return new Container<TMap>(fn(this._value));
        }
    
    }

    const double = (x: number) => x + x;
    const container = new Container(3);
    const container2 = container.map(double);
    console.log(container2); // { _value: 6 }

}
