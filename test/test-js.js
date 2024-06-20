const test = require('node:test');
const assert = require('node:assert');

const { toMinJs } = require('./..');

function testJs() {
    let inputOutputs = [
        {
            input: "",
            output: ""
        },
        {
            input: " ",
            output: ""
        },
        {
            input: "   ",
            output: ""
        },
        {
            input: `
          

        `,
            output: ""
        },
        {
            input: `
        /* Hello world */

        // Biswajit Thakur
      
    
    `,
            output: ''
        },
        {
            input: `/* Hello world */

        // Biswajit Thakur
      
    
    `,
            output: ''
        },
        {
            input: `// Hello world 

        /* Biswajit Thakur */
      
    
    `,
            output: ``
        },
        {
            input: `// Hello world 

        /* "//|\\" */
      
    
    // This is a comment`,
            output: ``
        },
        {
            input: `// Hello world 

        /* "//|\\" */
      
    
    /* //////\\\\ This is a comment /////\\\\\\\*/`,
            output: ``
        },
        {
            input: `// Hello world 

        /* "//|\\" */
      
                    6         + 9 
 
    /* //////\\\\ This is a comment /////\\\\\\\*/`,
            output: '6+9'
        },
        {
            input: 'console.log(    true );',
            output: 'console.log(true);'
        },
        {
            input: 'console.log(  true   + 7  -9  /5 + 6 /*  * 5  */ / 4);',
            output: 'console.log(true+7-9/5+6/4);'
        },
        {
            input: `console.log(  true   + 7  -9  /5 + 6 + ' /*  * 5  */ ' + 4);`,
            output: `console.log(true+7-9/5+6+' /*  * 5  */ '+4);`
        },
        {
            input: 'console.log(/*  true */ false  /*  5 + 6 */);',
            output: 'console.log(false);'
        },
        {
            input: 'console.log( /* // */ 55);  // console.log(false); ',
            output: 'console.log(55);'
        },
        {
            input: `
    function hello() {
        let a = "this /* is */   string";
        return a;
    };
    `,
            output: 'function hello(){let a="this /* is */   string";return a;};'
        },
        {
            input: `'use strict';
    let obj = {
        a : "A",  // This is comment
        b : {
            c : /*   "E" * / */ "C",
             d : function(){
                 return;
             }
        }
    };

    `,
            output: `'use strict';let obj={a:"A",b:{c:"C",d:function(){return;}}};`
        },
        {
            input: `
let a     =  'This /* is */ \\' string " one " \\//';
/* /// ****** \\\\\\\\\ /////********/ const   b    =    " this //\\ \\" is string ' two \`";   // cmt \\
 /********
 let y = 9999999;
 ********/ 
var c =   \`This is \\\` string 3 \`;
let reg   = /regex  [\\d]  \\/ 99\\'  \\" \\\`/g;
    `,
            output: `let a='This /* is */ \\' string " one " \\//';const b=" this //\\ \\" is string ' two \`";var c=\`This is \\\` string 3 \`;let reg=/regex  [\\d]  \\/ 99\\'  \\" \\\`/g;`
        },
        {
            input: `
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
`,
            output: `'use strict';let arr=[122,576,86,0,11];console.log((function(a){console.log(a);let q=a.map((v)=>v*v);console.log(q);let s="// This /* is \\"   */ String. '  ";return s;})(arr));const hello=/regex  \\/   \\$/g;console.log(typeof hello);`
        }
    ];


    for (let i = 0; i < inputOutputs.length; i++) {
        test(`./lang/js.js (index)- toMinJs Test ${i}`, () => {
            const input = inputOutputs[i].input;
            const output = inputOutputs[i].output;
            assert.strictEqual(toMinJs(input), output);
        });
    };
};

module.exports = {
    testJs
};
