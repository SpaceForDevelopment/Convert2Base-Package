<div  align="center">
	<h1  align="center">GF Converter Package</h1>
	<a  href="https://gf-converter.vercel.app/" target="_blank">
		<img  src="https://i.im.ge/2024/05/02/ZCOE9F.Banner-Documentacao-GF-Converter.png" alt="Docusaurus">
	</a>
</div>
<br>
<div align="center">
    <a href="https://github.com/nodejs" target="_blank"><img src="https://img.shields.io/badge/made_with-Node.js-green" alt="Made with Node.js"></a>
    <a href="https://github.com/ArturColen/GF-Converter-Package" target="_blank"><img src="https://img.shields.io/badge/npm_package-v1.0.0-blue" alt="NPM Package version"></a>
    <a href="https://gf-converter.vercel.app/" target="_blank"><img src="https://img.shields.io/badge/status-in_production-yellow" alt="Status: in production"></a>
    <a href="https://github.com/ArturColen/GF-Converter-Package/blob/main/LICENSE.md" target="_blank"><img src="https://img.shields.io/badge/license-MIT-red" alt="MIT License"></a>
</div>

## Introduction
GF Converter is a versatile npm package designed for Node.js projects, facilitating essential base conversions such as binary, octal, decimal, and hexadecimal. It aims to streamline these calculations, offering a straightforward approach to integrating base conversion functionalities into Node.js applications.

## Installation
You can install the Base Conversion Kit using `npm`:

```bash
npm install gf-converter
 ```

## Importing
To import the GF Converter package into your project, you can use one of the two main ways of importing a library with JavaScript: through Node.js require or with ES6 imports.

```javascript
// Using Node.js `require()`
const gfConverter = require('gf-converter');

// Using ES6 imports
import gfConverter from 'gf-converter';
```

## Usage
The GF Converter package has 12 functions for converting between the main existing base numbers:
* binToOct('number')
* binToDec('number')
* binToHex('number')
* octToBin('number')
* octToDec('number')
* octToHex('number')
* decToBin('number')
* decToOct('number')
* decToHex('number')
* hexToBin('number')
* hexToOct('number')
* hexToDec('number')

```javascript
import gfConverter from 'gf-converter';

console.log('Testing binToOct:');
console.log(gfConverter.binToOct('101010')); // Output: '52'

console.log('Testing binToDec:');
console.log(gfConverter.binToDec('101010')); // Output: '42'

console.log('Testing binToHex:');
console.log(gfConverter.binToHex('101010')); // Output: '2A'

console.log('Testing octToBin:');
console.log(gfConverter.octToBin('52')); // Output: '101010'

console.log('Testing octToDec:');
console.log(gfConverter.octToDec('52')); // Output: '42'

console.log('Testing octToHex:');
console.log(gfConverter.octToHex('52')); // Output: '2A'

console.log('Testing decToBin:');
console.log(gfConverter.decToBin('42')); // Output: '101010'

console.log('Testing decToOct:');
console.log(gfConverter.decToOct('42')); // Output: '52'

console.log('Testing decToHex:');
console.log(gfConverter.decToHex('42')); // Output: '2A'

console.log('Testing hexToBin:');
console.log(gfConverter.hexToBin('2A')); // Output: '101010'

console.log('Testing hexToOct:');
console.log(gfConverter.hexToOct('2A')); // Output: '52'

console.log('Testing hexToDec:');
console.log(gfConverter.hexToDec('2A')); // Output: '42'
```

You can view and run the example code for using the package at [src/test.ts](https://github.com/ArturColen/GF-Converter-Package/blob/main/src/test.ts) or via [Repl.it](https://replit.com/@ArturColen/GFConverterTest).

## Contact
If you want to get in touch regarding matters related to this project, you have two main channels: the [developers' company website](https://gf-company.vercel.app/) or [email](mailto:arturbcolen@gmail.com).

## Contributors
The complete GF Converter project was developed by Artur Bomtempo and Letícia França. Artur contributed to the NPM package, API, and chatbot, while Letícia created the entire graphical interface of the project, which is hosted on the web.

| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/96635074?v=4" width=115><br><sub>Artur Bomtempo</sub>](https://github.com/ArturColen) |  [<img loading="lazy" src="https://avatars.githubusercontent.com/u/99284224?v=4" width=115><br><sub>Letícia França</sub>](https://github.com/LeticiaSFranca) |
| :---: | :---: |

## License
Copyright (c) 2024 Artur Bomtempo Colen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.