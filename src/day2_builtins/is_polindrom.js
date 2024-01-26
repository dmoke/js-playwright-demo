function isPalindromeWithForLoop(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

const resultForLoop = isPalindromeWithForLoop("madam");
console.log(resultForLoop);  // true

function isPalindromeWithArrayMethods(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

const resultArrayMethods = isPalindromeWithArrayMethods("racecar");
console.log(resultArrayMethods);  // true


function isPalindromeWithRecursion(str) {
    if (str.length <= 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindromeWithRecursion(str.slice(1, -1));
}

const resultRecursion = isPalindromeWithRecursion("level");
console.log(resultRecursion);  // true

function isPalindromeWithEvery(str) {
    return str.split('').every((char, index) => char === str[str.length - 1 - index]);
}

const resultEvery = isPalindromeWithEvery("deified");
console.log(resultEvery);  // true

function isPalindromeWithRegex(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}

const resultRegex = isPalindromeWithRegex("A man, a plan, a canal, Panama!");
console.log(resultRegex);  // true
