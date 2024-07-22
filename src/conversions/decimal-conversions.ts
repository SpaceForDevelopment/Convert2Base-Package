import { decimalNumberValidation } from '../validations/decimal-validation';

export const decToBin = (decimalNumber: string): string => {
    let binaryNumber = '';
    let quotient = parseInt(decimalNumber);

    decimalNumberValidation(decimalNumber);

    while (quotient !== 0) {
        binaryNumber = (quotient % 2).toString() + binaryNumber;
        quotient = Math.floor(quotient / 2);
    }

    return binaryNumber;
};

export const decToOct = (decimalNumber: string): string => {
    let octalNumber = '';
    let quotient = parseInt(decimalNumber);

    decimalNumberValidation(decimalNumber);

    while (quotient !== 0) {
        octalNumber = (quotient % 8).toString() + octalNumber;
        quotient = Math.floor(quotient / 8);
    }

    return octalNumber;
};

export const decToHex = (decimalNumber: string): string => {
    let hexadecimalNumber = '';
    let quotient = parseInt(decimalNumber);

    decimalNumberValidation(decimalNumber);

    while (quotient !== 0) {
        hexadecimalNumber = (quotient % 16).toString(16).toUpperCase() + hexadecimalNumber;
        quotient = Math.floor(quotient / 16);
    }

    return hexadecimalNumber;
};
