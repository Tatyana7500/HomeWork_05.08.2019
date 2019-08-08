describe('HomeWork 05.08.2019', function () {
    describe('Factorial', function () {
        testData = [
            {
                n: undefined,
                expected: undefined,
            },
            {
                n: null,
                expected: undefined,
            },
            {
                n: -27,
                expected: undefined,
            },
            {
                n: 0,
                expected: 1,
            },
            {
                n: 1,
                expected: 1,
            },
            {
                n: 2,
                expected: 2,
            },
            {
                n: 5,
                expected: 120,
            },
            {
                n: 9,
                expected: 362880,
            }
        ];

    testData.forEach(data => {
        const {n, expected} = data;

        const actual = factorial(n);

        it(`should return ${expected} when n = ${n}`, () => {
            assert.strictEqual(actual, expected);
        });
      });
    });


    describe('MakeCounter', function () {
       let expected = [1,2,3,4,5,6,7,8,9,10];
       const value = makeCounter();

       expected.forEach(temp => {
           const actual = value();

           it(`should return ${temp} when counter caused by = ${temp}`, () => {
               assert.strictEqual(actual, temp);
           });
       });
    });

    describe('BinarySearch', function () {
        testData = [
            {
                array: undefined,
                n: undefined,
                start: undefined,
                end: undefined,
                expected: -1,
            },
            {
                array: null,
                n: null,
                start: null,
                end: null,
                expected: -1,
            },
            {
                array: undefined,
                n: 1,
                start: 0,
                end: 1,
                expected: -1,
            },
            {
                array: [1,2],
                n: undefined,
                start: 0,
                end: 2,
                expected: -1,
            },
            {
                array: [1,2],
                n: 1,
                start: undefined,
                end: 2,
                expected: -1,
            },
            {
                array: null,
                n: 1,
                start: 0,
                end: 1,
                expected: -1,
            },
            {
                array: [2,3],
                n: null,
                start: 0,
                end: 1,
                expected: -1,
            },
            {
                array: [2,3],
                n: 3,
                start: -5,
                end: 10,
                expected: -1,
            },
            {
                array: [1,3,6,8,9],
                n: 2,
                start: undefined,
                end: undefined,
                expected: -1,
            },
            {
                array: [1,3,6,8,9],
                n: 2,
                start: null,
                end: null,
                expected: -1,
            },
            {
                array: [2,3,6,5,4],
                n: 3,
                start: 10,
                end: 6,
                expected: -1,
            },
            {
                array: [1,2,6,9,10,11],
                n: 26,
                start: 0,
                end: 6,
                expected: -1,
            },
            {
                array: [1],
                n: 1,
                start: 0,
                end: 1,
                expected: 0,
            },
            {
                array: [1,2],
                n: 2,
                start: 0,
                end: 2,
                expected: 1,
            },
            {
                array: [1,2,6,9,10,11],
                n: 2,
                start: 0,
                end: 6,
                expected: 1,
            },
            {
                array: [1,2,6,9,10,11],
                n: 10,
                start: 0,
                end: 6,
                expected: 4,
            }
        ];

        testData.forEach(data => {
            const {array, start, end, n, expected} = data;

            const actual = binarySearch(array, start, end, n);

            it(`should return ${expected} when init array = [${array}], n = ${n}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('getNumberFibonacciСlosure', function () {
        let coused = 1;
        let expected = [1,1,2,3,5,8,13,21,34,55];
        const value = getNumberFibonacciClosure();

        expected.forEach(temp => {
            const actual = value();

            it(`should return ${temp} when counter caused by = ${coused}`, () => {
                assert.strictEqual(actual, temp);
            });

            coused++;
        });
    });

    describe('getNumberFibonacciRecursion', function () {
        const testData = [
            {
              n: undefined,
              expected: undefined
            },
            {
                n: null,
                expected: undefined
            },
            {
                n: 0,
                expected: undefined
            },
            {
                n: -27,
                expected: undefined
            },
            {
                n: 1,
                expected: '1 '
            },
            {
                n: 2,
                expected: '1 1 '
            },
            {
                n: 5,
                expected: '1 1 2 3 5 '
            },
            {
                n: 10,
                expected: '1 1 2 3 5 8 13 21 34 55 '
            }
        ];

        testData.forEach(data => {
            const {n, expected} = data;

            const actual = getNumberFibonacciRecursion(n);

            it(`should return ${expected} whet n = ${n}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });
});