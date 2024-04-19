"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexadecimalNumberValidation = void 0;
function hexadecimalNumberValidation(hexadecimalNumber) {
    if (!/^[0-9A-Fa-f]+$/.test(hexadecimalNumber)) {
        throw new Error('The provided hexadecimal number is invalid. Make sure it contains only hexadecimal digits.');
    }
}
exports.hexadecimalNumberValidation = hexadecimalNumberValidation;
