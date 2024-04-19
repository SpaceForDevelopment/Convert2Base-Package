"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decToHex = exports.decToOct = exports.decToBin = void 0;
const decimal_validation_1 = require("../validations/decimal-validation");
function decToBin(decimalNumber) {
    let binaryNumber = '';
    let quotient = parseInt(decimalNumber);
    (0, decimal_validation_1.decimalNumberValidation)(decimalNumber);
    while (quotient !== 0) {
        binaryNumber = (quotient % 2).toString() + binaryNumber;
        quotient = Math.floor(quotient / 2);
    }
    return binaryNumber;
}
exports.decToBin = decToBin;
function decToOct(decimalNumber) {
    let octalNumber = '';
    let quotient = parseInt(decimalNumber);
    (0, decimal_validation_1.decimalNumberValidation)(decimalNumber);
    while (quotient !== 0) {
        octalNumber = (quotient % 8).toString() + octalNumber;
        quotient = Math.floor(quotient / 8);
    }
    return octalNumber;
}
exports.decToOct = decToOct;
function decToHex(decimalNumber) {
    let hexNumber = '';
    let quotient = parseInt(decimalNumber);
    (0, decimal_validation_1.decimalNumberValidation)(decimalNumber);
    while (quotient !== 0) {
        hexNumber = (quotient % 16).toString(16).toUpperCase() + hexNumber;
        quotient = Math.floor(quotient / 16);
    }
    return hexNumber;
}
exports.decToHex = decToHex;
