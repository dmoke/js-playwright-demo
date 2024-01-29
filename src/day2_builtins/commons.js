function maxCommonPrefix(strings) {
    if (!Array.isArray(strings) || strings.length === 0) {
        return ''; // Return empty string for invalid input
    }

    // Sort the strings to simplify the comparison
    strings.sort();

    let commonPrefix = '';
    
    if (strings.length > 1) {
        const minLength = Math.min(strings[0].length, strings[strings.length - 1].length);

        // Iterate through characters and find the common prefix
        for (let i = 0; i < minLength; i++) {
            if (strings.every(str => str[i] === strings[0][i])) {
                commonPrefix += strings[0][i];
            } else {
                break; // Stop when a difference is found
            }
        }
    } else {
        // If there's only one string, the common prefix is the string itself
        commonPrefix = strings[0];
    }

    return commonPrefix;
}


const inputArray = ["cdaboc", "cabob", "cabolamr"];
const result = maxCommonPrefix(inputArray);
console.log(result);
