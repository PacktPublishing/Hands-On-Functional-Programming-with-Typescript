import { from } from "rxjs";
import { map } from "rxjs/operators";
import fetch from "node-fetch";

namespace observable_demo_7 {

    const uri = "https://jsonplaceholder.typicode.com/todos/1";
    const observable = from(fetch(uri)).pipe(map(x => x.json()));

    const subscription = observable.subscribe(
        (value) => console.log(value.toString())
    );
    
    subscription.unsubscribe();

}
