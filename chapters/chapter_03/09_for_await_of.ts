namespace for_await_of_demo_1 {

    function* g1() {
        yield 2;
        yield 3;
        yield 4;
    }
    
    async function func() {
        for await (const x of g1()) {
            console.log(x);
        }
    }

    (async () => {
        await func();
    })();

}
