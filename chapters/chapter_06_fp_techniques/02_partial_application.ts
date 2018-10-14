namespace partial_application_demo_1 {

    function add(a: number, b: number) {
        return a + b;
    }
    
    const result = add(5, 5); // All arguments are provided at the same time
    console.log(result); // 10

}

namespace partial_application_demo_2 {

    function add(a: number) {
        return (b: number) => {
            return a + b;
        };
    }
    
    const add5 = add(5); // The 1st argument is provided
    const result = add5(5); // The 2nd argument is provided later
    console.log(result); // 10

}

namespace partial_application_demo_3 {

    function add(a: number, b?: number) {
        if (b !== undefined) {
            return a + b;
        } else {
            return (b2: number) => {
                return a + b2;
            };
        }
    }
    
    const result1 = add(5, 5); // All arguments are
    console.log(result1); // 10
    const add5 = add(5) as (b: number) => number; // The 1st passed
    const result2 = add5(5); // The 2nd argument is passed later
    console.log(result2); // 10

}

namespace partial_application_demo_4 {

    const compose = <T1, T2, T3>( f: (x: T2) => T3, g: (x: T1) => T2) => (x: T1) => f(g(x));

    const trim = (s: string) => s.trim();
    const capitalize = (s: string) => s.toUpperCase();
    const trimAndCapitalize = compose(trim, capitalize);

    const replace = (s: string, f: string, r: string) => s.split(f).join(r);

    const trimCapitalizeAndReplace = compose(trimAndCapitalize, replace); // Error

}

namespace partial_application_demo_5 {

    const compose = <T1, T2, T3>( f: (x: T2) => T3, g: (x: T1) => T2) => (x: T1) => f(g(x));

    const trim = (s: string) => s.trim();
    const capitalize = (s: string) => s.toUpperCase();
    const trimAndCapitalize = compose(trim, capitalize);

    const replace = (f: string, r: string) => (s: string) => s.split(f).join(r);

    const trimCapitalizeAndReplace = compose(trimAndCapitalize, replace("/", "-"));
    const result = trimCapitalizeAndReplace(" 13/feb/1989 ");
    console.log(result); // "13-FEB-1989"

}
