module function_arity {

    // Unary function
    function isNull<T>(a: T|null) {
        return (a === null);
    }

    // Binary function
    function add(a: number, b: number) {
        return a + b;
    }
    
    // Variadic functions
    function addMany(...numbers: number[]) {
        numbers.reduce((p, c) => p + c, 0);
    }
    

}
