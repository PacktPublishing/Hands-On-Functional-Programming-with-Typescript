namespace callback_hell_demo_1 {

    function doSomethingAsync(
        arr: number[],
        success: (arr: number[]) => void,
        error: (e: Error) => void
    ) {
        setTimeout(() => {
            try {
                let n = Math.ceil(Math.random() * 100 + 1);
                if (n < 25) {
                    throw new Error("n is < 25");
                }
                success([...arr, n]);
            } catch (e) {
                error(e);
            }
        }, 1000);
    }
    
    function doSomethingElseAsync(
        arr: number[],
        success: (arr: number[]) => void,
        error: (e: Error) => void
    ) {
        setTimeout(() => {
            try {
                let n = Math.ceil(Math.random() * 100 + 1);
                if (n < 25) {
                    throw new Error("n is < 25");
                }
                success([...arr, n]);
            } catch (e) {
                error(e);
            }
        }, 1000);
    }
    
    function doSomethingMoreAsync(
        arr: number[],
        success: (arr: number[]) => void,
        error: (e: Error) => void
    ) {
        setTimeout(() => {
            try {
                let n = Math.ceil(Math.random() * 100 + 1);
                if (n < 25) {
                    throw new Error("n is < 25");
                }
                success([...arr, n]);
            } catch (e) {
                error(e);
            }
        }, 1000);
    }

    doSomethingAsync([], (arr1) => {
        doSomethingElseAsync(arr1, (arr2) => {
            doSomethingMoreAsync(arr2, (arr3) => {
                console.log(
                    `
                    doSomethingAsync: ${arr3[0]}
                    doSomethingElseAsync: ${arr3[1]}
                    doSomethingMoreAsync: ${arr3[2]}
                    `
                );
            }, (e) => console.log(e));
        }, (e) => console.log(e));
    }, (e) => console.log(e));

}
