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

        public ap<TMap>(c: Container<(val: T) => TMap>) {
            return c.map(fn => this.map(fn));
        }
    
    }

    let double = (x: number) => x + x;
    let numberContainer = Container.of(3);
    let functionContainer = Container.of(double);

    // Container<number> with value 6
    numberContainer.map(double);

    // Container<number> with value 6
    numberContainer.ap(functionContainer);

}
