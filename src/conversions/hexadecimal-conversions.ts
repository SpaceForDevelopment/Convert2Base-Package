import { hexadecimalNumberValidation } from '../validations/hexadecimal-validation';
import { binToOct } from './binary-conversions';
import { decToBin } from './decimal-conversions';

export function hexToBin(hexadecimalNumber: string): string {
    let binaryNumber = '';
    
    hexadecimalNumberValidation(hexadecimalNumber);

    for (let i = 0; i < hexadecimalNumber.length; i++) {
        const digit = parseInt(hexadecimalNumber[i], 16);
        binaryNumber += decToBin(digit.toString()).padStart(4, '0');
    }

    return binaryNumber;
}

export function hexToOct(hexadecimalNumber: string): string {
    let octalNumber = '';
    
    hexadecimalNumberValidation(hexadecimalNumber);

    const binaryNumber = hexToBin(hexadecimalNumber);
    octalNumber = binToOct(binaryNumber);

    return octalNumber;
}

export function hexToDec(hexadecimalNumber: string): string {
    let decimalNumber = '';
    
    hexadecimalNumberValidation(hexadecimalNumber);

    decimalNumber = parseInt(hexadecimalNumber, 16).toString();

    return decimalNumber;
}