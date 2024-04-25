import { octalNumberValidation } from '../validations/octal-validation';
import { decToBin } from './decimal-conversions';

export function octToBin(octalNumber: string): string {
    let decimalNumber = 0;
    let binaryNumber = '';

    octalNumberValidation(octalNumber);

    decimalNumber = parseInt(octToDec(octalNumber));
    binaryNumber = decToBin(decimalNumber.toString());

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
    let hexadecimalNumber = '';

    octalNumberValidation(octalNumber);

    decimalNumber = parseInt(octToDec(octalNumber));
    hexadecimalNumber = decimalNumber.toString(16);

    return hexadecimalNumber.toUpperCase();
}