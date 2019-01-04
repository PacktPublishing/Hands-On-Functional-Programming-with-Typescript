import { from } from "rxjs";
import { map } from "rxjs/operators";

namespace operators_demo_5 {

    const observable = from<number>([1, 2, 3]);

    observable.pipe(map(x => 10 * x));

    const subscription = observable.subscribe(
        (value) => console.log(value)
    );

    subscription.unsubscribe();

}
