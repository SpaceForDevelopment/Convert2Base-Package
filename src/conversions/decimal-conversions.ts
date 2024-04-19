import { decimalNumberValidation } from '../validations/decimal-validation';

export function decToBin(decimalNumber: string): string {
    let binaryNumber = '';
    let quotient = parseInt(decimalNumber);

    decimalNumberValidation(decimalNumber);

    while (quotient !== 0) {
        binaryNumber = (quotient % 2).toString() + binaryNumber;
        quotient = Math.floor(quotient / 2);
    }

    return binaryNumber;
}

export function decToOct(decimalNumber: string): string {
    let octalNumber = '';
    let quotient = parseInt(decimalNumber);

    decimalNumberValidation(decimalNumber);

    while (quotient !== 0) {
        octalNumber = (quotient % 8).toString() + octalNumber;
        quotient = Math.floor(quotient / 8);
    }

    return octalNumber;
}

export function decToHex(decimalNumber: string): string {
    let hexNumber = '';
    let quotient = parseInt(decimalNumber);

    decimalNumberValidation(decimalNumber);

    while (quotient !== 0) {
        hexNumber = (quotient % 16).toString(16).toUpperCase() + hexNumber;
        quotient = Math.floor(quotient / 16);
    }

    return hexNumber;
}