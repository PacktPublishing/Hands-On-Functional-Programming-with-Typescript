namespace iterator_pattern_demo {

    function* iterateOnMultiples(arr: number[], divisor: number) {
        for (let item of arr) {
            if (item % divisor === 0) {
                yield item;
            }
        }
    }

    const iterator1 = iterateOnMultiples([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);

    const iteratorResult1 = iterator1.next();
    console.log(iteratorResult1.value);

    if (iteratorResult1.done === false) {

        const iteratorResult2 = iterator1.next();
        console.log(iteratorResult2.value);

    }

    const iterator2 = iterateOnMultiples([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);

    for (let value of iterator2) {
        console.log(value);
    }

}