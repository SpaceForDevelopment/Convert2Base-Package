import { binToDec, binToHex, binToOct } from './conversions/binary-conversions';
import { decToBin, decToHex, decToOct } from './conversions/decimal-conversions';
import { hexToBin, hexToDec, hexToOct } from './conversions/hexadecimal-conversions';
import { octToBin, octToDec, octToHex } from './conversions/octal-conversions';

console.log('Testing binToOct:');
console.log(binToOct('101010')); // Output: '52'

console.log('Testing binToDec:');
console.log(binToDec('101010')); // Output: '42'

console.log('Testing binToHex:');
console.log(binToHex('101010')); // Output: '2A'

console.log('Testing octToBin:');
console.log(octToBin('52')); // Output: '101010'

console.log('Testing octToDec:');
console.log(octToDec('52')); // Output: '42'

console.log('Testing octToHex:');
console.log(octToHex('52')); // Output: '2A'

console.log('Testing decToBin:');
console.log(decToBin('42')); // Output: '101010'

console.log('Testing decToOct:');
console.log(decToOct('42')); // Output: '52'

console.log('Testing decToHex:');
console.log(decToHex('42')); // Output: '2A'

console.log('Testing hexToBin:');
console.log(hexToBin('2A')); // Output: '00101010'

console.log('Testing hexToOct:');
console.log(hexToOct('2A')); // Output: '52'

console.log('Testing hexToDec:');
console.log(hexToDec('2A')); // Output: '42'
