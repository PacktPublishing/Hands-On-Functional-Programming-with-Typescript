namespace promises_demo_1 {
    
    function foo() {
        return new Promise<string>((fulfill, reject) => {
            try {
                // do something
                fulfill("SomeValue");
            } catch (e) {
                reject(e);
            }
        });
    }
    
    foo().then((value) => {
        console.log(value);
    }).catch((e) => {
        console.log(e);
    });

}

namespace promises_demo_2 {

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

    doSomethingAsync([]).then((arr1) => {
        doSomethingElseAsync(arr1).then((arr2) => {
            doSomethingMoreAsync(arr2).then((arr3) => {
                console.log(
                    `
                    doSomethingAsync: ${arr3[0]}
                    doSomethingElseAsync: ${arr3[1]}
                    doSomethingMoreAsync: ${arr3[2]}
                    `
                );
            });
        });
    }).catch((e) => console.log(e));

    doSomethingAsync([])
        .then(doSomethingElseAsync)
        .then(doSomethingMoreAsync)
        .then((arr3) => {
            console.log(
                `
                doSomethingAsync: ${arr3[0]}
                doSomethingElseAsync: ${arr3[1]}
                doSomethingMoreAsync: ${arr3[2]}
                `
            );
        }).catch((e) => console.log(e));

}

namespace promises_demo_3 {

    Promise.all([
        new Promise<number>((resolve) => {
            setTimeout(() => resolve(1), 1000);
        }),
        new Promise<number>((resolve) => {
            setTimeout(() => resolve(2), 1000);
        }),
        new Promise<number>((resolve) => {
            setTimeout(() => resolve(3), 1000);
        })
    ]).then((values) => {
        console.log(values); // [ 1 ,2, 3]
    });

}

namespace promises_demo_4 {

    Promise.race([
        new Promise<number>((resolve) => {
            setTimeout(() => resolve(1), 3000);
        }),
        new Promise<number>((resolve) => {
            setTimeout(() => resolve(2), 2000);
        }),
        new Promise<number>((resolve) => {
            setTimeout(() => resolve(3), 1000);
        })
    ]).then((fastest) => {
        console.log(fastest); // 3
    });

}
