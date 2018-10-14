namespace pipes_demo_1 {

    const pipe = <T>(...fns: Array<(arg: T) => T>) =>
        (value: T) =>
            fns.reduce((acc, fn) => fn(acc), value);

    function curry3<T1, T2, T3, T4>(fn: (a: T1, b: T2, c: T3) => T4) {
        return (a: T1) => (b: T2) => (c: T3) => fn(a, b, c);
    }

    const trim = (s: string) => s.trim();
    const capitalize = (s: string) => s.toUpperCase();
    
    const replace = curry3(
        (s: string, f: string, r: string) => s.split(f).join(r)
    );

    const trimCapitalizeAndReplace = pipe(
        trim,
        capitalize,
        replace("/")("-")
    );
    
    const result = trimCapitalizeAndReplace(" 13/feb/1989 ");
    console.log(result); // "13-FEB-1989"

}
