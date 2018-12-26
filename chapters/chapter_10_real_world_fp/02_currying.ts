import R from "ramda";

namespace ramda_currying_demo_1 {

    const trim = (s: string) => s.trim();
    const capitalize = (s: string) => s.toUpperCase();
    const replace = (s: string, f: string, r: string) => s.split(f).join(r);
    
    const trimCapitalizeAndReplace = R.compose(
        R.compose(trim, capitalize),
        R.curry(replace)("/")("-")
    );
    
    const result = trimCapitalizeAndReplace(" 13/feb/1989 ");
    console.log(result); // "13-FEB-1989"

}
