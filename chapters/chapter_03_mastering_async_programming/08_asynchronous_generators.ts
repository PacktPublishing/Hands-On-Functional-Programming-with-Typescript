namespace asynchronous_generators_demo_1 {

    let counter = 0;

    function doSomethingAsync() {
        return new Promise<number>((r) => {
            setTimeout(() => {
                counter += 1;
                r(counter);
            }, 1000);
        });
    }

    async function* g1() {
        yield await doSomethingAsync();
        yield await doSomethingAsync();
        yield await doSomethingAsync();
    }

    let i: AsyncIterableIterator<number> = g1();

    i.next().then((n) => console.log(n)); // 1
    i.next().then((n) => console.log(n)); // 2
    i.next().then((n) => console.log(n)); // 3

}
