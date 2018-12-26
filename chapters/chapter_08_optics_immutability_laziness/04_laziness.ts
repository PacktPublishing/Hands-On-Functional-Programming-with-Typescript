namespace lazy_evaluation_demo_1 {

    interface Dog {
        size: "L" | "S";
        age: number;
        name: string;
     }
     
     const dogs: Dog[] = [
        { size: "S", age: 4, name: "Alice" },
        { size: "L", age: 2, name: "Bob", },
        { size: "S", age: 7, name: "Carol" },
        { size: "L", age: 6, name: "Dan" },
        { size: "L", age: 2, name: "Eve" },
        { size: "S", age: 2, name: "Frank" },
        { size: "S", age: 1, name: "Grant" },
        { size: "S", age: 9, name: "Hans" },
        { size: "L", age: 8, name: "Inga" },
        { size: "L", age: 4, name: "Julia" }
     ];
     
     const isLarge = (dog: Dog) => dog.size === "L";
     const isOld = (dog: Dog) => dog.age > 5;
     dogs.filter(isLarge).find(isOld);

}

namespace lazy_evaluation_demo_2 {

    interface Dog {
        size: "L" | "S";
        age: number;
        name: string;
     }
     
     const dogs: Dog[] = [
        { size: "S", age: 4, name: "Alice" },
        { size: "L", age: 2, name: "Bob", },
        { size: "S", age: 7, name: "Carol" },
        { size: "L", age: 6, name: "Dan" },
        { size: "L", age: 2, name: "Eve" },
        { size: "S", age: 2, name: "Frank" },
        { size: "S", age: 1, name: "Grant" },
        { size: "S", age: 9, name: "Hans" },
        { size: "L", age: 8, name: "Inga" },
        { size: "L", age: 4, name: "Julia" }
     ];
     
     const isLarge = (dog: Dog) => dog.size === "L";
     const isOld = (dog: Dog) => dog.age > 5;
    
     const filter = <T>(f: (item: T) => boolean) => {
        return function* (arr: T[]) {
            for (const item of arr) {
                if (f(item)) {
                    yield item;
                }
            }
        };
     };
     
     const find = <T>(f: (item: T) => boolean) =>(arr: IterableIterator<T>) => {
        for (const item of arr) {
            if (f(item)) {
                return item;
            }
        }
     };
    
    const findLargeOldDog = R.compose(find(isOld), filter(isLarge));
    findLargeOldDog(dogs);

}
