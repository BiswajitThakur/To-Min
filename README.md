# to-min
**to-min** is a powerful and easy-to-use JavaScript library designed to optimize your HTML, JavaScript and CSS code by removing comments, unnecessary spaces, and new lines. Enhance your web performance by reducing the size of your code without compromising functionality.

## Installation
```bash
npm install to-min
```
## Language Support
- [ ] HTML
- [ ] CSS
- [x] JavaScript

## Example - JavaScript
```js
const toMin = require('to-min');

const minJs = toMin.toMinJs(`
'use strict';
let arr   = [122   ,   576,86, 0,   11]; //comment
console.log(
    (function(a){
    console.log(/* "Comment //" */ a);
    let q = a.map((v)=>
        v*v);
    console.log(q);
    let s = "// This /* is \\"   */ String. '  ";
    return       s       ; //      " hello "
})(arr)
);
const hello = /regex  \\/   \\$/g;
console.log(typeof hello);
`);
console.log(minJs);
```
```
'use strict';let arr=[122,576,86,0,11];console.log((function(a){console.log(a);let q=a.map((v)=>v*v);console.log(q);let s="// This /* is \"   */ String. '  ";return s;})(arr));const hello=/regex  \/   \$/g;console.log(typeof hello);
```


