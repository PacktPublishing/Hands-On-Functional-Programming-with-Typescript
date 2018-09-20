namespace covariant_checking_in_cb_parameters_demo_1 {

    declare function someFunc(
        callback: (
        nestedCallback: (error: number, result: any) => void
        ) => void
    ): void;
    
    someFunc(
        (
            nestedCallback: (e: number) => void // Error
        ) => {
            nestedCallback(1);
        }
    );

    someFunc(
        (
            nestedCallback: (e: number, result: any) => void // OK
        ) => {
            nestedCallback(1, 1);
        }
    );

    let p: Promise<number> = new Promise((res, rej) => {
        res("error"); // Error
    });

}
