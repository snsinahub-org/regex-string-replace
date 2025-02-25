const _ = require('lodash');

module.exports = class ReplaceString {
    constructor() {
        this.replace = this.replace.bind(this);
    }

    replace(string, pattern, replacement, flags = '') {
        let result;

        try {
            if (pattern) {
                try {
                    // Sanitize the pattern
                    const safePattern = _.escapeRegExp(pattern);
                    // Add 'i' flag for case-insensitive matching
                    const regExp = new RegExp(safePattern, flags + 'i');
                    result = string.replace(regExp, replacement);
                } catch (regexError) {
                    // If pattern is not a valid regex, perform simple string replacement
                    result = string.split(new RegExp(pattern, 'i')).join(replacement);
                }
            } else {
                // Perform simple string replacement
                result = string.split(new RegExp(pattern, 'i')).join(replacement);
            }
        } catch (error) {
            console.error('Error during replacement:', error);
            result = string;
        }

        return result;
    }
}