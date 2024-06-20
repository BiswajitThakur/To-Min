const test = require('node:test');
const assert = require('node:assert');

const { toMinCss } = require('./..');

function testCss() {
    const inputOutputs = [
        {
            input: '',
            output: '',
        },
        {
            input: '/****** comment *********/',
            output: '',
        },
        {
            input: '         /****** comment *********/',
            output: '',
        },
        {
            input: '/****** comment *********/           ',
            output: '',
        },
        {
            input: `
            `,
            output: '',
        },
        {
            input: `
            
`,
            output: '',
        },
        {
            input: `
    
    `,
            output: '',
        },
        {
            input: `/*  ##### 7777 &&&&&& ' */
            

            `,
            output: '',
        },
        {
            input: `
            
            /******/`,
            output: '',
        },
        {
            input: 'body { color : red; }',
            output: 'body{color:red;}',
        },
        {
            input: `* {
  text-align: center;
  color: blue;
}`,
            output: '*{text-align:center;color:blue;}'
        },
        {
            input: `  * {
      color : red    !important; /* "   */
    }`,
            output: '*{color:red!important;}'
        },
        {
            input: `div    {
  column-rule:    4px   double    #ff00ff  ;   /*   ** Comment** * / */
}`,
            output: 'div{column-rule:4px double #ff00ff;}'
        },
        {
            input: `body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
}`,
            output: 'body{background-color:lightblue;}h1{color:white;text-align:center;}p{font-family:verdana;font-size:20px;}'
        },
        {
            input: `#navlist      li   , #navlist a     {
  height: 44px;
  display: block;
}

#home {
  left: 0px;
       /*  * cmt 1
           * cmt 2
           * /
           * 
           *   /*
       */
  width: 46px;
  background: url('img.gif') 0 0;
}`,
            output: '#navlist li,#navlist a{height:44px;display:block;}#home{left:0px;width:46px;background:url(\'img.gif\') 0 0;}',
        },
        {
            input: `body {
  counter-reset:    section;
}

h2::before  { /*   99999999 */
  counter-increment: section;
  content: "Section    "       counter(section)      ':      ++'   ;
}`,
            output: 'body{counter-reset:section;}h2::before{counter-increment:section;content:"Section    "counter(section)\':      ++\';}'
        },
        {
            input: `@media     screen     and      (max-width:    600px)   {
  .column.side,       .column.middle   {
    width: 100%;
  }
}`,
            output: '@media screen and (max-width:600px){.column.side,.column.middle{width:100%;}}',
        },
        {
            input: `#div1 {
  position: absolute;
  left: 50px;
  width: calc(100%   -   100px);
  border: 1px solid   black;
  background-color: yellow;
  padding: 5px;
}`,
            output: '#div1{position:absolute;left:50px;width:calc(100% - 100px);border:1px solid black;background-color:yellow;padding:5px;}'
        },
        {
            input: `@keyframes   mymove {
  from {  background-color: rgb(29,   148,  35); }
  to { background-color: rgb(212,   28  ,   151); }
}`,
            output: '@keyframes mymove{from{background-color:rgb(29,148,35);}to{background-color:rgb(212,28,151);}}'
        },
        {
            input: `#div1 {
  background-color: yellow;
  height: 100px;
  width: max(50%,   300px);
}`,
            output: '#div1{background-color:yellow;height:100px;width:max(50%,300px);}'
        },
        {
            input: `:root {
  /* //// ** " *** ///  * /  */
  --main-bg-color: /* //// ** " *** ///  * /  */ coral   /**************/;   /***** * /*/
  /*********** \ *     */
}

#div1 {
  background-color: var(--main-bg-color);
  padding: 5px;  
}

#div2 {
  background-color: var(--main-bg-color);
  padding: 5px;
}

#div3 {
  background-color: var(--main-bg-color);
  padding: 5px;
}
  /* //// ** ' *** ///  * /  */`,
            output: ':root{--main-bg-color:coral;}#div1{background-color:var(--main-bg-color);padding:5px;}#div2{background-color:var(--main-bg-color);padding:5px;}#div3{background-color:var(--main-bg-color);padding:5px;}'
        },
        {
            input: `
div    {
  column-rule:    4px   double    #ff00ff  ;   /*   ** Comment** * / */
}
@media     screen     and      (max-width:    600px)   {
  .column.side,       .column.middle   {
    width: 100%;
  }
}
`,
            output: 'div{column-rule:4px double #ff00ff;}@media screen and (max-width:600px){.column.side,.column.middle{width:100%;}}'
        }
    ];
    for (let i = 0; i < inputOutputs.length; i++) {
        test(`./lang/css.js (index)- toMinCss Test ${i}`, () => {
            const input = inputOutputs[i].input;
            const output = inputOutputs[i].output;
            assert.strictEqual(toMinCss(input), output);
        });
    };
};

module.exports = {
    testCss
};
