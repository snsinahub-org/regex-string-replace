module.exports = class ReplaceString {
    constructor() {
        this.replace = this.replace.bind(this);
    }

    replace(string, pattern, replacement, flags) {
        console.log("INPUTS:", string, pattern, replacement, flags);
        let result;

        try {
            if (pattern) {
                try {
                    // Check if the pattern is a valid regex
                    const regExp = new RegExp(pattern, flags);
                    result = string.replace(regExp, replacement);
                    console.log('Result after regex replacement:', result);
                } catch (regexError) {
                    // If pattern is not a valid regex, perform simple string replacement
                    result = string.split(pattern).join(replacement);
                    console.log('Performing simple string replacement', result);
                }
            } else {
                // Perform simple string replacement
                result = string.split(pattern).join(replacement);
                console.log('Performing simple string replacement', result);
            }
        } catch (error) {
            console.error('Error during replacement:', error);
            result = string;
        }

        return result;
    }
}