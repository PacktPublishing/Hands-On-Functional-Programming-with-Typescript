import { from } from "rxjs";
import { merge } from "rxjs/operators";

namespace operators_demo_8 {

    const observableA = from<number>([20, 40, 60, 80, 100]);
    const observableB = from<number>([1, 1]);

    const observableC = observableA.pipe(merge<number, number>(observableB));

    const subscription = observableC.subscribe(
        (value) => console.log(value)
    );

    subscription.unsubscribe();

}
