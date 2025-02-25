
module.exports = class ReplaceString {
  constructor() {
    this.replace = this.replace.bind(this)
  }

  replace(string, regex, replacement, flags) {
    console.log(string, regex, replacement, flags);
    if (regex) {
      
      // Perform regex replacement
      const regExp = new RegExp(regex, flags);
      
      const result = string.replace(regExp, replacement);
      console.log('Result after regex replacement:', result);
      return result;
    } else {
      // Perform simple string replacement
      const result = string.split(regex).join(replacement);
      console.log('Performing simple string replacement', result);
      return result;
    }
  }
}