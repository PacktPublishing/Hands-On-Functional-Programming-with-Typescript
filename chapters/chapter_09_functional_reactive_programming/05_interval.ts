import { interval } from "rxjs";

namespace observable_demo_3 {

    const observable = interval(10);

    const subscription = observable.subscribe(
        (value) => console.log(value),
        (error: any) => console.log(error),
        () => console.log("Done!")
    );

    subscription.unsubscribe();

}
