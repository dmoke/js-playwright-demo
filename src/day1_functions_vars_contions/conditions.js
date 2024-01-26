function canSmoke(age){
    return age >= 18
}

test_age = 14
canSmoke(test_age) ? console.log(`person with age ${test_age} is not allowed to smoke`):console.log(`person with age ${test_age} is not allowed to smoke`)


function isAllowedToEnter(name, age, department) {
    if (age >= 18 && age <= 65 && (department !== "Restricted" && department !== "HR")) {
        return true;
    }
    return name.startsWith('VIP')
}

// Test case 1: Age is within the allowed range, and department is not Restricted or HR
console.assert(isAllowedToEnter("John", 25, "Sales") === true, "Test Case 1 Failed");

// Test case 2: Age is within the allowed range, but the department is HR
console.assert(isAllowedToEnter("Alice", 30, "HR") === false, "Test Case 2 Failed");

// Test case 3: Age is below 18
console.assert(isAllowedToEnter("Bob", 16, "IT") === false, "Test Case 3 Failed");

// Test case 4: Age is above 65
console.assert(isAllowedToEnter("Elder", 70, "Finance") === false, "Test Case 4 Failed");

// Test case 5: Name starts with 'VIP'
console.assert(isAllowedToEnter("VIP Guest", 40, "Marketing") === true, "Test Case 5 Failed");

// Test case 6: Department is Restricted
console.assert(isAllowedToEnter("Sam", 28, "Restricted") === false, "Test Case 6 Failed");

console.log("All test cases passed!");