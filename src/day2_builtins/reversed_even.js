// Approach 1: Using filter and reverse
function getReversedEvensArray(inputArray) {
    const reversedEvens = inputArray
        .filter(number => number % 2 === 0)
        .reverse();

    return reversedEvens;
}

// Example usage:
const inputArray = [1, 2, 3, 4];
const result = getReversedEvensArray(inputArray);
console.log(result);

// Approach 2: Using reduce and unshift
function getReversedEvensArray2(inputArray) {
    const reversedEvens = inputArray
        .filter(number => number % 2 === 0)
        .reduce((acc, num) => {
            acc.unshift(num);
            return acc;
        }, []);

    return reversedEvens;
}

// Example usage:
const inputArray2 = [1, 2, 3, 4];
const result2 = getReversedEvensArray2(inputArray2);
console.log(result2);
