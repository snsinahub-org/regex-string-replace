
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
      return result;
    } else {
      // Perform simple string replacement
      const result = string.split(regex).join(replacement);
      return result;
    }
  }
}