"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binaryNumberValidation = void 0;
function binaryNumberValidation(binaryNumber) {
    if (!/^[01]+$/.test(String(binaryNumber))) {
        throw new Error('The provided binary number is invalid. Make sure it contains only 0s and 1s.');
    }
}
exports.binaryNumberValidation = binaryNumberValidation;
