module.exports = Phrase;

// Reverses a string.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join('');
}
// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns the letters in the content.
  this.letters = function letters() {
    // return Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("");
    const alphaRegEx = /[a-z]/gi;
    return (this.content.match(alphaRegEx) || []).join(""); // short circuit in case of null content
  }

  // Returns content processed for palindrome test.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }
  // Returns true for palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent()
    ? this.processedContent() === this.processedContent().reverse()
    : false;
  }
}
// // Defines a TranslatedPhrase object.
// function TranslatedPhrase(content, translation) {
//   this.content = content;
//   this.translation = translation;

//   // Returns translation processed for palindrome test.
//   this.processedContent = function processedContent() {
//     return this.processor(this.translation);
//   }
// }  

