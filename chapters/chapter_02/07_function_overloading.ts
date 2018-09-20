namespace function_overloading_demo_1 {

    function test(name: string): string; // overloaded signature
    function test(age: number): string; // overloaded signature
    function test(single: boolean): string; // overloaded signature
    function test(value: (string|number|boolean)): string { // implementation signature
        switch (typeof value) {
            case "string":
                return `My name is ${value}.`;
            case "number":
                return `I'm ${value} years old.`;
            case "boolean":
                return value ? "I'm single." : "I'm not single.";
            default:
                throw new Error("Invalid Operation!");
        }
    }
    
    test("Remo"); // returns "My name is Remo."
    test(26); // returns "I'm 26 years old.";
    test(false); // returns "I'm not single.";
    test({ custom: "custom" }); // Error
    
}

namespace function_overloading_demo_2 {

    function test(name: string): string;
    function test(age: number): number; // Error
    function test(single: boolean): string;
    function test(value: (string|number|boolean)): string {
        switch (typeof value) {
            case "string":
                return `My name is ${value}.`;
            case "number":
                return `I'm ${value} years old.`;
            case "boolean":
                return value ? "I'm single." : "I'm not single.";
            default:
                throw new Error("Invalid Operation!");
        }
    }

}
