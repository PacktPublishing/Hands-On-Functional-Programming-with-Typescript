namespace applicative_demo_1 {

    class Container<T> {

        public static of<TVal>(val: TVal) {
            return new Container(val);
        }
    
        private _value!: T;
    
        public constructor(val: T) {
            this._value = val;
        }
    
        public map<TMap>(fn: (val: T) => TMap) {
            return new Container<TMap>(fn(this._value));
        }
    
    }

    let double = (x: number) => x + x;
    let container = Container.of(3);
    let container2 = container.map(double);
    console.log(container2); // { _value: 6 }

}
