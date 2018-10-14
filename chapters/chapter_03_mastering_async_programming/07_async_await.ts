namespace async_await_demo_1 {

    let p = Promise.resolve(3);

    async function fn(): Promise<number> {
        var i = await p; // 3
        return 1 + i; // 4
    }

    fn().then((r) => console.log(r)); // 4

}

namespace async_await_demo_2 {

    function doSomethingAsync(arr: number[]) {
        return new Promise<number[]>((resolve, reject) => {
            setTimeout(() => {
                try {
                    let n = Math.ceil(Math.random() * 100 + 1);
                    if (n < 25) {
                        throw new Error("n is < 25");
                    }
                    resolve([...arr, n]);
                } catch (e) {
                    reject(e);
                }
            }, 1000);
        });
    }
    
    function doSomethingElseAsync(arr: number[]) {
        return new Promise<number[]>((resolve, reject) => {
            setTimeout(() => {
                try {
                    let n = Math.ceil(Math.random() * 100 + 1);
                    if (n < 25) {
                        throw new Error("n is < 25");
                    }
                    resolve([...arr, n]);
                } catch (e) {
                    reject(e);
                }
            }, 1000);
        });
    }
    
    function doSomethingMoreAsync(arr: number[]) {
        return new Promise<number[]>((resolve, reject) => {
            setTimeout(() => {
                try {
                    let n = Math.ceil(Math.random() * 100 + 1);
                    if (n < 25) {
                        throw new Error("n is < 25");
                    }
                    resolve([...arr, n]);
                } catch (e) {
                    reject(e);
                }
            }, 1000);
        });
    }

    async function invokeTaskAsync() {
        let arr1 = await doSomethingAsync([]);
        let arr2 = await doSomethingElseAsync(arr1);
        return await doSomethingMoreAsync(arr2);
    }

    invokeTaskAsync().then((result) => {
        console.log(
            `
            doSomethingAsync: ${result[0]}
            doSomethingElseAsync: ${result[1]}
            doSomethingMoreAsync: ${result[2]}
            `
        );
    }).catch((e) => {
        console.log(e);
    });

    (async () => {
        try {
            let arr1 = await doSomethingAsync([]);
            let arr2 = await doSomethingElseAsync(arr1);
            let arr3 = await doSomethingMoreAsync(arr2);
            console.log(
                `
                doSomethingAsync: ${arr3[0]}
                doSomethingElseAsync: ${arr3[1]}
                doSomethingMoreAsync: ${arr3[2]}
                `
            );
        } catch (e) {
            console.log(e);
        }
    })();

}

namespace async_await_demo_3 {

    declare const someAsyncFunction: () => Promise<void>;

    (async () => {
        await someAsyncFunction();
    })();

}