// ==========================================
// JavaScript Comparisons
// ==========================================

// 1. Basic Comparisons

console.log(2 > 1);      // true
console.log(2 >= 1);     // true
console.log(2 < 1);      // false
console.log(2 <= 1);     // false
console.log(2 == 1);     // false
console.log(2 != 1);     // true


// 2. String and Number Comparison
// String is converted to Number in these comparisons

console.log("2" > 1);    // true
console.log("02" > 1);   // true

console.log("2" < 10);   // true
console.log("10" > 2);   // true


// 3. null Comparisons
// null becomes 0 with >, <, >= and <=

console.log(null > 0);   // false
console.log(null == 0);  // false
console.log(null >= 0);  // true


// 4. undefined Comparisons
// undefined becomes NaN
// Comparisons with NaN are false

console.log(undefined == 0);  // false
console.log(undefined > 0);   // false
console.log(undefined < 0);   // false


// 5. == vs ===

// == checks value after type conversion

console.log("2" == 2);       // true
console.log(2 == "2");       // true
console.log(true == 1);      // true


// === checks value AND data type
// No type conversion

console.log("2" === 2);      // false
console.log(2 === 2);        // true
console.log(true === 1);     // false


// 6. != vs !==

// != allows type conversion

console.log("2" != 2);       // false

// !== checks value AND type

console.log("2" !== 2);      // true
console.log(2 !== 2);        // false


// 7. More Practice

console.log(5 == "5");       // true
console.log(5 === "5");      // false

console.log(0 == false);     // true
console.log(0 === false);    // false

console.log(1 == true);      // true
console.log(1 === true);     // false

console.log(null == undefined);   // true
console.log(null === undefined);  // false


// ==========================================
// IMPORTANT RULES
// ==========================================

// >, <, >=, <=
// Usually perform type conversion when needed

// ==
// Compares values after type conversion

// ===
// Compares value AND type
// No type conversion

// null == undefined
// true

// null == 0
// false

// null >= 0
// true

// undefined > 0
// false

// undefined < 0
// false

// undefined == 0
// false