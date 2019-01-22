module immutability {

    class ImmutableList<T> {
        private readonly _list: ReadonlyArray<T>;
        private _deepCloneItem(item: T) {
            return JSON.parse(JSON.stringify(item)) as T;
        }
        public constructor(initialValue?: Array<T>) {
            this._list = initialValue || [];
        }
        public add(newItem: T) {
            const clone = this._list.map(i => this._deepCloneItem(i));
            const newList = [...clone, newItem];
            const newInstance = new ImmutableList<T>(newList);
            return newInstance;
        }
        public remove(
            item: T,
            areEqual: (a: T, b: T) => boolean = (a, b) => a === b
        ) {
            const newList = this._list.filter(i => !areEqual(item, i))
                                .map(i => this._deepCloneItem(i));
            const newInstance = new ImmutableList<T>(newList);
            return newInstance;
        }
        public get(index: number): T | undefined {
            const item = this._list[index];
            return item ? this._deepCloneItem(item) : undefined;
        }
        public find(filter: (item: T) => boolean) {
            const item = this._list.find(filter);
            return item ? this._deepCloneItem(item) : undefined;
        }
    }

    interface Hero { 
        name: string;
        powers: string[];
    }
    
    const heroes = [
        {
            name: "Spiderman",
            powers: [
                "wall-crawling",
                "enhanced strength",
                "enhanced speed",
                "spider-Sense"
            ]
        },
        {
            name: "Superman",
            powers: [
                "flight",
                "superhuman strength",
                "x-ray vision",
                "super-speed"
            ]
        }
    ];
    
    const hulk = {
        name: "Hulk",
        powers: [
            "superhuman strength",
            "superhuman speed",
            "superhuman Stamina",
            "superhuman durability"
        ]
    };
    
    const myList = new ImmutableList<Hero>(heroes);
    const myList2 = myList.add(hulk);
    const result1 = myList.find((h => h.name === "Hulk")); 
    const result2 = myList2.find((h => h.name === "Hulk"));
    const areEqual = myList2 === myList;

    console.log(result1); // undefined
    console.log(result2); // { name: "Hulk", powers: Array(4) }
    console.log(areEqual); // false
    
}
