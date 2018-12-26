import R from "ramda";

namespace lenses_demo_1 {

    class Street {

        public readonly num: number;
        public readonly name: string;
    
        public constructor(num: number, name: string) {
            this.num = num;
            this.name = name;
        }
    
    }
    
    class Address {
    
        public readonly city: string;
        public readonly street: Street;
    
        public constructor(city: string, street: Street) {
            this.city = city;
            this.street = street;
        }
    
    }

    interface Lens<T1, T2> {
        get(o: T1): T2;
        set(o: T2, v: T1): T1;
    }

    const streetLens: Lens<Address, Street> = {
        get: (o: Address) => o.street,
        set: (v: Street, o: Address) => new Address(o.city, v)
    };

    const address = new Address(
        "London",
        new Street(1, "rathbone square")
    );

    const street = streetLens.get(address);

    const address2 = streetLens.set(
        new Street(
            address.street.num,
            R.toUpper(address.street.name)
        ),
        address
    );

}

namespace lenses_demo_2 {

    class Street {

        public readonly num: number;
        public readonly name: string;
    
        public constructor(num: number, name: string) {
            this.num = num;
            this.name = name;
        }
    
    }
    
    class Address {
    
        public readonly city: string;
        public readonly street: Street;
    
        public constructor(city: string, street: Street) {
            this.city = city;
            this.street = street;
        }
    
    }

    interface Lens<T1, T2> {
        get(o: T1): T2;
        set(o: T2, v: T1): T1;
    }

    function composeLens<A, B, C>(
        ab: Lens<A, B>,
        bc: Lens<B, C>
    ): Lens<A, C> {
        return {
            get: (a: A) => bc.get(ab.get(a)),
            set: (c: C, a: A) => ab.set(bc.set(c, ab.get(a)), a)
        };
    }

    const streetLens: Lens<Address, Street> = {
        get: (o: Address) => o.street,
        set: (v: Street, o: Address) => new Address(o.city, v)
    };

    const nameLens: Lens<Street, string> = {
        get: (o: Street) => o.name,
        set: (v: string, o: Street) => new Street(o.num, v)
    };

    const streetNameLens = composeLens(streetLens, nameLens);

    const address = new Address(
        "London",
        new Street(1, "rathbone square")
    );

    const streetName = streetNameLens.get(address);

    const address2 = streetNameLens.set(R.toUpper(address.street.name), address);

}

namespace lenses_demo_3 {

    class Street {

        public readonly num: number;
        public readonly name: string;
    
        public constructor(num: number, name: string) {
            this.num = num;
            this.name = name;
        }
    
    }
    
    class Address {
    
        public readonly city: string;
        public readonly street: Street;
    
        public constructor(city: string, street: Street) {
            this.city = city;
            this.street = street;
        }
    
    }

    interface Lens<T1, T2> {
        get(o: T1): T2;
        set(o: T2, v: T1): T1;
    }

    function composeLens<A, B, C>(
        ab: Lens<A, B>,
        bc: Lens<B, C>
    ): Lens<A, C> {
        return {
            get: (a: A) => bc.get(ab.get(a)),
            set: (c: C, a: A) => ab.set(bc.set(c, ab.get(a)), a)
        };
    }

    const streetLens: Lens<Address, Street> = {
        get: (o: Address) => o.street,
        set: (v: Street, o: Address) => new Address(o.city, v)
    };

    const nameLens: Lens<Street, string> = {
        get: (o: Street) => o.name,
        set: (v: string, o: Street) => new Street(o.num, v)
    };

    const streetNameLens = composeLens(streetLens, nameLens);

    function overLens<S, A>(
        lens: Lens<S, A>,
        func: (a: A) => A,
        s: S
    ): S {
        return lens.set(func(lens.get(s)), s)
    }

    const address = new Address(
        "London",
        new Street(1, "rathbone square")
    );

    const address2 = overLens(streetNameLens, R.toUpper, address);

}

namespace lenses_demo_4 {

    interface Lens<T1, T2> {
        get(o: T1): T2;
        set(o: T2, v: T1): T1;
    }

    type Prop<T, K extends keyof T> = (o: T) => T[K];
    type Assoc<T, K extends keyof T> = (v: T[K], o: T) => T;

    const lens = <T1, K extends keyof T1>(
        getter: Prop<T1, K>,
        setter: Assoc<T1, K>,
    ): Lens<T1, T1[K]> => {
        return {
            get: (obj: T1) => getter(obj),
            set: (val: T1[K], obj: T1) => setter(val, obj),
        };
    }

    const view = <T1, T2>(lens: Lens<T1, T2>, obj: T1) => lens.get(obj);

    const set = <T1, K extends keyof T1>(
        lens: Lens<T1, T1[K]>,
        val: T1[K],
        obj: T1
    ) => lens.set(val, obj);

    class Street {

        public readonly num: number;
        public readonly name: string;
    
        public constructor(num: number, name: string) {
            this.num = num;
            this.name = name;
        }
    
    }
    
    class Address {
    
        public readonly city: string;
        public readonly street: Street;
    
        public constructor(city: string, street: Street) {
            this.city = city;
            this.street = street;
        }
    
    }

    const propStreet: Prop<Address, "street"> = (o: Address) => o.street;

    const assocStreet: Assoc<Address, "street"> = (v: Address["street"], o: Address) => {
        return new Address(o.city, v);
    };

    const streetLens = lens(propStreet, assocStreet);

    const address = new Address(
        "London",
        new Street(1, "rathbone square")
    );

    const street = view(streetLens, address);

    const address2 = set(
        streetLens,
        new Street(
            address.street.num,
            R.toUpper(address.street.name)
        ),
        address
    );

}
