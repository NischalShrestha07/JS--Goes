function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numberChars = "0123456789"
    const symbolChars = "!@#$%^&*()_+="

    let allowedChars = ""
    let password = ""

    allowedChars += includeLowerCase ? lowercaseChars : ""
    allowedChars += includeUpperCase ? uppercaseChars : ""
    allowedChars += includeNumbers ? numberChars : ""
    allowedChars += includeSymbols ? symbolChars : ""


    console.log(allowedChars);
    return ''
}


const passwordLength = 12;
const includeLowerCase = true
const includeUpperCase = true
const includeNumbers = true
const includeSymbols = true

const password = generatePassword(passwordLength,
    includeLowerCase,
    includeUpperCase,
    includeNumbers,
    includeSymbols)

console.log(`Generated Password": ${password}`);