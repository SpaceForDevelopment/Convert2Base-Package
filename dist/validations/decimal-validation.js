"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decimalNumberValidation = void 0;
const decimalNumberValidation = (decimalNumber) => {
    if (!/^\d+$/.test(decimalNumber)) {
        throw new Error('The provided decimal number is invalid. Make sure it contains only digits.');
    }
};
exports.decimalNumberValidation = decimalNumberValidation;
