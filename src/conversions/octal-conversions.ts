import { octalNumberValidation } from '../validations/octal-validation';

export function octToBin(octalNumber: string): string {
    let binaryNumber = '';
    let decimalNumber = 0;
    let powerOfEight = 0;

    octalNumberValidation(octalNumber);

    for (let i = octalNumber.length - 1; i >= 0; i--) {
        decimalNumber += parseInt(octalNumber[i]) * (8 ** powerOfEight);
        powerOfEight++;
    }

    while (decimalNumber !== 0) {
        binaryNumber = (decimalNumber % 2).toString() + binaryNumber;
        decimalNumber = Math.floor(decimalNumber / 2);
    }

    return binaryNumber;
}

export function octToDec(octalNumber: string): string {
    let decimalNumber = 0;
    let powerOfEight = 0;

    octalNumberValidation(octalNumber);

    for (let i = octalNumber.length - 1; i >= 0; i--) {
        decimalNumber += parseInt(octalNumber[i]) * (8 ** powerOfEight);
        powerOfEight++;
    }

    return decimalNumber.toString();
}

export function octToHex(octalNumber: string): string {
    let decimalNumber = 0;
    let powerOfEight = 0;

    octalNumberValidation(octalNumber);

    for (let i = octalNumber.length - 1; i >= 0; i--) {
        decimalNumber += parseInt(octalNumber[i]) * (8 ** powerOfEight);
        powerOfEight++;
    }

    const hexNumber = decimalNumber.toString(16);

    return hexNumber.toUpperCase();
}