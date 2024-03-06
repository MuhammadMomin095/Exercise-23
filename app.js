var car = 'subaru';
// Test 1: Equality comparison (true)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True
// Test 2: Strict equality comparison (true)
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); // True
// Test 3: Inequality comparison (false)
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru'); // false
// Test 4: Strict Inequality comparison (false)
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); // false
// Test 5: Less than comparison (false)
console.log("Is car < 'subaru'? I predict False.");
console.log(car < 'subaru'); // false (lexicographic comparison)
// Test 6: Greater than comparison (false)
console.log("Is car > 'subaru'? I predict False.");
console.log(car > 'subaru'); // false (lexicographic comparison)
// Test 7: Less than or equal comparison (true)
console.log("Is car <= 'subaru'? I predict True.");
console.log(car <= 'subaru'); // true
// Test 8: Greater than or equal comparison (true)
console.log("Is car >= 'subaru'? I predict True.");
console.log(car >= 'subaru'); // true
// Test 9: Checking truthiness (true)
console.log("Is car? I predict True.");
console.log(car); // true(non-empty string is truthy)
