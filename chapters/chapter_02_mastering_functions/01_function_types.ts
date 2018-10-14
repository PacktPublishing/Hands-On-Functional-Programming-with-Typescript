namespace function_types_demo_1 {

    function greetNamed(name: string): string {
        return `Hi! ${name}`;
    }

}

namespace function_types_demo_2 {

    let greetUnnamed: (name: string) => string;

    greetUnnamed = function(name: string): string {
        return `Hi! ${name}`;
    };

}

namespace function_types_demo_3 {

    let greetUnnamed: (name: string) => string = function(name: string): string {
        return `Hi! ${name}`;
    };

}
