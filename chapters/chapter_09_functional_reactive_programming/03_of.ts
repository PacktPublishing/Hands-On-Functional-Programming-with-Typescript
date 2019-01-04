import { of } from "rxjs";

// namespace observable_demo_1 {

    const observable = of(1);

    const subscription = observable.subscribe(
        (value) => console.log(value),
        (error: any) => console.log(error),
        () => console.log("Done!")
    );

    subscription.unsubscribe();

// }
