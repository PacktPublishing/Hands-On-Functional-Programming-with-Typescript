import { from } from "rxjs";
import { find } from "rxjs/operators";

namespace operators_demo_3 {

    const observable = from<number>([2, 30, 22, 5, 60, 1]);

    observable.pipe(find(x => x > 10));

    const subscription = observable.subscribe(
        (value) => console.log(value)
    );

    subscription.unsubscribe();

}
