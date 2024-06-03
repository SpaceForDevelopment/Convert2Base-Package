import { binaryNumberValidation } from '../validations/binary-validation';

export const binToOct = (binaryNumber: string): string => {
    let decimalNumber = 0;
    let octalNumber = '';

    binaryNumberValidation(binaryNumber);

    decimalNumber = parseInt(binToDec(binaryNumber));

    while (decimalNumber !== 0) {
        octalNumber = (decimalNumber % 8).toString() + octalNumber;
        decimalNumber = Math.floor(decimalNumber / 8);
    }

    return octalNumber;
};

export const binToDec = (binaryNumber: string): string => {
    let decimalNumber = 0;
    let powerOfTwo = 0;

    binaryNumberValidation(binaryNumber);

    for (let i = binaryNumber.length - 1; i >= 0; i--) {
        decimalNumber += parseInt(binaryNumber[i]) * 2 ** powerOfTwo;
        powerOfTwo++;
    }

    return decimalNumber.toString();
};

export const binToHex = (binaryNumber: string): string => {
    let decimalNumber = 0;
    let hexadecimalNumber = '';

    binaryNumberValidation(binaryNumber);

    decimalNumber = parseInt(binToDec(binaryNumber));
    hexadecimalNumber = decimalNumber.toString(16);

    return hexadecimalNumber.toUpperCase();
};
