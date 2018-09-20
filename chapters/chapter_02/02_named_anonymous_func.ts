namespace named_function {

    // named function
    function greet(name?: string): string {
        if(name){
            return "Hi! " + name;
        } else {
            return "Hi!";
        }
    }
  
}

namespace anonymous_function_demo_1 {
  
    // anonymous function
    let greet = function(name?: string): string {
        if (name) {
            return "Hi! " + name;
        } else {
            return "Hi!";
        }
    }

}

namespace anonymous_function_demo_2 {

    let greet = (name: string): string => {
        if(name){
          return "Hi! " + name;
        }
        else
        {
          return "Hi";
        }
    };
  
}

namespace anonymous_function_demo_3 {

    let greet: (name: string) => string = function(name: string): string {
        if (name) {
            return "Hi! " + name;
        } else {
            return "Hi!";
        }
    };

}

namespace anonymous_function_demo_4 {

    function add(
        a: number,
        b: number,
        callback: (result: number) => void
    ) {
        callback(a + b);
    }
    
}
