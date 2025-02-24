
module.exports = class ReplaceString {
  constructor() {
    this.replace = this.replace.bind(this)
  }

  replace(string, regex, replacement, flags) {
    if (regex) {
      // Perform regex replacement
      const regExp = new RegExp(regex, flags);
      return string.replace(regExp, replacement);
    } else {
      // Perform simple string replacement
      return string.split(regex).join(replacement);
    }
  }
}