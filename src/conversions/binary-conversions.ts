import { binaryNumberValidation } from '../validations/binary-validation';

export function binToOct(binaryNumber: string): string {
    let octalNumber = '';
    let decimalNumber = 0;
    let powerOfTwo = 0;

    binaryNumberValidation(binaryNumber);

    for (let i = binaryNumber.length - 1; i >= 0; i--) {
        decimalNumber += parseInt(binaryNumber[i]) * (2 ** powerOfTwo);
        powerOfTwo++;
    }

    while (decimalNumber !== 0) {
        octalNumber = (decimalNumber % 8).toString() + octalNumber;
        decimalNumber = Math.floor(decimalNumber / 8);
    }

    return octalNumber;
}

export function binToDec(binaryNumber: string): string {
    let decimalNumber = 0;
    let powerOfTwo = 0;

    binaryNumberValidation(binaryNumber);

    for (let i = binaryNumber.length - 1; i >= 0; i--) {
        decimalNumber += parseInt(binaryNumber[i]) * (2 ** powerOfTwo);
        powerOfTwo++;
    }

    return decimalNumber.toString();
}

export function binToHex(binaryNumber: string): string {
    let decimalNumber = 0;
    let powerOfTwo = 0;
    
    binaryNumberValidation(binaryNumber);

    for (let i = binaryNumber.length - 1; i >= 0; i--) {
        decimalNumber += parseInt(binaryNumber[i]) * (2 ** powerOfTwo);
        powerOfTwo++;
    }

    const hexNumber = decimalNumber.toString(16);

    return hexNumber.toUpperCase();
}