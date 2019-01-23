module lazyness {

    function lazyFind<T>(arr: T[], filter: (i: T) => boolean): T {

        let hero: T | null = null;
        
        const proxy = new Proxy(
            {},
            {
                get: (obj, prop) => {
                    console.log("Filtering...");
                    if (!hero) {
                        hero = arr.find(filter) || null;
                    }
                    return hero ? (hero as any)[prop] : null;
                }
            }
        );

        return proxy as any;
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
    
    console.log("A");
    const spiderman = lazyFind(heroes, (h) => h.name === "Spiderman");
    console.log("B");
    console.log(spiderman.name);
    console.log("C");

    /*
        A
        B
        Filtering...
        Spiderman
        C
    */
}
