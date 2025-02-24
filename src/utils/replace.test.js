const ReplaceString = require('./replace');
const assert = require('assert');

describe('ReplaceString', function() {
    let replaceString;

    beforeEach(function() {
        replaceString = new ReplaceString();
    });

    it('should replace a substring with another string', function() {
        const result = replaceString.replace('hello world', 'world', 'there');
        assert.strictEqual(result, 'hello there');
    });

    it('should replace a pattern with another string using regex', function() {
        const result = replaceString.replace('hello world', 'world', 'there', 'g');
        assert.strictEqual(result, 'hello there');
    });

    it('should replace all occurrences of a pattern using regex', function() {
        const result = replaceString.replace('hello world world', 'world', 'there', 'g');
        assert.strictEqual(result, 'hello there there');
    });

    it('should replace a pattern with another string using regex with case insensitive flag', function() {
        const result = replaceString.replace('hello World', 'world', 'there', 'gi');
        assert.strictEqual(result, 'hello there');
    });

    it('should replace all occurrences of a substring', function() {
        const result = replaceString.replace('hello world world', 'world', 'there');
        assert.strictEqual(result, 'hello there there');
    });

    it('should return the original string if no match is found', function() {
        const result = replaceString.replace('hello world', 'planet', 'there');
        assert.strictEqual(result, 'hello world');
    });
});