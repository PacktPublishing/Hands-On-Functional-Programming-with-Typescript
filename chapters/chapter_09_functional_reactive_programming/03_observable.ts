import { from, of, interval } from "rxjs";

namespace observable_demo_1 {

    const observable = of(1);

    const subscription = observable.subscribe(
        (value) => console.log(value),
        (error: any) => console.log(error),
        () => console.log("Done!")
    );

    subscription.unsubscribe();

}

namespace observable_demo_2 {

    const observable = from([10, 20, 30]);

    const subscription = observable.subscribe(
        (value) => console.log(value),
        (error: any) => console.log(error),
        () => console.log("Done!")
    );

    subscription.unsubscribe();

}

namespace observable_demo_3 {

    const observable = interval(10);

    const subscription = observable.subscribe(
        (value) => console.log(value),
        (error: any) => console.log(error),
        () => console.log("Done!")
    );

    subscription.unsubscribe();

}

namespace observable_demo_4 {

}

namespace observable_demo_5 {
    
}

namespace observable_demo_6 {
    
}

namespace observable_demo_7 {
    
}
namespace observable_demo_8 {
    
}

