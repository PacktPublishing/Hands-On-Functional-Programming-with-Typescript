import { bindCallback } from "rxjs";
import fetch from "node-fetch";

namespace observable_demo_5 {

    function getJSON(url: string, cb: (response: unknown|null) => void) {
        fetch(url)
            .then(response => response.json())
            .then(json => cb(json))
            .catch(_ => cb(null));
    }
    
    const uri = "https://jsonplaceholder.typicode.com/todos/1";
    const observableFactory = bindCallback(getJSON);
    const observable = observableFactory(uri);
    
    const subscription = observable.subscribe(
        (value) => console.log(value)
    );
    
    subscription.unsubscribe();
    
}
