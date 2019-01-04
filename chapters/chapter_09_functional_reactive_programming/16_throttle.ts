import { fromEvent, interval } from "rxjs";
import { throttle, mapTo, scan } from "rxjs/operators";

namespace operators_demo_7 {

    const observable = fromEvent(document, "click")
                        .pipe(mapTo(1))
                        .pipe(throttle(x => interval(100)))
                        .pipe(scan((acc, one) => acc + one, 0));

    const subscription = observable.subscribe(
        (value) => console.log(value)
    );

    subscription.unsubscribe();

}
