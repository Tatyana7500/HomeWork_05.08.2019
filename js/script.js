function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else if (!n || n < 0) {
        return;
    } else {
        return n * factorial(n-1);
    }
}

function makeCounter() {
    let counter = 1;

    return function () {
        return counter++;
    };
}

function binarySearch(array, start, end, n) {
    let index;

    if (start > end || start < 0 || end < 0 || !array || !n || start === undefined || start === null || !end) {
        index = -1;
    } else {
        let middle = parseInt((start + end) / 2);

        if (array[middle] === n) {
            index = middle;
        } else if (n < array[middle]) {
            index = binarySearch(array, start, middle - 1, n);
        } else {
            index = binarySearch(array, middle + 1, end, n);
        }
    }

    return index;
}

function getNumberFibonacciClosure() {
    let one = 1;
    let two = 1;

    return function () {
        let result = one;
        one = two;
        two = one + result;

        return result;
    }
}

function getNumberFibonacciRecursion(n) {
    let fList = '1 ';

    if (!n || n < 0) {
        return;
    } else if (n === 1) {
        return fList;
    } else {
        for (let i = 2; i <= n; i++) {
            fList += `${getNumberFibonacci(i)} `;
        }
    }

    return fList;

    function getNumberFibonacci(n) {
        if (n === 0) {
            return 0;
        } else if (n === 1) {
            return 1;
        } else {
            return getNumberFibonacci(n - 1) + getNumberFibonacci(n - 2);
        }
    }
}