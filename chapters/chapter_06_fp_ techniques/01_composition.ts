namespace composition_demo_1 {

    const trim = (s: string) => s.trim();
    const capitalize = (s: string) => s.toUpperCase();

    const trimAndCapitalize = (s: string) => capitalize(trim(s));
    const result = trimAndCapitalize("   hello world   ");
    console.log(result); // "HELLO WORLD"

}

namespace composition_demo_2 {

    const trim = (s: string) => s.trim();
    const capitalize = (s: string) => s.toUpperCase();

    const compose = <T>(f: (x: T) => T, g: (x: T) => T) => (x: T) => f(g(x));

    const trimAndCapitalize = compose(trim, capitalize);
    const result = trimAndCapitalize("   hello world   ");
    console.log(result); // "HELLO WORLD"

}

namespace composition_demo_3 {

    const compose = <T1, T2, T3>( f: (x: T2) => T3, g: (x: T1) => T2) => (x: T1) => f(g(x));

    function func1(arg: string) {
        return arg += "A";
    }

    function func2(arg: string) {
        return arg += "B";
    }

    const composed1 = compose(func1, func2);
    const composed2 = compose(func1, func2);
    const composed3 = compose(composed1, composed2);

    const result = composed3("");
    console.log(result);

}

namespace composition_demo_4 {

    const compose3 = <T1, T2, T3, T4>(
        f: (x: T3) => T4,
        g: (x: T2) => T3,
        h: (x: T1) => T2
    ) => (x: T1) => f(g(h(x)));

    function func1(arg: string) {
        return arg += "A";
    }

    function func2(arg: string) {
        return arg += "B";
    }

    function func3(arg: string) {
        return arg += "C";
    }
    
    const composed = compose3(func1, func2, func3);
    const result = composed("");
    console.log(result);

}

namespace composition_demo_5 {

    const composeMany = <T>(...functions: Array<(arg: T) => T>) =>
        (arg: any) =>
            functions.reduce((prev, curr) => {
                return curr(prev);
            }, arg);

    function func1(arg: string) {
        return arg += "A";
    }

    function func2(arg: string) {
        return arg += "B";
    }

    function func3(arg: string) {
        return arg += "C";
    }

    function func4(arg: string) {
        return arg += "D";
    }

    function func5(arg: string) {
        return arg += "E";
    }
    
    const composed1 = composeMany(func1, func2, func3, func4);
    const result1 = composed1("");
    console.log(result1);

    const composed2 = composeMany(func1, func2, func3, func4);
    const result2 = composed2("");
    console.log(result2);

}

