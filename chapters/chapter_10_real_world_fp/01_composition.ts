import R from "ramda";

namespace ramda_composition_demo_1 {
    const trim = (s: string) => s.trim();
    const capitalize = (s: string) => s.toUpperCase();
    const trimAndCapitalize = R.compose(trim, capitalize);
    const result = trimAndCapitalize("   hello world   ");
    console.log(result); // "HELLO WORLD"
}
