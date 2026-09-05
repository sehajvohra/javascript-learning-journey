// JAVASCRIPT STRINGS

// 1. Creating Strings
const name = "Sehaj";
const repoCount = 4;
console.log(name);
console.log(repoCount);

// 2. String Concatenation
console.log(name + repoCount + " Value");

// 3. Template Literals
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Expressions inside template literals
const a = 10
const b = 20
console.log(`The sum is ${a + b}`);

// 4. String Object
const gameName = new String("Sehaj-hc-com")
console.log(gameName)

// 5. Accessing Characters
console.log(gameName[0]);
console.log(gameName[2]);

// 6. String Length
console.log(gameName.length);

// 7. Prototype
console.log(gameName.__proto__);

// 8. Convert to Uppercase
console.log(gameName.toLocaleUpperCase)

// 9. Convert to Lowercase
console.log(gameName.toLowerCase)

// 10. charAt()
console.log(gameName.charAt(2))

// 11. charCodeAt()
console.log(gameName.charCodeAt(2))

// 12. indexOf()
console.log(gameName.indexOf("t"));

// 13. lastIndexOf()
console.log(gameName.lastIndexOf("h"));

// 14. includes()
console.log(gameName.includes("hitesh"));
console.log(gameName.includes("com"));

// 15. startsWith()
console.log(gameName.startsWith("hitesh"));

// 16. endsWith()
console.log(gameName.endsWith("com"));

// 17. substring()
const newString = gameName.substring(0, 4);
console.log(newString);

// 18. slice()
const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

// Negative index with slice()
console.log(gameName.slice(-8));

// 19. substr()
// Older method. Avoid using it in new code.
console.log(gameName.substr(0, 4));

// 20. trim()
const newStringOne = "   hitesh    ";
console.log(newStringOne);
console.log(newStringOne.trim());

// 21. trimStart()
const text1 = "   hitesh";
console.log(text1.trimStart());

// 22. trimEnd()
const text2 = "hitesh   ";
console.log(text2.trimEnd());

// 23. replace()
const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace("%20", "-"));

// 24. replaceAll()
const sentence = "JavaScript is fun. JavaScript is powerful.";
console.log(sentence.replaceAll("JavaScript", "JS"));

// 25. repeat()
console.log("Hi ".repeat(3));

// 26. split()
console.log(gameName.split("-"));

// Split by space
const message = "I love JavaScript";
console.log(message.split(" "));

// 27. concat()
const firstName = "Hitesh";
const lastName = "Choudhary";
console.log(firstName.concat(" ", lastName));

// 28. String Comparison
console.log("apple" === "apple");
console.log("apple" === "Apple");

// 29. String Comparison using < and >
console.log("a" < "b");
console.log("z" > "a");

// 30. Check Empty String
const emptyString = "";
console.log(emptyString.length === 0);

// 31. Convert Number to String
const number = 100;
const numberString = String(number);
console.log(numberString);
console.log(typeof numberString);

// 32. Convert String to Number

const stringNumber = "100";
const convertedNumber = Number(stringNumber);
console.log(convertedNumber);
console.log(typeof convertedNumber);

// 33. String Immutability
let originalString = "hitesh";
originalString.toUpperCase();
console.log(originalString);

// Original string is still "hitesh"
// String methods return a new string

originalString = originalString.toUpperCase();
console.log(originalString);

// 34. Escape Characters
const quote = "He said \"Hello\"";
console.log(quote);

// Single quotes inside double quotes
const sentenceTwo = "It's a beautiful day";
console.log(sentenceTwo);

// New line
const multiLine = "Hello\nWorld";
console.log(multiLine);

// Tab
const tabText = "Hello\tWorld";
console.log(tabText);

// 35. Raw String using String.raw()
console.log(String.raw`Hello\nWorld`);

// 36. Check Character at Last Position
console.log(gameName[gameName.length - 1]);

// 37. at()
console.log(gameName.at(2));

// Negative index with at()
console.log(gameName.at(-1));

// 38. Find index using indexOf()
const email = "hitesh@gmail.com";
console.log(email.indexOf("@"));

// 39. Extract username from email
console.log(email.slice(0, email.indexOf("@")));

// 40. Extract domain from email
console.log(email.slice(email.indexOf("@") + 1));