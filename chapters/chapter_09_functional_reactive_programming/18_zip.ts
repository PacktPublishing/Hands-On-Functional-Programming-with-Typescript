import { from } from "rxjs";
import { zip } from "rxjs/operators";

namespace operators_demo_9 {

    const observableA = from<number>([1, 2, 3, 3, 4, 5]);
    const observableB = from<string>(["A", "B", "C", "D"]);

    const observableC = observableA.pipe(zip<number, string>(observableB));

    const subscription = observableC.subscribe(
        (value) => console.log(value)
    );

    subscription.unsubscribe();

}
