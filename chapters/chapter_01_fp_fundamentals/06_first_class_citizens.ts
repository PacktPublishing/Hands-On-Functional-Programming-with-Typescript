module functions_as_first_class_citizens_demo_one {

    function find<T>(arr: T[], filter: (i: T) => boolean) {
        return arr.filter(filter);
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
    
    const spiderman = find(heroes, (h) => h.name === "Spiderman");

    console.log(spiderman);
    
}

module functions_as_first_class_citizens_demo_two {

    function find<T>(filter: (i: T) => boolean) {
        return (arr: T[]) => {
            return arr.filter(filter);
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

    const findSpiderman = find((h: Hero) => h.name === "Spiderman");
    const spiderman = findSpiderman(heroes);

    console.log(spiderman);

}
