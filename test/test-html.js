const test = require('node:test');
const assert = require('node:assert');

const { toMinHtml } = require('./..');

function testHtml() {
    const inputOutputs = [];
    for (let i = 0; i < inputOutputs.length; i++) {
        test(`./lang/html.js (index)- toMinHtml Test ${i}`, () => {
            const input = inputOutputs[i].input;
            const output = inputOutputs[i].output;
            assert.strictEqual(toMinHtml(input), output);
        });
    };
};

module.exports = {
    testHtml
};
