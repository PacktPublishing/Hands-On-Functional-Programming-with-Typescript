namespace imperative_vs_declarative_demo_1 {

    interface Result {
        id: number;
        result:number;
    }
    
    const results: Result[] = [
        { id: 1, result: 64 },
        { id: 2, result: 87 },
        { id: 3, result: 89 }
    ];
    
    function avg(arr: Result[]) {
        let total = 0;
        for (var i = 0; i < arr.length; i++) {
            total += arr[i].result;
        }
        return total / arr.length;
    }
    
    const resultsAvg = avg(results);
    console.log(resultsAvg);

}

namespace imperative_vs_declarative_demo_2 {

    interface Result {
        id: number;
        result:number;
    }
    
    const results: Result[] = [
        { id: 1, result: 64 },
        { id: 2, result: 87 },
        { id: 3, result: 89 }
    ];
    
    const add = (a: number, b: number) => a + b;
    const division = (a: number, b: number) => a / b;
    
    const avg = (arr: Result[]) =>
        division(arr.map(a => a.result).reduce(add, 0), arr.length)
    
    const resultsAvg = avg(results);
    console.log(resultsAvg);

}

namespace imperative_vs_declarative_demo_3 {

    const add = (a: number, b: number) => a + b;
    const addMany = (...args: number[]) => args.reduce(add, 0);
    const div = (a: number, b: number) => a / b;
    const mapProp = <T>(k: keyof T, arr: T[]) => arr.map(a => a[k]);
    const avg = (arr: number[]) => div(addMany(...arr), arr.length);

    interface Result {
        id: number;
        result:number;
    }

    const results: Result[] = [
        { id: 1, result: 64 },
        { id: 2, result: 87 },
        { id: 3, result: 89 }
    ];

    const resultsAvg = avg(mapProp("result", results));
    console.log(resultsAvg);

}
