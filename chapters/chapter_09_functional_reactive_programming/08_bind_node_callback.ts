import { bindNodeCallback } from "rxjs";
import * as fs from "fs";

namespace observable_demo_6 {

    const observableFactory = bindNodeCallback(fs.readFile);
    const observable = observableFactory("./roadNames.txt");
    
    const subscription = observable.subscribe(
        (value) => console.log(value.toString())
    );
    
    subscription.unsubscribe();

}
