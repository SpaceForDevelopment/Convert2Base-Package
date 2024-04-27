"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.octToHex = exports.octToDec = exports.octToBin = void 0;
const octal_validation_1 = require("../validations/octal-validation");
const decimal_conversions_1 = require("./decimal-conversions");
const octToBin = (octalNumber) => {
    let decimalNumber = 0;
    let binaryNumber = '';
    (0, octal_validation_1.octalNumberValidation)(octalNumber);
    decimalNumber = parseInt((0, exports.octToDec)(octalNumber));
    binaryNumber = (0, decimal_conversions_1.decToBin)(decimalNumber.toString());
    return binaryNumber;
};
exports.octToBin = octToBin;
const octToDec = (octalNumber) => {
    let decimalNumber = 0;
    let powerOfEight = 0;
    (0, octal_validation_1.octalNumberValidation)(octalNumber);
    for (let i = octalNumber.length - 1; i >= 0; i--) {
        decimalNumber += parseInt(octalNumber[i]) * (8 ** powerOfEight);
        powerOfEight++;
    }
    return decimalNumber.toString();
};
exports.octToDec = octToDec;
const octToHex = (octalNumber) => {
    let decimalNumber = 0;
    let hexadecimalNumber = '';
    (0, octal_validation_1.octalNumberValidation)(octalNumber);
    decimalNumber = parseInt((0, exports.octToDec)(octalNumber));
    hexadecimalNumber = decimalNumber.toString(16);
    return hexadecimalNumber.toUpperCase();
};
exports.octToHex = octToHex;
