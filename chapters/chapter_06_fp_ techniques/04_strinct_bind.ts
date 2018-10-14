namespace strict_bind_demo_1 {

    const replace = (s: string, f: string, r: string) => s.split(f).join(r);
    const replaceForwardSlash = replace.bind(replace, "/");
    const replaceForwardSlashWithDash = replaceForwardSlash.bind(replaceForwardSlash, "-");
    replaceForwardSlashWithDash("13/feb/1989");

}

namespace strict_bind_demo_2 {

    const compose = <T1, T2, T3>( f: (x: T2) => T3, g: (x: T1) => T2) => (x: T1) => f(g(x));
    const trim = (s: string) => s.trim();
    const capitalize = (s: string) => s.toUpperCase();
    const trimAndCapitalize = compose(trim, capitalize);
    const replace = (s: string, f: string, r: string) => s.split(f).join(r);
    const replaceForwardSlashWithDash = replace.bind(replace, "/", "-");
    const trimCapitalizeAndReplace = compose(trimAndCapitalize, replaceForwardSlashWithDash);
    const result = trimCapitalizeAndReplace("13/feb/1989");
    console.log(result); // "13-FEB-1989"

}
