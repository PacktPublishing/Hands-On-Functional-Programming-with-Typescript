import { from } from "rxjs";

namespace observable_demo_2 {

    const observable = from([10, 20, 30]);

    const subscription = observable.subscribe(
        (value) => console.log(value),
        (error: any) => console.log(error),
        () => console.log("Done!")
    );

    subscription.unsubscribe();

}
