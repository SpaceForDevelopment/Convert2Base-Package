"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binToHex = exports.binToDec = exports.binToOct = void 0;
const binary_validation_1 = require("../validations/binary-validation");
function binToOct(binaryNumber) {
    let octalNumber = '';
    let decimalNumber = 0;
    let powerOfTwo = 0;
    (0, binary_validation_1.binaryNumberValidation)(binaryNumber);
    for (let i = binaryNumber.length - 1; i >= 0; i--) {
        decimalNumber += parseInt(binaryNumber[i]) * (2 ** powerOfTwo);
        powerOfTwo++;
    }
    while (decimalNumber !== 0) {
        octalNumber = (decimalNumber % 8).toString() + octalNumber;
        decimalNumber = Math.floor(decimalNumber / 8);
    }
    return octalNumber;
}
exports.binToOct = binToOct;
function binToDec(binaryNumber) {
    let decimalNumber = 0;
    let powerOfTwo = 0;
    (0, binary_validation_1.binaryNumberValidation)(binaryNumber);
    for (let i = binaryNumber.length - 1; i >= 0; i--) {
        decimalNumber += parseInt(binaryNumber[i]) * (2 ** powerOfTwo);
        powerOfTwo++;
    }
    return decimalNumber.toString();
}
exports.binToDec = binToDec;
function binToHex(binaryNumber) {
    let decimalNumber = 0;
    let powerOfTwo = 0;
    (0, binary_validation_1.binaryNumberValidation)(binaryNumber);
    for (let i = binaryNumber.length - 1; i >= 0; i--) {
        decimalNumber += parseInt(binaryNumber[i]) * (2 ** powerOfTwo);
        powerOfTwo++;
    }
    const hexNumber = decimalNumber.toString(16);
    return hexNumber.toUpperCase();
}
exports.binToHex = binToHex;
