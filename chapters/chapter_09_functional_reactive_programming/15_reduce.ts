import { from } from "rxjs";
import { reduce } from "rxjs/operators";

namespace operators_demo_6 {

    const observable = from<number>([1, 2, 3, 3, 4, 5]);

    observable.pipe(reduce((x, y) => x + y));

    const subscription = observable.subscribe(
        (value) => console.log(value)
    );

    subscription.unsubscribe();

}
