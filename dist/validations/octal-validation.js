"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.octalNumberValidation = void 0;
const octalNumberValidation = (octalNumber) => {
    if (!/^[0-7]+$/.test(octalNumber)) {
        throw new Error('The provided octal number is invalid. Make sure it contains only digits from 0 to 7.');
    }
};
exports.octalNumberValidation = octalNumberValidation;
