import { from } from "rxjs";
import { max } from "rxjs/operators";

namespace operators_demo_1 {

    const observable = from<number>([2, 30, 22, 5, 60, 1]);

    observable.pipe(max());

    const subscription = observable.subscribe(
        (value) => console.log(value)
    );

    subscription.unsubscribe();

}
