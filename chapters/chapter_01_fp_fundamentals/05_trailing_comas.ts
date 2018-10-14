namespace trailing_comas_demo_1 {

    function greetWithoutTralingComans(
        name: string
    ): string {
        return `Hi! ${name}`;
    }

    function greetWithTralingComans(
        name: string,
    ): string {
        return `Hi! ${name}`;
    }

    function updatedGreetWithoutTralingComans(
        name: string
        surname: string, // Error
    ): string {
        return `Hi! ${name} ${surname}`;
    }
    
    function updatedGreetWithTralingComans(
        name: string,
        surname: string,
    ): string {
        return `Hi! ${name} ${surname}`;
    }

}
