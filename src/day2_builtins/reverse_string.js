function reverseStringWithForLoop(str) {
    let reversedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
}

const reversedForLoop = reverseStringWithForLoop("Hello, World!");
console.log(reversedForLoop);

function reverseStringWithArrayMethods(str) {
    return str.split('').reverse().join('');
}

const reversedArrayMethods = reverseStringWithArrayMethods("Hello, World!");
console.log(reversedArrayMethods);

function reverseStringWithSpreadOperator(str) {
    return [...str].reverse().join('');
}

const reversedSpreadOperator = reverseStringWithSpreadOperator("Hello, World!");
console.log(reversedSpreadOperator);

function reverseStringWithRecursion(str) {
    if (str === '') {
        return str;
    } else {
        return reverseStringWithRecursion(str.substr(1)) + str[0];
    }
}

const reversedRecursion = reverseStringWithRecursion("Hello, World!");
console.log(reversedRecursion);

function reverseStringWithReduce(str) {
    return str.split('').reduce((reversed, char) => char + reversed, '');
}

const reversedReduce = reverseStringWithReduce("Hello, World!");
console.log(reversedReduce);

function reverseStringWithArrayFrom(str) {
    return Array.from(str).reverse().join('');
}

const reversedArrayFrom = reverseStringWithArrayFrom("Hello, World!");
console.log(reversedArrayFrom);
