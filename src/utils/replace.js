module.exports = class ReplaceString {
    constructor() {
        this.replace = this.replace.bind(this);
    }

    replace(string, pattern, replacement, flags = '') {
        console.log("INPUTS:", string, pattern, replacement, flags);
        let result;

        try {
            if (pattern) {
                try {
                    // Add 'i' flag for case-insensitive matching
                    const regExp = new RegExp(pattern, flags + 'i');
                    result = string.replace(regExp, replacement);
                    console.log('Result after regex replacement:', result);
                } catch (regexError) {
                    console.error('Invalid regex pattern, performing simple string replacement:', regexError);
                    // If pattern is not a valid regex, perform simple string replacement
                    result = string.split(new RegExp(pattern, 'i')).join(replacement);
                    console.log('Result after simple string replacement:', result);
                }
            } else {
                // Perform simple string replacement
                result = string.split(new RegExp(pattern, 'i')).join(replacement);
                console.log('Result after simple string replacement:', result);
            }
        } catch (error) {
            console.error('Error during replacement:', error);
            result = string;
        }

        return result;
    }
}