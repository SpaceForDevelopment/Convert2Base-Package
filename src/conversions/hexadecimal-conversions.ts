import { hexadecimalNumberValidation } from '../validations/hexadecimal-validation';
import { binToOct } from './binary-conversions';
import { decToBin } from './decimal-conversions';

export const hexToBin = (hexadecimalNumber: string): string => {
    let digit = 0;
    let binaryNumber = '';
    
    hexadecimalNumberValidation(hexadecimalNumber);

    for (let i = 0; i < hexadecimalNumber.length; i++) {
        digit = parseInt(hexadecimalNumber[i], 16);
        binaryNumber += decToBin(digit.toString()).padStart(4, '0');
    }

    return binaryNumber;
};

export const hexToOct = (hexadecimalNumber: string): string => {
    let binaryNumber = '';
    let octalNumber = '';
    
    hexadecimalNumberValidation(hexadecimalNumber);

    binaryNumber = hexToBin(hexadecimalNumber);
    octalNumber = binToOct(binaryNumber);

    return octalNumber;
};

export const hexToDec = (hexadecimalNumber: string): string => {
    let decimalNumber = '';
    
    hexadecimalNumberValidation(hexadecimalNumber);

    decimalNumber = parseInt(hexadecimalNumber, 16).toString();

    return decimalNumber;
};