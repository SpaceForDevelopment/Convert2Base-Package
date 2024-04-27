"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexToDec = exports.hexToOct = exports.hexToBin = void 0;
const hexadecimal_validation_1 = require("../validations/hexadecimal-validation");
const binary_conversions_1 = require("./binary-conversions");
const decimal_conversions_1 = require("./decimal-conversions");
const hexToBin = (hexadecimalNumber) => {
    let digit = 0;
    let binaryNumber = '';
    (0, hexadecimal_validation_1.hexadecimalNumberValidation)(hexadecimalNumber);
    for (let i = 0; i < hexadecimalNumber.length; i++) {
        digit = parseInt(hexadecimalNumber[i], 16);
        binaryNumber += (0, decimal_conversions_1.decToBin)(digit.toString()).padStart(4, '0');
    }
    return binaryNumber;
};
exports.hexToBin = hexToBin;
const hexToOct = (hexadecimalNumber) => {
    let binaryNumber = '';
    let octalNumber = '';
    (0, hexadecimal_validation_1.hexadecimalNumberValidation)(hexadecimalNumber);
    binaryNumber = (0, exports.hexToBin)(hexadecimalNumber);
    octalNumber = (0, binary_conversions_1.binToOct)(binaryNumber);
    return octalNumber;
};
exports.hexToOct = hexToOct;
const hexToDec = (hexadecimalNumber) => {
    let decimalNumber = '';
    (0, hexadecimal_validation_1.hexadecimalNumberValidation)(hexadecimalNumber);
    decimalNumber = parseInt(hexadecimalNumber, 16).toString();
    return decimalNumber;
};
exports.hexToDec = hexToDec;
