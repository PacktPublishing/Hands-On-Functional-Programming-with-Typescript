import { fromEvent } from "rxjs";

namespace observable_demo_4 {

    const observable = fromEvent(document, "click");

    const subscription = observable.subscribe(
        (value) => console.log(value)
    );
    
    subscription.unsubscribe();

}
