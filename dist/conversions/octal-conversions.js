"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.octToHex = exports.octToDec = exports.octToBin = void 0;
const octal_validation_1 = require("../validations/octal-validation");
function octToBin(octalNumber) {
    let binaryNumber = '';
    let decimalNumber = 0;
    let powerOfEight = 0;
    (0, octal_validation_1.octalNumberValidation)(octalNumber);
    for (let i = octalNumber.length - 1; i >= 0; i--) {
        decimalNumber += parseInt(octalNumber[i]) * (8 ** powerOfEight);
        powerOfEight++;
    }
    while (decimalNumber !== 0) {
        binaryNumber = (decimalNumber % 2).toString() + binaryNumber;
        decimalNumber = Math.floor(decimalNumber / 2);
    }
    return binaryNumber;
}
exports.octToBin = octToBin;
function octToDec(octalNumber) {
    let decimalNumber = 0;
    let powerOfEight = 0;
    (0, octal_validation_1.octalNumberValidation)(octalNumber);
    for (let i = octalNumber.length - 1; i >= 0; i--) {
        decimalNumber += parseInt(octalNumber[i]) * (8 ** powerOfEight);
        powerOfEight++;
    }
    return decimalNumber.toString();
}
exports.octToDec = octToDec;
function octToHex(octalNumber) {
    let decimalNumber = 0;
    let powerOfEight = 0;
    (0, octal_validation_1.octalNumberValidation)(octalNumber);
    for (let i = octalNumber.length - 1; i >= 0; i--) {
        decimalNumber += parseInt(octalNumber[i]) * (8 ** powerOfEight);
        powerOfEight++;
    }
    const hexNumber = decimalNumber.toString(16);
    return hexNumber.toUpperCase();
}
exports.octToHex = octToHex;
