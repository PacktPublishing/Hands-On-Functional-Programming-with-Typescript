import { from } from "rxjs";
import { every } from "rxjs/operators";

namespace operators_demo_2 {

    const observable = from<number>([1, 2,3, 4, 5]);

    observable.pipe(every(x => x < 10));

    const subscription = observable.subscribe(
        (value) => console.log(value)
    );

    subscription.unsubscribe();

}
