
module.exports = class ReplaceString {
    constructor() {
        this.replace = this.replace.bind(this);
      }
    
      replace(string, pattern, replacement, flags) {
        console.log("INPUTS:", string, pattern, replacement, flags);
        let result;
    
        try {
          if (pattern) {
            // Perform regex replacement
            const regExp = new RegExp(pattern, flags);
            result = string.replace(regExp, replacement);
            console.log('Result after regex replacement:', result, regExp);
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